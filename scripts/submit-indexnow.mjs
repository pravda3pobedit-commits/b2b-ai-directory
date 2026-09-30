import { pathToFileURL } from "node:url";

import indexNowConfig from "../config/indexnow.json" with { type: "json" };

const endpoint = "https://api.indexnow.org/indexnow";

export function buildIndexNowPayload(urls, config = indexNowConfig) {
  if (!Array.isArray(urls) || urls.length === 0) {
    throw new Error("IndexNow requires at least one URL.");
  }

  const officialOrigin = `https://${config.host}`;
  const keyLocation = new URL(config.keyLocation);
  if (
    config.keyLocation !== config.keyLocation.trim() ||
    /[\t\r\n]/.test(config.keyLocation) ||
    keyLocation.origin !== officialOrigin ||
    keyLocation.username !== "" ||
    keyLocation.password !== "" ||
    keyLocation.hash !== ""
  ) {
    throw new Error(
      "IndexNow key location must use the canonical official HTTPS origin.",
    );
  }

  const normalizedUrls = new Set();
  for (const value of urls) {
    const url = new URL(value);
    const isCanonicalOfficialUrl =
      typeof value === "string" &&
      value === value.trim() &&
      !/[\t\r\n]/.test(value) &&
      url.origin === officialOrigin &&
      url.username === "" &&
      url.password === "" &&
      url.hash === "";

    if (!isCanonicalOfficialUrl) {
      throw new Error(
        `IndexNow accepts only the canonical official HTTPS origin; every URL must use the official HTTPS host: ${config.host}`,
      );
    }
    normalizedUrls.add(url.href);
  }

  if (normalizedUrls.size > 10_000) {
    throw new Error("IndexNow accepts at most 10000 unique URLs per request.");
  }

  return {
    host: config.host,
    key: config.key,
    keyLocation: keyLocation.href,
    urlList: [...normalizedUrls],
  };
}

export async function submitIndexNow(urls, options = {}) {
  const fetchImpl = options.fetchImpl ?? fetch;
  const payload = buildIndexNowPayload(urls, options.config ?? indexNowConfig);
  const response = await fetchImpl(endpoint, {
    method: "POST",
    headers: { "content-type": "application/json; charset=utf-8" },
    body: JSON.stringify(payload),
  });

  if (response.status !== 200 && response.status !== 202) {
    const body = await response.text();
    throw new Error(
      `IndexNow submission failed with HTTP ${response.status}${body ? `: ${body}` : ""}`,
    );
  }

  return response.status;
}

const isMainModule =
  process.argv[1] && pathToFileURL(process.argv[1]).href === import.meta.url;

if (isMainModule) {
  try {
    const urls = process.argv.slice(2);
    const status = await submitIndexNow(urls);
    console.log(`IndexNow accepted ${urls.length} URL(s): HTTP ${status}`);
  } catch (error) {
    console.error(error instanceof Error ? error.message : error);
    process.exitCode = 1;
  }
}
