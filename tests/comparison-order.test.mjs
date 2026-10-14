import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { readFile } from "node:fs/promises";
import test from "node:test";

const comparisonDataUrl = new URL("../src/data/comparisons.ts", import.meta.url)
  .href;

const comparisonPagePath = new URL(
  "../src/app/comparisons/page.tsx",
  import.meta.url,
);

test("comparison records expose dates and sort newest first without mutation", () => {
  const comparisonData = JSON.parse(
    execFileSync(
      process.execPath,
      [
        "--no-warnings",
        "--input-type=module",
        "--eval",
        `import * as data from ${JSON.stringify(comparisonDataUrl)};
const originalOrder = data.comparisons.map(({ slug }) => slug);
const ordered = data.getComparisonsByRecency?.();
console.log(JSON.stringify({
  hasHelper: typeof data.getComparisonsByRecency === "function",
  comparisons: data.comparisons,
  originalOrder,
  ordered,
  orderAfterSort: data.comparisons.map(({ slug }) => slug),
}));`,
      ],
      { encoding: "utf8" },
    ),
  );

  assert.equal(
    comparisonData.hasHelper,
    true,
    "comparison data must expose a recency-order helper",
  );

  for (const comparison of comparisonData.comparisons) {
    assert.match(
      comparison.updatedAt,
      /^\d{4}-\d{2}-\d{2}$/,
      `${comparison.slug} must have an ISO update date`,
    );
  }

  const originalOrder = comparisonData.originalOrder;
  const ordered = comparisonData.ordered;
  const orderedDates = ordered.map(({ updatedAt }) => updatedAt);

  assert.deepEqual(orderedDates, [...orderedDates].sort().reverse());
  assert.equal(ordered[0].slug, "creatify-vs-invideo");
  assert.deepEqual(
    comparisonData.orderAfterSort,
    originalOrder,
    "sorting must not mutate the canonical data array",
  );
});

test("the comparisons hub uses recency order for cards and JSON-LD", async () => {
  const page = await readFile(comparisonPagePath, "utf8");

  assert.match(page, /getComparisonsByRecency/);
  assert.match(page, /const orderedComparisons = getComparisonsByRecency\(\)/);
  assert.match(page, /itemListElement: orderedComparisons\.map/);
  assert.match(page, /orderedComparisons\.map\(\(comparison, index\)/);
  assert.match(page, /index === 0/);
  assert.match(page, />\s*Updated\s*</);
});
