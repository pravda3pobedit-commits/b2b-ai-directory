import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

import {
  buildIndexNowPayload,
  submitIndexNow,
} from "../scripts/submit-indexnow.mjs";

const config = {
  host: "www.b2baistack.com",
  key: "A1b2C3d4E5f6G7h8",
  keyLocation: "https://www.b2baistack.com/indexnow-key.txt",
};

test("builds a normalized payload for unique B2BAIStack URLs", () => {
  assert.deepEqual(
    buildIndexNowPayload(
      [
        "https://www.b2baistack.com/comparisons?q=video tools",
        "https://www.b2baistack.com/comparisons?q=video tools",
      ],
      config,
    ),
    {
      ...config,
      urlList: ["https://www.b2baistack.com/comparisons?q=video%20tools"],
    },
  );
});

test("rejects non-canonical B2BAIStack URLs", () => {
  for (const invalidUrl of [
    "http://www.b2baistack.com/comparisons",
    "https://b2baistack.com/comparisons",
    "https://www.b2baistack.com:444/comparisons",
    " https://www.b2baistack.com/comparisons ",
    "https://www.b2baistack.com/comparisons#sales",
    "https://user:pass@www.b2baistack.com/comparisons",
    "https://www.b2baistack.com/comparisons/\tvideo",
  ]) {
    assert.throws(
      () => buildIndexNowPayload([invalidUrl], config),
      /canonical official HTTPS origin/,
    );
  }
});

test("requires 1 to 10000 unique URLs", () => {
  assert.throws(() => buildIndexNowPayload([], config), /at least one URL/);
  const urls = Array.from(
    { length: 10_001 },
    (_, index) => `https://www.b2baistack.com/tool/item-${index}`,
  );
  assert.throws(
    () => buildIndexNowPayload(urls, config),
    /at most 10000 unique URLs/,
  );
});

test("rejects a key location outside B2BAIStack", () => {
  assert.throws(
    () =>
      buildIndexNowPayload(["https://www.b2baistack.com/"], {
        ...config,
        keyLocation: "https://example.com/indexnow-key.txt",
      }),
    /key location/,
  );
});

test("submits the payload and accepts HTTP 200 or 202", async () => {
  for (const expectedStatus of [200, 202]) {
    let request;
    const status = await submitIndexNow(["https://www.b2baistack.com/"], {
      config,
      fetchImpl: async (url, options) => {
        request = { url, options };
        return new Response(null, { status: expectedStatus });
      },
    });
    assert.equal(status, expectedStatus);
    assert.equal(request.url, "https://api.indexnow.org/indexnow");
    assert.equal(request.options.method, "POST");
    assert.deepEqual(JSON.parse(request.options.body), {
      ...config,
      urlList: ["https://www.b2baistack.com/"],
    });
  }
});

test("reports rejected IndexNow requests", async () => {
  await assert.rejects(
    submitIndexNow(["https://www.b2baistack.com/"], {
      config,
      fetchImpl: async () => new Response("Invalid key", { status: 403 }),
    }),
    /HTTP 403: Invalid key/,
  );
});

test("publishes the configured key and exposes the CLI", async () => {
  const realConfig = JSON.parse(
    await readFile(new URL("../config/indexnow.json", import.meta.url), "utf8"),
  );
  const routeSource = await readFile(
    new URL("../src/app/indexnow-key.txt/route.ts", import.meta.url),
    "utf8",
  );
  const packageJson = JSON.parse(
    await readFile(new URL("../package.json", import.meta.url), "utf8"),
  );

  assert.match(realConfig.key, /^[A-Za-z0-9-]{8,128}$/);
  assert.equal(new URL(realConfig.keyLocation).pathname, "/indexnow-key.txt");
  assert.match(routeSource, /indexNowConfig\.key/);
  assert.match(routeSource, /text\/plain/);
  assert.equal(
    packageJson.scripts.indexnow,
    "node scripts/submit-indexnow.mjs",
  );
});
