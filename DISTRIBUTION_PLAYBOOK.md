# B2BAIStack Distribution Playbook

Use distribution to test and amplify the site, not to create a separate content farm. The site stays the source of truth; social and publishing platforms carry adapted versions of the same editorial ideas.

## Active Channels

| Channel | Role | Baseline cadence | Main format | Link behavior |
| --- | --- | --- | --- | --- |
| LinkedIn | Operator credibility and B2B discovery | 2 posts / week | Native short posts, comparison notes, lessons from pages | One UTM link, usually near the end or first comment |
| YouTube Shorts | Lightweight video discovery | 1 short per core comparison or guide | 30-60s captioned screen/video summary | Canonical page link in description |
| Substack | Newsletter and searchable editorial archive | 1 useful post / week during warmup | Short brief, digest, or "what changed" note | 1-3 contextual links, no link stuffing |
| Medium | Syndicated editorial reach and search surface | 1 adapted/imported post / week during warmup | Human-edited article or imported canonical copy | Canonical link when republishing; affiliate links disclosed |

## Platform Guardrails

### Substack

Use Substack as a trust channel first, traffic channel second.

- Start slowly for the new account: publish one genuinely useful issue before asking for anything.
- Do not create many thin posts that exist only to point back to B2BAIStack.
- Do not spam Substack comments, replies, Notes, or discussion threads with links.
- Keep each issue readable without clicking: short verdict, comparison table, one practical takeaway, then link to the full page.
- Use tags such as `AI Sales`, `B2B Tools`, `Comparisons`, and `Workflow Automation` so the archive is navigable.
- Add the B2BAIStack site and LinkedIn/YouTube links in the publication profile, not repeatedly in every paragraph.
- If affiliate links appear in a Substack post, disclose clearly before or near the links.

Good first Substack format:

```text
Subject: Hunter vs Snov.io: focused email data or full outbound workflow?

1. One-line verdict
2. Who should choose Hunter
3. Who should choose Snov.io
4. One mistake buyers make
5. Link to full comparison on B2BAIStack
```

### Medium

Medium is more sensitive to SEO-first, affiliate-first, and AI-generated content. Treat it as an editorial syndication channel, not a backlink machine.

- Prefer human-edited posts with a clear point of view. Do not publish raw AI-generated articles.
- Do not put AI-generated writing behind the Medium Partner Program paywall.
- Avoid product-review articles whose only purpose is ranking and affiliate traffic.
- If republishing a B2BAIStack article, use Medium's import tool or manually set the canonical link to the original site URL.
- If a story contains affiliate/self-promotional links, disclose them before the links and keep the article useful without them.
- Expect some posts to receive only Network Distribution; the goal is a clean footprint and extra discovery, not instant reach.
- Avoid heavy embedding of our own Medium stories or repeated self-promo blocks.

Good first Medium format:

```text
Title: Hunter vs Snov.io: When a B2B Team Needs Data vs an Outbound Workflow

1. Problem framing
2. Decision matrix
3. 3 buyer scenarios
4. Short verdict
5. Canonical/full comparison link
```

## Repurposing Workflow

1. Publish or update the canonical B2BAIStack page.
2. Create one LinkedIn post that tests the angle in plain language.
3. Create one YouTube Short from the same angle if it can be shown visually.
4. Publish a Substack brief that gives enough value inside the email.
5. Publish a Medium adapted article or imported canonical copy.
6. Use UTMs for every off-site link.
7. Review traffic after 7 days: source, clicks, page depth, newsletter signup, and any replies.

## UTM Pattern

Use consistent source labels so Vercel/GSC/analytics are readable.

```text
?utm_source=linkedin&utm_medium=social&utm_campaign=sales_prospecting_stack_202607&utm_content=hunter_snov_post
?utm_source=youtube&utm_medium=shorts&utm_campaign=sales_prospecting_stack_202607&utm_content=hunter_snov_short
?utm_source=substack&utm_medium=newsletter&utm_campaign=sales_prospecting_stack_202607&utm_content=hunter_snov_brief
?utm_source=medium&utm_medium=syndication&utm_campaign=sales_prospecting_stack_202607&utm_content=hunter_snov_article
```

## First 30 Days

Week 1:
- Substack: intro issue plus Hunter/Snov brief.
- Medium: one canonical/adapted Hunter/Snov article.
- LinkedIn: two posts, one Hunter/Snov and one Creatify/InVideo.
- YouTube: one Shorts link to Hunter/Snov if there is a clean video asset.

Week 2:
- Substack: "AI sales prospecting stack: what each layer does".
- Medium: adapted sales prospecting stack article with canonical link.
- LinkedIn: one operator lesson, one comparison note.

Week 3:
- Substack: "What changed in B2B AI tools this month".
- Medium: one non-sales article, likely Creatify vs InVideo or support AI.
- LinkedIn/YouTube: reuse the strongest Week 1 angle.

Week 4:
- Review analytics and decide whether Substack/Medium are worth continuing weekly or should become occasional syndication only.

## Do Not Do

- Do not mass-import or repost the whole site archive into Medium/Substack.
- Do not publish AI-generated product reviews with affiliate links.
- Do not repeat the same link-only message across comments, replies, or Notes.
- Do not chase Medium Partner Program revenue with AI-assisted B2BAIStack content.
- Do not hide affiliate relationships.
- Do not use misleading titles like "best" unless the article actually compares and explains the criteria.

## Official References Checked

- Substack Content Guidelines: https://substack.com/content
- Substack SEO basics: https://support.substack.com/hc/en-us/articles/4407702258836-How-can-I-optimize-my-Substack-publication-for-SEO
- Substack tags: https://support.substack.com/hc/en-us/articles/15325400348948-How-do-I-add-tags-to-Substack-posts
- Medium Rules: https://policy.medium.com/medium-rules-30e5502c4eb4
- Medium AI content policy: https://help.medium.com/hc/en-us/articles/22576852947223-Artificial-Intelligence-AI-content-policy
- Medium Boost eligibility and self-promo guidance: https://help.medium.com/hc/en-us/articles/26716922635159-Which-stories-are-eligible-to-be-Boosted
- Medium canonical links: https://help.medium.com/hc/en-us/articles/360033930293-Set-a-canonical-link
- Medium import tool: https://help.medium.com/hc/en-us/articles/214550207-Importing-a-post-to-Medium
