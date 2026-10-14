import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const comparisonDataPath = new URL(
  "../src/data/comparisons.ts",
  import.meta.url,
);
const comparisonPagePath = new URL(
  "../src/app/comparisons/[slug]/page.tsx",
  import.meta.url,
);

function creatifyComparisonRecord(source) {
  const start = source.indexOf('slug: "creatify-vs-invideo"');
  assert.notEqual(start, -1, "Creatify vs InVideo comparison must exist");
  const end = source.indexOf("\n  },\n];", start);
  assert.notEqual(end, -1, "Creatify vs InVideo comparison must be bounded");
  return source.slice(start, end + 5);
}

function connectedEditingRenderer(source) {
  const start = source.indexOf("{comparison.connectedEditing && (");
  assert.notEqual(start, -1, "connected-editing renderer must exist");
  const end = source.indexOf(
    '\n\n        <section className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">',
    start,
  );
  assert.notEqual(
    end,
    -1,
    "connected-editing renderer must end before use cases",
  );
  return source.slice(start, end);
}

test("Creatify vs InVideo explains the connected-editor boundary", async () => {
  const data = await readFile(comparisonDataPath, "utf8");
  const target = creatifyComparisonRecord(data);

  assert.match(data, /connectedEditing\?:/);
  assert.match(target, /connectedEditing:/);
  assert.match(
    target,
    /ChatGPT or Claude can plan the cut, but the editor makes the edit/,
  );
  assert.match(target, /Plan in ChatGPT or Claude/);
  assert.match(target, /Send edit actions through MCP/);
  assert.match(target, /Review and finish in the editor/);
  assert.match(target, /Without a compatible MCP editor connection/);
  assert.match(
    target,
    /https:\/\/invideo\.io\/blog\/how-to-turn-long-videos-into-shorts-with-chatgpt\//,
  );
  assert.match(
    target,
    /https:\/\/invideo\.io\/blog\/how-to-edit-long-videos-into-youtube-shorts-with-claude\//,
  );
  assert.match(target, /https:\/\/invideo\.io\/mcp\//);
});

test("the comparison page renders the connected-editing contract", async () => {
  const page = await readFile(comparisonPagePath, "utf8");
  const renderer = connectedEditingRenderer(page);

  assert.match(renderer, /id="connected-editor-mcp"/);
  for (const field of ["title", "intro", "steps", "boundary", "sources"]) {
    assert.match(
      renderer,
      new RegExp(`comparison\\.connectedEditing\\.${field}`),
    );
  }

  for (const field of ["heading", "detail"]) {
    assert.match(renderer, new RegExp(`step\\.${field}`));
  }

  for (const field of ["label", "url"]) {
    assert.match(renderer, new RegExp(`source\\.${field}`));
  }

  assert.match(renderer, /href=\{source\.url\}/);
  assert.match(renderer, /target="_blank"/);
  assert.match(renderer, /rel="noopener noreferrer"/);
  assert.match(renderer, /opens in a new tab/);
});
