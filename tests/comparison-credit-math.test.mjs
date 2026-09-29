import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const comparisonDataPath = new URL("../src/data/comparisons.ts", import.meta.url);
const comparisonPagePath = new URL(
  "../src/app/comparisons/[slug]/page.tsx",
  import.meta.url,
);

function creatifyComparisonRecord(source) {
  const start = source.indexOf('slug: "creatify-vs-invideo"');
  assert.notEqual(start, -1, "Creatify vs InVideo comparison must exist");
  return source.slice(start);
}

function creditMathRenderer(source) {
  const start = source.indexOf("{comparison.creditMath && (");
  assert.notEqual(start, -1, "creditMath renderer must exist");

  const end = source.indexOf(
    '\n\n        <section className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">',
    start,
  );
  assert.notEqual(end, -1, "creditMath renderer must end before use cases");
  return source.slice(start, end);
}

test("Creatify vs InVideo owns dated cost-per-approved-ad evidence", async () => {
  const data = await readFile(comparisonDataPath, "utf8");
  const target = creatifyComparisonRecord(data);

  assert.match(data, /creditMath\?:/);
  assert.match(target, /creditMath:/);
  assert.match(target, /Credits are not comparable across tools/);
  assert.match(target, /Verified September 29, 2026/);
  assert.match(target, /5 credits per 15 seconds/);
  assert.match(target, /3 credits per 15 seconds/);
  assert.match(target, /model-dependent/);
  assert.match(
    target,
    /Total monthly plan cost \+ top-ups \+ editing and review cost/,
  );
  assert.match(target, /Approved ads/);
  assert.match(
    target,
    /Vendor examples describe vendor workflows, not guaranteed customer outcomes/,
  );
  assert.match(
    target,
    /https:\/\/help\.creatify\.ai\/en\/articles\/9348041-credit-usage-billing-and-validity/,
  );
  assert.match(target, /https:\/\/invideo\.io\/pricing/);
});

test("the comparison page renders the complete credit-math contract", async () => {
  const page = await readFile(comparisonPagePath, "utf8");
  const renderer = creditMathRenderer(page);

  for (const field of [
    "verifiedOn",
    "title",
    "intro",
    "vendorNotes",
    "worksheet.inputs",
    "worksheet.formula",
    "worksheet.guidance",
    "caution",
  ]) {
    assert.match(renderer, new RegExp(`comparison\\.creditMath\\.${field}`));
  }

  for (const field of ["vendor", "detail", "sourceUrl", "sourceLabel"]) {
    assert.match(renderer, new RegExp(`note\\.${field}`));
  }

  assert.match(renderer, /Compare the credit math before you choose a plan/);
  assert.match(renderer, /href=\{note\.sourceUrl\}/);
  assert.match(renderer, /target="_blank"/);
  assert.match(renderer, /rel="noopener noreferrer"/);
});
