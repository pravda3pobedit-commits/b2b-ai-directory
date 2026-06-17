# B2BAIStack Content Roadmap

This is the working backlog for keeping B2BAIStack updated as a practical B2B AI tools site. It is not a news queue. Prioritize pages that help buyers compare, choose, and implement tools.

## Operating Principles

- Prefer buyer-intent pages: comparisons, category hubs, tool reviews, best-tools roundups, and workflow guides.
- Use evidence before writing: GSC queries, affiliate opportunities, current SERPs, official product pages, pricing/docs/changelogs, and real operator questions.
- Keep facts current and conservative. Do not invent pricing, benchmarks, compliance guarantees, or product capabilities.
- Protect static performance: new tool and comparison pages should remain prerendered/SSG where possible.
- Every meaningful update should improve internal links, metadata/schema, affiliate CTAs/disclosure, and newsletter capture where relevant.

## Signals To Monitor

- GSC: rising impressions, low CTR pages, new queries around tools/categories/comparisons.
- Affiliate: programs with useful terms, good product fit, and clear buyer intent.
- Market: major product launches, pricing changes, rebrands, acquisitions, shutdowns, and category shifts.
- SERP: whether Google rewards comparison, listicle, review, or category-hub format for a target query.
- Site gaps: categories with too few tools, weak CTAs, thin comparisons, outdated descriptions, or missing next-step links.

## Current Site Base

- Categories: video ads, meetings intelligence, workflow automation, sales prospecting, customer support.
- Comparisons: Make vs Zapier, Hunter vs Apollo, Chatbase vs Intercom, Fireflies vs Fathom, Creatify vs InVideo.
- Newsletter: beehiiv embed connected.
- Legacy route: `/blog/*` redirects to `/comparisons`.

## Candidate Queue

### P0 - Next Best Operator Moves

- **Strengthen sales prospecting cluster**
  - Target: `/category/ai-sales-prospecting-tools`, Hunter/Apollo pages, new roundup/comparisons.
  - Reason: strongest current affiliate/SEO fit after Hunter work.
  - Possible work: add deeper Hunter review sections, compare Hunter with alternatives, create a "best AI sales prospecting tools" page if route pattern is added.
  - Evidence needed: GSC queries, Hunter affiliate guidance, current SERP, official tool positioning.
  - Status: candidate.

- **Create first recurring market scan**
  - Target: this roadmap plus a short operator note.
  - Reason: establish the monitoring habit before adding more pages.
  - Possible work: collect 5-10 opportunities, score by buyer intent/monetization/effort, choose 1-3.
  - Evidence needed: GSC export/screenshots, official product sources, current SERPs.
  - Status: candidate.

### P1 - Likely New Comparisons

- **Clay vs Apollo**
  - Reason: strong B2B prospecting/search-intent fit.
  - Needs: confirm current Clay positioning, pricing sensitivity, and whether a Clay tool page should come first.
  - Status: research needed.

- **Instantly vs Lemlist**
  - Reason: cold outbound users compare these directly.
  - Needs: decide whether cold email outreach belongs as a new category or inside sales prospecting.
  - Status: research needed.

- **Fathom vs Fireflies refresh**
  - Reason: comparison exists, but can be strengthened after checking current positioning and SERP.
  - Needs: official feature/pricing updates and buyer-intent FAQ.
  - Status: refresh candidate.

- **Chatbase vs Intercom refresh**
  - Reason: comparison exists and customer support is a core category.
  - Needs: current Intercom Fin/Zendesk/Chatbase positioning and support buyer questions.
  - Status: refresh candidate.

### P2 - Category And Tool Expansion

- **AI SDR / outbound automation category**
  - Reason: adjacent to Hunter/Apollo and potentially high buyer intent.
  - Needs: decide category boundaries and avoid thin overlap with sales prospecting.
  - Status: concept.

- **Cold email outreach category**
  - Reason: strong commercial intent, but compliance/deliverability claims need care.
  - Needs: define safe editorial stance before adding pages.
  - Status: concept.

- **Workflow automation cluster refresh**
  - Reason: Make vs Zapier exists, but Zapier Central and agentic automation positioning may change quickly.
  - Needs: current product research.
  - Status: refresh candidate.

## Standard Update Checklist

1. Confirm target and reason.
2. Research current facts from primary sources where possible.
3. Update data/pages using existing repo patterns.
4. Add or improve internal links.
5. Check metadata, canonical URLs, schema, sitemap coverage, and affiliate disclosure/CTA.
6. Run focused lint/checks and `npm run build`.
7. Verify local or live routes, redirects, and SSG/prerender headers.
8. Update this roadmap with status and next step.

