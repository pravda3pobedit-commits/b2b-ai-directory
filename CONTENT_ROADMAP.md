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
- Distribution: LinkedIn post performance, newsletter signups, partner replies, and referral/affiliate contact quality.

## Current Site Base

- Categories: video ads, meetings intelligence, workflow automation, sales prospecting, customer support.
- Comparisons: Make vs Zapier, Hunter vs Apollo, Chatbase vs Intercom, Fireflies vs Fathom, Creatify vs InVideo.
- Newsletter: beehiiv embed connected.
- LinkedIn: planned cadence is 2 posts per week for now.
- Legacy route: `/blog/*` redirects to `/comparisons`.

## Distribution And Partner Loop

Distribution should support the content engine instead of becoming a separate project.

- **LinkedIn cadence**
  - Baseline: 2 posts per week.
  - Best formats: practical comparison notes, "how to choose" posts, tool-stack observations, short lessons from new pages, and transparent build-in-public updates.
  - Goal: credibility, early traffic, founder/operator signal, and content testing before investing in bigger pages.

- **Newsletter**
  - Use as a slow trust channel, not a high-volume broadcast.
  - Best sends: new comparison summaries, monthly tool-stack notes, category updates, and "what changed in B2B AI tools" digests when there is enough substance.

- **Referral / affiliate partner relationships**
  - Keep light contact with partners whose products matter to the site.
  - Possible value: early product/pricing updates, better affiliate resources, commission improvements, co-marketing opportunities, custom landing pages, quotes, and faster correction of outdated facts.
  - Guardrail: do not let partner relationships override editorial trust. Sponsored/affiliate incentives should shape prioritization, not force conclusions.
  - External outreach requires explicit Alex approval before sending.

- **Feedback loop**
  - Reuse each new page across LinkedIn/newsletter.
  - Watch which posts or emails get replies/clicks.
  - Feed those signals back into the roadmap.

## Candidate Queue

### Deployed Package - 2026-06-18 Monitoring Refresh

- **Outbound stack guide**
  - Route: `/guides/ai-sales-prospecting-stack`
  - Reason: market scan showed strong buyer confusion around Clay, Apollo, Hunter, Instantly, Smartlead, and Lemlist as different layers of the same outbound stack.
  - Sources used: Clay announcements, Apollo 2026 release notes, Instantly 2026 cold email benchmark, and SERP patterns around outbound-stack comparisons.
  - Status: deployed to production in commit `f7dad6c` on 2026-06-18.

- **Sales prospecting cluster refresh**
  - Routes/data: `/category/ai-sales-prospecting-tools`, `/tool/apollo-ai`, `/comparisons/hunter-vs-apollo`, sitemap.
  - Reason: Apollo has become a broader AI-assisted GTM workspace, while Hunter remains the cleaner email finder/verifier layer.
  - Monetization note: apply for Apollo Affiliate Partners via PartnerStack; if approved, replace the current normal Apollo URL in Apollo-related pages with the affiliate link.
  - Status: deployed to production in commit `f7dad6c` on 2026-06-18.

- **Customer support / Fin refresh**
  - Routes/data: `/tool/intercom-fin`, `/comparisons/chatbase-vs-intercom`.
  - Reason: Salesforce announced a definitive agreement to acquire Fin, formerly Intercom, making Fin a stronger enterprise support-agent roadmap signal.
  - Status: deployed to production in commit `f7dad6c` on 2026-06-18.

### P0 - Next Best Operator Moves

- **2026-06-23 quick scan: deprioritize Apollo and Lemlist monetization**
  - Constraint: Alex said Apollo and Lemlist are not useful right now for referral-link monetization.
  - Signal: current SERPs still contain demand around Clay/Apollo and Smartlead/Instantly/Lemlist, but Apollo/Lemlist should stay editorial context rather than primary affiliate bets.
  - Better near-term candidates: Hunter, Snov.io, Saleshandy, Smartlead, and Lusha. These have clearer public partner/affiliate paths and fit the current sales-prospecting cluster.
  - Recommended next page: `Hunter vs Snov.io` or a broader `Hunter alternatives for B2B email finding` page, because the site already has Hunter content and can add Snov.io without rebuilding the category model.
  - Secondary page: `Smartlead vs Saleshandy` or `Best cold email outreach tools for agencies`, depending on whether Instantly should also be excluded from monetization.
  - Implementation note: `Hunter vs Snov.io` was prepared locally on 2026-06-23 with a new Snov.io tool page, comparison route, sales-prospecting category link, and sitemap coverage. Replace the generic Snov.io URL with Alex's approved affiliate link once Snov.io approves the application.

- **Strengthen sales prospecting cluster**
  - Target: `/category/ai-sales-prospecting-tools`, Hunter/Apollo pages, new roundup/comparisons.
  - Reason: strongest current affiliate/SEO fit after Hunter work.
  - Possible work: add deeper Hunter review sections, compare Hunter with alternatives, create a "best AI sales prospecting tools" page if route pattern is added.
  - Evidence needed: GSC queries, Hunter affiliate guidance, current SERP, official tool positioning.
  - Status: in progress via 2026-06-18 monitoring refresh.

- **Create first recurring market scan**
  - Target: this roadmap plus a short operator note.
  - Reason: establish the monitoring habit before adding more pages.
  - Possible work: collect 5-10 opportunities, score by buyer intent/monetization/effort, choose 1-3.
  - Evidence needed: GSC export/screenshots, official product sources, current SERPs.
  - Status: first pilot completed on 2026-06-18.

- **Define first partner relationship list**
  - Target: affiliate/referral partners and priority products.
  - Reason: partner contact can provide updates, resources, and better monetization, but needs a light process.
  - Possible work: list current referral/affiliate products, contact status, what we want from each, and whether outreach is worth it.
  - Evidence needed: current affiliate dashboards/resources and product priority.
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
