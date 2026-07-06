type CategoryTool = {
  id: string;
  name: string;
  category: string;
  shortDescription?: string;
  descBusiness?: string;
  descFreelancer?: string;
  longDescription?: string;
};

type CategoryFaq = {
  question: string;
  answer: string;
};

export function jsonLdMarkup(data: unknown) {
  return {
    __html: JSON.stringify(data).replace(/</g, "\\u003c"),
  };
}

export function buildCategoryItemListJsonLd({
  name,
  description,
  pageUrl,
  baseUrl,
  tools,
}: {
  name: string;
  description: string;
  pageUrl: string;
  baseUrl: string;
  tools: CategoryTool[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    description,
    url: pageUrl,
    itemListElement: tools.map((tool, index) => {
      const toolUrl = `${baseUrl}/tool/${tool.id}`;

      return {
        "@type": "ListItem",
        position: index + 1,
        url: toolUrl,
        item: {
          "@type": "SoftwareApplication",
          name: tool.name,
          applicationCategory: tool.category,
          url: toolUrl,
          description:
            tool.descBusiness ??
            tool.descFreelancer ??
            tool.shortDescription ??
            tool.longDescription,
        },
      };
    }),
  };
}

export function buildFaqPageJsonLd(faqs: CategoryFaq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
