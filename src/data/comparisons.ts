export type Comparison = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  category: string;
  toolIds: [string, string];
  summary: string;
  verdict: string;
  useCases: {
    toolId: string;
    heading: string;
    points: string[];
  }[];
  rows: {
    label: string;
    first: string;
    second: string;
  }[];
  cautions: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
};

export const comparisons: Comparison[] = [
  {
    slug: "make-vs-zapier",
    title: "Make vs Zapier: Which Automation Tool Fits Your B2B Workflow?",
    shortTitle: "Make vs Zapier",
    description:
      "Compare Make and Zapier for visual workflow automation, simple triggers, app integrations, webhooks, and AI-powered operations workflows.",
    category: "Workflow automation",
    toolIds: ["make", "zapier"],
    summary:
      "Make and Zapier both connect business apps, but they feel different in daily use. Zapier is often easier for straightforward trigger-action workflows. Make is usually better when a B2B team needs visual control, branching, webhooks, data mapping, and more inspectable multi-step scenarios.",
    verdict:
      "Choose Zapier when speed and simplicity matter most. Choose Make when the workflow is becoming operational infrastructure and the team needs more visual control over logic, routing, and data transformation.",
    useCases: [
      {
        toolId: "make",
        heading: "Choose Make when",
        points: [
          "The workflow has branches, routers, filters, webhooks, or custom API calls.",
          "You want to inspect the whole automation visually before changing it.",
          "Operations, RevOps, support, or marketing workflows need structured data movement.",
        ],
      },
      {
        toolId: "zapier",
        heading: "Choose Zapier when",
        points: [
          "You need a quick app-to-app automation with minimal setup.",
          "The team prefers a simpler linear workflow builder.",
          "The automation is useful, but not yet a complex operating process.",
        ],
      },
    ],
    rows: [
      {
        label: "Best fit",
        first:
          "Visual, multi-step workflows with branching and deeper control.",
        second: "Fast setup for simple app automations and common triggers.",
      },
      {
        label: "Workflow style",
        first:
          "Scenario canvas with visible paths, routers, filters, and modules.",
        second: "Step-by-step automations designed for speed and ease.",
      },
      {
        label: "Technical depth",
        first:
          "Strong when webhooks, HTTP modules, APIs, and data shaping matter.",
        second:
          "Strong when the integration is already supported and the flow is simple.",
      },
      {
        label: "AI workflow angle",
        first:
          "Useful for orchestrating AI steps inside broader operations workflows.",
        second:
          "Useful for adding AI actions to common SaaS workflows quickly.",
      },
    ],
    cautions: [
      "Do not choose only by logo count. Map your actual workflow before picking a tool.",
      "For critical automations, test retries, error handling, permissions, and ownership before relying on either platform.",
    ],
    faqs: [
      {
        question: "Is Make better than Zapier?",
        answer:
          "Make is often better for visual, multi-step workflows with branching, webhooks, API calls, and data transformation. Zapier can be better for simpler automations where setup speed matters more than deep workflow control.",
      },
      {
        question: "Which tool is better for AI workflow automation?",
        answer:
          "Make is usually the stronger fit when AI is one step inside a broader business workflow. Zapier can still work well for lightweight AI actions connected to common apps.",
      },
    ],
  },
  {
    slug: "hunter-vs-apollo",
    title: "Hunter vs Apollo: Email Finder or Sales Engagement Platform?",
    shortTitle: "Hunter vs Apollo",
    description:
      "Compare Hunter.io and Apollo for email finding, email verification, B2B prospecting lists, AI-assisted research, enrichment, sequencing, and sales intelligence workflows.",
    category: "Sales prospecting",
    toolIds: ["hunter-io", "apollo-ai"],
    summary:
      "Hunter and Apollo both help B2B teams find prospects, but they solve different layers of the outbound workflow. Hunter is the cleaner fit when the job is finding professional email addresses, verifying them, and preparing a responsible contact list. Apollo is broader: contact database, enrichment, AI-assisted research, prospecting views, sequencing, and sales engagement in one larger GTM workspace.",
    verdict:
      "Choose Hunter when your main bottleneck is accurate email discovery and verification before outreach. Choose Apollo when you want a larger sales intelligence and engagement platform that also covers database search, enrichment, sequences, and sales team workflows.",
    useCases: [
      {
        toolId: "hunter-io",
        heading: "Choose Hunter when",
        points: [
          "You are writing a cold email, partnership, recruiting, or link-building workflow and need verified professional email addresses.",
          "The team already has a CRM, spreadsheet, outreach tool, or automation setup and only needs a focused email discovery layer.",
          "You want domain search, email finder, email verifier, lead lists, and lightweight campaigns without adopting a full sales engagement platform.",
          "Your priority is cleaner contact research before outreach, not a large all-in-one database and sequencing system.",
        ],
      },
      {
        toolId: "apollo-ai",
        heading: "Choose Apollo when",
        points: [
          "You need contact data, company data, filters, enrichment, sequencing, and sales engagement in one workspace.",
          "Outbound is managed by a sales team that wants a larger GTM operating system rather than a focused email finder.",
          "Campaigns need prospect discovery, list building, AI research, enrichment, workflows, and engagement reporting together.",
          "Your team is willing to manage more platform complexity in exchange for broader sales workflow coverage.",
        ],
      },
    ],
    rows: [
      {
        label: "Best fit",
        first:
          "Focused email finding, domain search, verification, and lightweight outbound preparation.",
        second:
          "Broader sales intelligence, prospect database, enrichment, AI research, sequencing, and engagement workflows.",
      },
      {
        label: "Primary workflow",
        first:
          "Find an email by company domain or person name, verify it, and save it to a lead list.",
        second:
          "Build lists, enrich prospects, and run sales engagement workflows.",
      },
      {
        label: "Email verification",
        first:
          "Core part of the product: verification is central to reducing invalid contacts before outreach.",
        second:
          "Available as part of a broader data and engagement workflow, but not the only product focus.",
      },
      {
        label: "Campaign depth",
        first:
          "Useful for lightweight campaigns and simple follow-up workflows after contact research.",
        second:
          "Better fit for teams that want sequencing, engagement, and sales workflow management inside one platform.",
      },
      {
        label: "Best audience",
        first:
          "Founders, agencies, recruiters, partnership teams, link builders, and lean sales teams that need cleaner email data.",
        second:
          "Sales teams and RevOps teams that want a larger prospecting and outbound system.",
      },
      {
        label: "Setup style",
        first:
          "Lighter tool layer that can sit beside a CRM, spreadsheet, email tool, or automation stack.",
        second:
          "More complete workspace that may replace or absorb several prospecting and engagement steps.",
      },
      {
        label: "AI workflow angle",
        first:
          "Useful as a verified email data layer before human review and outreach.",
        second:
          "Useful when AI-assisted research, prospecting views, enrichment, and sales workflow context should sit together.",
      },
      {
        label: "Risk to review",
        first:
          "Deliverability, consent, unsubscribe handling, and market-specific privacy rules still matter.",
        second:
          "Data quality, campaign settings, sequence governance, and outbound compliance need review.",
      },
    ],
    cautions: [
      "Neither Hunter nor Apollo guarantees replies, deliverability, meetings, or pipeline results. They help with prospecting inputs, not sales outcomes.",
      "Before outreach, review consent, privacy, unsubscribe, anti-spam, and market-specific requirements.",
      "For cold email, verify addresses, protect sender reputation, and keep human review in the message and targeting process.",
    ],
    faqs: [
      {
        question: "Is Hunter or Apollo better for finding email addresses?",
        answer:
          "Hunter is the more focused email finder and verifier. It is built around domain search, email finder, email verification, and lead list workflows. Apollo also includes contact data, but it is designed as a broader sales intelligence and engagement platform.",
      },
      {
        question: "Should a small team start with Hunter or Apollo?",
        answer:
          "A small team that mainly needs verified email addresses may find Hunter simpler. A team that wants contact data, company filters, enrichment, sequencing, and engagement workflows in one place may prefer Apollo.",
      },
      {
        question: "Can Hunter replace Apollo?",
        answer:
          "Hunter can replace Apollo only when the workflow is mostly email discovery, verification, and lightweight campaigns. It is not a full sales engagement platform in the same way Apollo is. If your team needs database search, enrichment, AI-assisted research, sequencing, and sales workflow reporting together, Apollo covers more of that stack.",
      },
      {
        question: "Can Apollo replace Hunter?",
        answer:
          "Apollo can cover more of the sales workflow, but some teams still prefer Hunter as a focused email finder and verification layer. The right choice depends on whether you need a specialized email research tool or a broader outbound workspace.",
      },
      {
        question: "Where do Clay and Instantly fit around Hunter and Apollo?",
        answer:
          "Clay is often evaluated as a data orchestration and enrichment layer for outbound workflows. Instantly is usually evaluated for cold email sending, deliverability, inbox rotation, and campaign operations. Hunter and Apollo sit closer to prospect data and sales intelligence, with Apollo covering more engagement workflow than Hunter.",
      },
      {
        question: "Which tool is better for responsible cold email?",
        answer:
          "Hunter is often easier to understand as the contact research and verification step before outreach. Apollo can support a broader cold email workflow. In both cases, teams still need to handle consent, unsubscribe rules, targeting quality, sender reputation, and local compliance requirements.",
      },
    ],
  },
  {
    slug: "hunter-vs-snovio",
    title: "Hunter vs Snov.io: Email Finder or Outreach Suite?",
    shortTitle: "Hunter vs Snov.io",
    description:
      "Compare Hunter.io and Snov.io for B2B email finding, verification, lead discovery, deliverability, cold email sequences, LinkedIn outreach, and CRM-style pipeline workflows.",
    category: "Sales prospecting",
    toolIds: ["hunter-io", "snov-io"],
    summary:
      "Hunter and Snov.io both help B2B teams find professional email addresses, but they fit different operating styles. Hunter is the cleaner email discovery and verification layer. Snov.io is broader: lead discovery, email verification, deliverability, email and LinkedIn outreach, integrations, and CRM-style pipeline management in one platform.",
    verdict:
      "Choose Hunter when the team wants a focused email finder and verifier that can sit beside an existing CRM, spreadsheet, or outreach tool. Choose Snov.io when the team wants more of the outbound workflow in one place: lead discovery, verification, deliverability, email or LinkedIn sequences, and pipeline management.",
    useCases: [
      {
        toolId: "hunter-io",
        heading: "Choose Hunter when",
        points: [
          "Your main job is finding professional email addresses and verifying them before outreach.",
          "The team already has a CRM, spreadsheet, sales engagement tool, or automation workflow.",
          "You want a focused data layer with domain search, email finder, verifier, lead lists, and lightweight campaigns.",
          "You prefer a simpler tool that does not try to manage the whole outbound operation.",
        ],
      },
      {
        toolId: "snov-io",
        heading: "Choose Snov.io when",
        points: [
          "You want lead discovery, email finding, verification, deliverability, and outreach in one platform.",
          "The workflow includes email sequences, drip campaigns, LinkedIn automation, or multichannel outreach.",
          "You need CRM-style pipeline management and integrations around your prospecting process.",
          "An agency or lean sales team wants fewer separate tools for list building and campaign execution.",
        ],
      },
    ],
    rows: [
      {
        label: "Best fit",
        first:
          "Focused email discovery, domain search, verification, and clean prospect list preparation.",
        second:
          "Broader lead discovery, deliverability, outreach automation, and pipeline workflow in one tool.",
      },
      {
        label: "Primary workflow",
        first:
          "Find an email by domain or person, verify it, save it, then send or sync elsewhere.",
        second:
          "Find leads, enrich contacts, verify addresses, warm up accounts, and run outreach campaigns.",
      },
      {
        label: "Email verification",
        first:
          "Central to the product and tightly connected to email finder and domain search workflows.",
        second:
          "Included as part of a larger prospecting and outreach platform, including bulk verification.",
      },
      {
        label: "Outreach depth",
        first:
          "Lightweight sequences are available, but Hunter is still strongest as a contact discovery layer.",
        second:
          "Drip campaigns, email sequences, LinkedIn automation, bulk sending, and email tracking are core reasons to evaluate it.",
      },
      {
        label: "Deliverability angle",
        first:
          "Verification helps reduce obvious invalid-contact risk before outreach.",
        second:
          "Adds warm-up, deliverability checks, email account setup, and campaign operations around the list.",
      },
      {
        label: "Best audience",
        first:
          "Founders, agencies, recruiters, partnership teams, and lean sales teams that already know where outreach will run.",
        second:
          "Sales teams and agencies that want prospecting, outreach, and simple pipeline management closer together.",
      },
      {
        label: "Stack role",
        first:
          "Email data and verification layer that can feed a CRM, spreadsheet, Make workflow, or sending tool.",
        second:
          "Prospecting and outreach suite that may replace several separate tools for smaller teams.",
      },
      {
        label: "Risk to review",
        first:
          "List quality, source context, verification status, consent, unsubscribe rules, and market-specific privacy requirements.",
        second:
          "All Hunter risks plus campaign settings, deliverability setup, LinkedIn automation limits, and pipeline ownership.",
      },
    ],
    cautions: [
      "Neither Hunter nor Snov.io guarantees replies, deliverability, meetings, or pipeline. They improve prospecting inputs and workflows, not sales outcomes.",
      "Cold outreach still needs consent review, unsubscribe handling, market-specific privacy checks, sender reputation protection, and human message review.",
      "If your team already uses a dedicated CRM and cold email platform, test whether Snov.io simplifies the stack or duplicates tools you already pay for.",
    ],
    faqs: [
      {
        question: "Is Hunter or Snov.io better for finding email addresses?",
        answer:
          "Hunter is usually the cleaner choice when the main job is finding and verifying professional email addresses. Snov.io also includes email finding, but it is broader and more focused on the combined lead discovery and outreach workflow.",
      },
      {
        question: "Is Snov.io better than Hunter for cold email campaigns?",
        answer:
          "Snov.io is usually stronger if you want campaigns, email sequences, deliverability tools, LinkedIn automation, and pipeline workflow in the same product. Hunter can still work for lightweight sequences, but its clearest strength is email discovery and verification.",
      },
      {
        question: "Should a small B2B team start with Hunter or Snov.io?",
        answer:
          "Start with Hunter if you already have a CRM, spreadsheet, sending tool, or simple outreach process and only need better verified emails. Start with Snov.io if you want one tool to handle more of lead discovery, verification, outreach, and basic pipeline management.",
      },
      {
        question: "Can Snov.io replace Hunter?",
        answer:
          "Snov.io can replace Hunter for teams that want a broader all-in-one prospecting and outreach suite. Hunter remains a better fit when the team wants a specialized email finder and verifier that feeds other tools.",
      },
      {
        question: "Can Hunter replace Snov.io?",
        answer:
          "Hunter can replace Snov.io only when the workflow is mostly email discovery, verification, and lightweight outreach. If you need LinkedIn automation, more campaign operations, deliverability tooling, or CRM-style pipeline management, Snov.io covers more of that workflow.",
      },
      {
        question:
          "Where do Smartlead, Saleshandy, and Clay fit around Hunter and Snov.io?",
        answer:
          "Smartlead and Saleshandy are usually evaluated closer to cold email sending, warm-up, deliverability, and campaign operations. Clay is more often evaluated as a data orchestration and enrichment layer. Hunter and Snov.io sit closer to contact discovery, verification, and the first outbound workflow decisions.",
      },
    ],
  },
  {
    slug: "chatbase-vs-intercom",
    title: "Chatbase vs Fin: AI Website Agent or Customer Support Platform?",
    shortTitle: "Chatbase vs Fin",
    description:
      "Compare Chatbase and Fin, formerly Intercom's AI agent, for AI website agents, support automation, knowledge base answers, handoffs, and customer support operations.",
    category: "Customer support",
    toolIds: ["chatbase", "intercom-fin"],
    summary:
      "Chatbase and Fin both touch AI support, but they are not the same type of tool. Chatbase is a practical AI agent and website chatbot layer trained on business content. Fin grew out of Intercom's customer messaging platform and is now a more strategic support-agent asset after Salesforce announced a definitive agreement to acquire Fin in June 2026.",
    verdict:
      "Choose Chatbase when you want a focused AI agent on top of your content and website. Choose Fin when the AI layer needs to live inside a broader customer messaging/support workflow, especially if your team is watching Salesforce, Agentforce, and enterprise service operations.",
    useCases: [
      {
        toolId: "chatbase",
        heading: "Choose Chatbase when",
        points: [
          "You want a customer-facing AI agent trained on docs, pages, files, and FAQs.",
          "The website needs guided answers before a visitor reaches a human.",
          "You want to add an AI support layer without moving the whole helpdesk.",
          "The buying decision is mostly about fast website deployment, source control, and answer quality.",
        ],
      },
      {
        toolId: "intercom-fin",
        heading: "Choose Fin when",
        points: [
          "Support already runs through Intercom/Fin or needs a broader messaging platform.",
          "AI answers need to connect with inboxes, tickets, handoffs, and support operations.",
          "The customer support process is bigger than a standalone chatbot.",
          "The team wants to track the Salesforce acquisition and future Agentforce/service roadmap.",
        ],
      },
    ],
    rows: [
      {
        label: "Best fit",
        first: "Focused AI website agent trained on business content.",
        second:
          "AI support inside a broader customer messaging and support platform.",
      },
      {
        label: "Setup angle",
        first:
          "Useful when you want to deploy an AI agent without rebuilding support ops.",
        second:
          "Useful when the AI layer should be part of a full support workspace.",
      },
      {
        label: "Operational depth",
        first:
          "Good for knowledge answers, lead capture, and simple support routing.",
        second:
          "Stronger for teams needing inboxes, support workflows, and escalation management.",
      },
      {
        label: "Roadmap signal",
        first:
          "Independent website-agent workflow where source quality and deployment speed matter most.",
        second:
          "Salesforce's announced Fin acquisition makes the product important for teams watching enterprise AI service platforms.",
      },
      {
        label: "Review needs",
        first:
          "Source quality, permissions, and answer accuracy need regular review.",
        second:
          "AI resolution rules, handoffs, ticketing, and customer experience need governance.",
      },
    ],
    cautions: [
      "A chatbot is only as useful as the quality and freshness of the knowledge sources behind it.",
      "For support automation, always test escalation paths and edge cases before exposing the agent broadly.",
      "The Salesforce-Fin transaction was announced as an agreement, so buyers should confirm current closing status and roadmap before making platform decisions.",
    ],
    faqs: [
      {
        question: "Is Chatbase the same as Fin or Intercom?",
        answer:
          "No. Chatbase is more focused on building an AI website agent trained on your content. Fin grew out of Intercom's customer messaging and support platform, so it is usually evaluated as part of a broader support workflow.",
      },
      {
        question: "Which is better for a SaaS website?",
        answer:
          "If you only need an AI website agent, Chatbase may be simpler. If your SaaS company needs inboxes, support operations, integrated customer messaging, and AI handoffs, Fin is the broader platform choice.",
      },
      {
        question: "Does Salesforce acquiring Fin change the decision?",
        answer:
          "It changes the roadmap signal. Salesforce's announced agreement to acquire Fin makes Fin more important for teams watching Agentforce and enterprise service operations. It does not remove the need to evaluate current product fit, pricing, data controls, and handoff behavior.",
      },
      {
        question: "When should a smaller team choose Chatbase first?",
        answer:
          "A smaller team should usually evaluate Chatbase first when the goal is to add a focused AI website agent trained on docs, FAQs, pages, and selected business content without moving the entire support workflow.",
      },
    ],
  },
  {
    slug: "fireflies-vs-fathom",
    title: "Fireflies vs Fathom: Which AI Meeting Notetaker Should You Use?",
    shortTitle: "Fireflies vs Fathom",
    description:
      "Compare Fireflies.ai and Fathom for AI meeting notes, transcripts, summaries, action items, CRM sync, and searchable meeting memory.",
    category: "Meeting intelligence",
    toolIds: ["fireflies-ai", "fathom"],
    summary:
      "Fireflies and Fathom both help teams preserve meeting context. Fireflies is usually stronger when the team wants searchable meeting memory, CRM sync, and conversation intelligence across many calls. Fathom is often appealing when the priority is simple meeting recording, highlights, and fast personal or team notes.",
    verdict:
      "Choose Fireflies when meetings need to become a searchable team knowledge base. Choose Fathom when the main need is fast, simple meeting notes and highlights with minimal friction.",
    useCases: [
      {
        toolId: "fireflies-ai",
        heading: "Choose Fireflies when",
        points: [
          "Meeting notes need to sync into CRM, support, recruiting, or team workflows.",
          "The team wants searchable conversation history across many meetings.",
          "Sales, customer success, or operations teams need structured follow-up notes.",
        ],
      },
      {
        toolId: "fathom",
        heading: "Choose Fathom when",
        points: [
          "The priority is a simple AI meeting recorder and note-taking workflow.",
          "Users want quick highlights and summaries without a heavy setup process.",
          "The tool is mainly for individual contributors or lightweight team usage.",
        ],
      },
    ],
    rows: [
      {
        label: "Best fit",
        first:
          "Team meeting memory, searchable transcripts, and workflow sync.",
        second: "Simple meeting recording, highlights, and fast notes.",
      },
      {
        label: "Primary use case",
        first:
          "Sales calls, customer success calls, recruiting, and team knowledge.",
        second:
          "Personal notes, quick recaps, and lightweight meeting follow-up.",
      },
      {
        label: "Workflow depth",
        first:
          "More useful when notes need to connect with systems after the meeting.",
        second: "More useful when speed and simplicity matter most.",
      },
      {
        label: "Review needs",
        first:
          "Review transcript accuracy and CRM-ready fields before relying on automation.",
        second: "Review highlights and summaries before sharing externally.",
      },
    ],
    cautions: [
      "Meeting recording rules vary by region and company policy. Get consent where required.",
      "AI summaries can miss nuance, so review decisions and customer-facing follow-ups.",
    ],
    faqs: [
      {
        question: "Is Fireflies better than Fathom?",
        answer:
          "Fireflies is often better for teams that want searchable meeting memory, CRM sync, and structured follow-up workflows. Fathom can be better for simple meeting notes and highlights.",
      },
      {
        question: "Which tool is better for sales teams?",
        answer:
          "Fireflies is usually the stronger fit for sales teams that need searchable call history and CRM-ready notes. Fathom may still fit smaller teams that want lighter meeting summaries.",
      },
    ],
  },
  {
    slug: "creatify-vs-invideo",
    title: "Creatify vs InVideo AI: URL-to-Ad Creatives or Prompt-to-Video?",
    shortTitle: "Creatify vs InVideo AI",
    description:
      "Compare Creatify AI and InVideo AI for product videos, UGC-style ads, URL-to-video workflows, prompt-to-video generation, avatars, and social campaigns.",
    category: "Video and ads",
    toolIds: ["creatify-ai", "invideo-ai"],
    summary:
      "Creatify and InVideo AI both help create marketing videos, but their strongest workflows differ. Creatify is more focused on turning product URLs into UGC-style ad variations. InVideo AI is broader for generating videos from prompts, campaign briefs, product ideas, and social content plans.",
    verdict:
      "Choose Creatify when the campaign is product URL-to-ad variation. Choose InVideo AI when you need broader prompt-to-video creation for ads, explainers, promos, and social content.",
    useCases: [
      {
        toolId: "creatify-ai",
        heading: "Choose Creatify when",
        points: [
          "You want product URL-to-video workflows and UGC-style ad variations.",
          "The paid acquisition team needs multiple creative angles from product pages.",
          "Avatar, script, voiceover, and product-focused ad concepts are the priority.",
        ],
      },
      {
        toolId: "invideo-ai",
        heading: "Choose InVideo AI when",
        points: [
          "You need videos from prompts, briefs, product ideas, or campaign concepts.",
          "The workflow includes ads, explainers, promos, social posts, and general video drafts.",
          "The team wants a broader video generation workspace rather than a narrow ad-variation workflow.",
        ],
      },
    ],
    rows: [
      {
        label: "Best fit",
        first: "Product URL-to-ad and UGC-style creative variations.",
        second:
          "Prompt-to-video generation across broader marketing use cases.",
      },
      {
        label: "Input style",
        first: "Product URLs, product details, and campaign angles.",
        second: "Text prompts, briefs, ideas, and product concepts.",
      },
      {
        label: "Creative workflow",
        first: "Useful for testing multiple product ad variations.",
        second:
          "Useful for first-draft videos, explainers, ads, and social assets.",
      },
      {
        label: "Review needs",
        first:
          "Review claims, product accuracy, ad policies, and offer details.",
        second:
          "Review script quality, stock/media rights, brand tone, and campaign fit.",
      },
    ],
    cautions: [
      "Neither tool guarantees better ad performance. Test creatives against real campaign data.",
      "Review licensing, ad policy compliance, product claims, and brand fit before publishing.",
    ],
    faqs: [
      {
        question: "Is Creatify better than InVideo AI?",
        answer:
          "Creatify is better when the workflow is product URL-to-UGC ad variation. InVideo AI is broader for prompt-to-video generation, explainers, social videos, and general campaign assets.",
      },
      {
        question: "Which tool should B2B marketers try first?",
        answer:
          "If the team needs product ad variations from URLs, start with Creatify. If the team needs broader video assets from prompts or campaign briefs, start with InVideo AI.",
      },
    ],
  },
];

export function getComparison(slug: string) {
  return comparisons.find((comparison) => comparison.slug === slug);
}
