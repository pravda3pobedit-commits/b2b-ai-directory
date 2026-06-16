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
    title: "Hunter vs Apollo: Email Finding or Full Sales Intelligence?",
    shortTitle: "Hunter vs Apollo",
    description:
      "Compare Hunter.io and Apollo for email finding, verification, prospecting lists, outbound workflows, and B2B sales intelligence.",
    category: "Sales prospecting",
    toolIds: ["hunter-io", "apollo-ai"],
    summary:
      "Hunter and Apollo both help sales teams find prospects, but they solve different levels of the workflow. Hunter is focused on finding and verifying professional email addresses. Apollo is broader: database, prospecting, enrichment, sequencing, and sales engagement.",
    verdict:
      "Choose Hunter when you need a focused email discovery and verification layer. Choose Apollo when you want a broader prospecting and outbound platform with more sales workflow coverage.",
    useCases: [
      {
        toolId: "hunter-io",
        heading: "Choose Hunter when",
        points: [
          "You mainly need domain search, email finder, and email verification.",
          "Your team already has a CRM or outbound stack and needs cleaner contacts.",
          "You want a lightweight prospecting layer without adopting a full sales platform.",
        ],
      },
      {
        toolId: "apollo-ai",
        heading: "Choose Apollo when",
        points: [
          "You need contact data, company data, lists, sequences, and sales workflows together.",
          "Outbound campaigns need more platform coverage than email finding alone.",
          "Your sales team wants prospecting, enrichment, and engagement in one workspace.",
        ],
      },
    ],
    rows: [
      {
        label: "Best fit",
        first: "Focused email discovery and verification.",
        second: "Broader sales intelligence and outbound workflow platform.",
      },
      {
        label: "Primary workflow",
        first: "Find and verify professional email addresses.",
        second:
          "Build lists, enrich prospects, and run sales engagement workflows.",
      },
      {
        label: "Team complexity",
        first:
          "Works well for founders, agencies, recruiters, and lean sales teams.",
        second: "Better fit for sales teams that want a larger GTM system.",
      },
      {
        label: "Risk to review",
        first: "Deliverability, privacy, and consent rules still matter.",
        second:
          "Data quality, campaign settings, and outbound compliance need review.",
      },
    ],
    cautions: [
      "Neither tool guarantees replies, deliverability, or pipeline results.",
      "Before outreach, review consent, privacy, anti-spam rules, and market-specific requirements.",
    ],
    faqs: [
      {
        question: "Is Hunter or Apollo better for finding emails?",
        answer:
          "Hunter is the more focused email finder and verifier. Apollo also includes contact data, but it is designed as a broader sales intelligence and engagement platform.",
      },
      {
        question: "Should a small team start with Hunter or Apollo?",
        answer:
          "A small team that only needs email discovery may find Hunter simpler. A team that wants lists, enrichment, sequencing, and sales workflows may prefer Apollo.",
      },
    ],
  },
  {
    slug: "chatbase-vs-intercom",
    title:
      "Chatbase vs Intercom: AI Website Agent or Customer Support Platform?",
    shortTitle: "Chatbase vs Intercom",
    description:
      "Compare Chatbase and Intercom Fin for AI website agents, support automation, knowledge base answers, handoffs, and customer support operations.",
    category: "Customer support",
    toolIds: ["chatbase", "intercom-fin"],
    summary:
      "Chatbase and Intercom both touch AI support, but they are not the same type of tool. Chatbase is a practical AI agent and website chatbot layer trained on business content. Intercom is a broader customer support platform, with Fin as part of a larger helpdesk and customer messaging system.",
    verdict:
      "Choose Chatbase when you want a focused AI agent on top of your content and website. Choose Intercom when the AI layer needs to live inside a broader support platform with inbox, team workflows, and customer operations.",
    useCases: [
      {
        toolId: "chatbase",
        heading: "Choose Chatbase when",
        points: [
          "You want a customer-facing AI agent trained on docs, pages, files, and FAQs.",
          "The website needs guided answers before a visitor reaches a human.",
          "You want to add an AI support layer without moving the whole helpdesk.",
        ],
      },
      {
        toolId: "intercom-fin",
        heading: "Choose Intercom when",
        points: [
          "Support already runs through Intercom or needs a broader messaging platform.",
          "AI answers need to connect with inboxes, tickets, handoffs, and support operations.",
          "The customer support process is bigger than a standalone chatbot.",
        ],
      },
    ],
    rows: [
      {
        label: "Best fit",
        first: "Focused AI website agent trained on business content.",
        second: "AI support inside a broader customer messaging platform.",
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
    ],
    faqs: [
      {
        question: "Is Chatbase the same as Intercom?",
        answer:
          "No. Chatbase is more focused on building an AI website agent trained on your content. Intercom is a broader customer messaging and support platform, with Fin as its AI support agent.",
      },
      {
        question: "Which is better for a SaaS website?",
        answer:
          "If you only need an AI website agent, Chatbase may be simpler. If your SaaS company needs inboxes, support operations, and integrated customer messaging, Intercom is the broader platform.",
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
