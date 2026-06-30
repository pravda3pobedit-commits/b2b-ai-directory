# B2BAIStack Content Roadmap

This is the working backlog for keeping B2BAIStack updated as a practical B2B AI tools site. It is not a news queue. Prioritize pages that help buyers compare, choose, and implement tools.

## Operating Principles

- Prefer buyer-intent pages: comparisons, category hubs, tool reviews, best-tools roundups, and workflow guides.
- Use evidence before writing: GSC queries, affiliate opportunities, current SERPs, official product pages, pricing/docs/changelogs, and real operator questions.
- Do not choose or concept a next page from backlog guesses alone. Run a fresh signal audit first, then turn the evidence into 1-3 candidate actions.
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

- **Fresh signal audit before the next page**
  - Target: GSC, YouTube analytics, current SERPs, affiliate/partner status, and official product updates across multiple clusters, not only the latest sales/outbound work.
  - Reason: Alex explicitly corrected that the next B2B move should be based on current signals, not roadmap hypotheses.
  - Output: short findings memo with evidence, weak signals, buyer-intent fit, monetization fit, and what not to do yet.
  - 2026-06-29 light check: video/ad cluster now has a concrete Creatify signal to include in the Thursday audit. Creatify launched AI Media Buyer, positioning it as an AI advertising agent that connects ad accounts, builds/launches campaigns and creative, and keeps optimizing from chat. Evaluate this alongside InVideo Agent One for existing `/comparisons/creatify-vs-invideo` and `/category/ai-video-ad-generators` maintenance; do not spin up a new page before the full multi-cluster audit.
  - 2026-06-30 analytics snapshot from Alex's screenshots:
    - Vercel: 27 visitors, 46 page views, 74% bounce rate for the visible late-June period. Page depth is about 1.7 pageviews/visitor and traffic falls to near zero after Jun 27-28.
    - GSC: 7-day organic signal is effectively zero clicks with only tiny impressions. Use GSC as an indexing watch until top queries/pages show meaningful impressions.
    - LinkedIn: video/ad category post reached 70 impressions and 23 members, with 43% outside the network, but produced 0 profile viewers and 0 followers from the post.
    - YouTube: `Hunter.io vs Snov.io` is visible in the top videos for the last 28 days with 6 views, a tiny but real signal for sales-prospecting comparison content.
    - Top pages/referrers follow-up: `/comparisons/hunter-vs-snovio` is the strongest visible page with 14 visitors, followed by homepage 13, comparisons hub 3, Hunter tool 2, Snov.io tool 2, and video/ad category 1. Referrers are mixed: Vercel 4, Facebook 2+1 mobile, LinkedIn 2+1 Android, Snov FirstPromoter 1, YouTube 1. Audience is mostly desktop, with USA 52% and Ukraine 26% visible.
  - 2026-06-30 operator decision: do not start a large redesign or new page from these numbers. Run one measured distribution/content cycle first: prioritize `Hunter vs Snov.io` because it is the strongest actual page signal, keep one native LinkedIn follow-up on `Creatify vs InVideo: AI ad agent vs AI video agent` as the second experiment, and UTM-tag every shared URL.
  - 2026-06-30 site action: added a related comparison block on `/category/ai-video-ad-generators` pointing to `/comparisons/creatify-vs-invideo` so traffic from the video/ad LinkedIn post has a clearer next click.
  - 2026-06-30 site action: added related next-step links to `/comparisons/hunter-vs-snovio` pointing to the sales prospecting category and outbound stack guide, because that comparison is the current traffic leader and needs more internal paths after the verdict.
  - 2026-06-30 site action: added homepage search for AI tools, workflows, comparisons, categories, and the sales prospecting stack guide. Search result clicks are tracked in Vercel Analytics as `Directory Search Result Click` with query, result type, result title, and href. This supports the current "teach visitors to make a second click" priority and makes the directory easier to use after social/YouTube traffic lands on the site.
  - 2026-06-30 AI visibility correction: Alex clarified that "search by neural networks" meant showing/citing B2BAIStack in AI answer engines, not onsite search. Added explicit robots allowances for OpenAI, ChatGPT, Perplexity, and Google crawlers; added static `/llms.txt` and `/llms-full.txt` routes with canonical site context, priority pages, category pages, comparisons, guides, tool pages, and citation guidance; expanded global WebSite/Organization JSON-LD with B2B AI topic coverage. This is a technical GEO/AEO foundation, not a ranking guarantee.
  - 2026-06-30 market scan: external signals confirm that the sales prospecting/outbound cluster should lead the next cycle. G2's 2026 AI sales intelligence report frames prospecting as an attention/prioritization problem, with AI moving beyond enrichment into account prioritization, sequencing, and workflow-native execution. Fortune Business Insights sizes AI SDR at USD 5.22B in 2026 with a projected 21.2% CAGR to 2034. Snov.io's recent updates emphasize multichannel outreach, deliverability checks, LinkedIn automation, and AI-agent outreach workflows, while Hunter's June 2026 content positions Hunter Sequences as a simpler all-in-one cold email option and keeps deliverability/reply-rate benchmarks central. This supports framing `Hunter vs Snov.io` as "focused email data layer vs broader outbound workflow", not just "email finder vs email finder".
  - 2026-06-30 video/ad market scan: the video/ad market is hot, but more platform-led and crowded. Meta announced Cannes 2026 AI ad creation/testing/launching workflows with brand memory, Google is pushing Veo-generated video variations in Ads, Creatify has active 2026 product/news momentum, and HeyGen/Arcads/Creatify-style performance creative lists are proliferating. This keeps `Creatify vs InVideo` as a useful second experiment, but current site analytics do not justify making video/ad the first distribution priority.
  - 2026-06-30 final cycle plan: first publish/distribute the Hunter/Snov follow-up with UTM links on LinkedIn, YouTube, and Facebook; then watch whether visitors move from `/comparisons/hunter-vs-snovio` to tool pages, the sales prospecting category, or the outbound stack guide. Only after that 7-day readout choose between a Hunter alternatives page, a best AI sales prospecting tools page, or a Creatify/InVideo refresh.
  - Status: required before selecting the next content concept.

- **InVideo Agent One maintenance refresh**
  - Signal: InVideo affiliate update on 2026-06-26 said tracking was broken from 2026-05-13 through 2026-06-12 and that the program is shifting July promotion toward Agent One, a premium AI video agents offering.
  - Routes/data: `/tool/invideo-ai`, `/comparisons/creatify-vs-invideo`, `/category/ai-video-ad-generators`.
  - Reason: this is an official product and affiliate positioning change inside the video/ad cluster. It supports updating existing pages before considering a separate new Agent One page.
  - Follow-up: verify May/June retroactive conversions in Impact and include Agent One in the next multi-cluster B2B signal audit.
  - Status: maintenance refresh prepared on 2026-06-26.

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
