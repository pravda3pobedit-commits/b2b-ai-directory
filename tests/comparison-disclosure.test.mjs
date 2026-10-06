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

function disclosureRenderer(source) {
  const start = source.indexOf("{comparison.disclosureChecklist && (");
  assert.notEqual(start, -1, "disclosure checklist renderer must exist");

  const end = source.indexOf(
    '\n\n        <section className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">',
    start,
  );
  assert.notEqual(end, -1, "disclosure renderer must end before use cases");
  return source.slice(start, end);
}

function disclosureData(source) {
  const start = source.indexOf("disclosureChecklist:");
  assert.notEqual(start, -1, "disclosure checklist data must exist");
  const end = source.indexOf("\n    useCases:", start);
  assert.notEqual(
    end,
    -1,
    "disclosure checklist data must end before use cases",
  );
  return source.slice(start, end);
}

test("Creatify vs InVideo owns the sourced AI-ad disclosure checklist", async () => {
  const data = await readFile(comparisonDataPath, "utf8");
  const target = creatifyComparisonRecord(data);
  const checklist = disclosureData(target);

  assert.match(data, /disclosureChecklist\?:/);
  assert.match(target, /disclosureChecklist:/);
  assert.match(target, /Before you publish an AI video ad/);
  assert.match(target, /Not every AI-assisted video needs the same label/);
  assert.match(target, /Write down what AI changed/);
  assert.match(target, /Check what the ad resembles/);
  assert.match(target, /Check whether it could look authentic/);
  assert.match(target, /Keep provenance intact/);
  assert.match(
    target,
    /Make required disclosure perceivable at first exposure/,
  );
  assert.match(target, /visible or audible/);
  assert.match(target, /Record the review/);
  assert.match(target, /AI-generated or manipulated video/);
  assert.match(target, /operational guidance, not legal advice/);
  assert.match(
    target,
    /https:\/\/digital-strategy\.ec\.europa\.eu\/en\/faqs\/transparency-obligations-under-article-50-ai-act/,
  );
  assert.match(
    target,
    /https:\/\/www\.iab\.com\/guidelines\/ai-transparency-disclosure-framework-v2/,
  );
  assert.equal(
    [...checklist.matchAll(/\n\s+heading: /g)].length,
    6,
    "checklist must contain exactly six checks",
  );
  assert.equal(
    [...checklist.matchAll(/\n\s+url: /g)].length,
    3,
    "checklist must contain exactly three sources",
  );
});

test("the comparison page renders the complete disclosure checklist", async () => {
  const page = await readFile(comparisonPagePath, "utf8");
  const renderer = disclosureRenderer(page);

  assert.match(renderer, /id="ai-video-ad-disclosure"/);
  for (const field of [
    "title",
    "intro",
    "checks",
    "labelExamples",
    "providerNote",
    "deployerNote",
    "frameworkNote",
    "caution",
    "sources",
  ]) {
    assert.match(
      renderer,
      new RegExp(`comparison\\.disclosureChecklist\\.${field}`),
    );
  }

  for (const field of ["heading", "detail"]) {
    assert.match(renderer, new RegExp(`check\\.${field}`));
  }

  for (const field of ["label", "url"]) {
    assert.match(renderer, new RegExp(`source\\.${field}`));
  }

  assert.match(renderer, /href=\{source\.url\}/);
  assert.match(renderer, /target="_blank"/);
  assert.match(renderer, /rel="noopener noreferrer"/);
  assert.match(renderer, /opens in a new tab/);
  assert.match(renderer, /text-slate-400/);
  assert.doesNotMatch(renderer, /text-slate-500/);
});
