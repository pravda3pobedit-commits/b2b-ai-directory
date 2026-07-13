export type ToolReview = {
  id: string;
  toolId: string;
  authorName: string;
  authorTitle?: string;
  rating: 1 | 2 | 3 | 4 | 5;
  title: string;
  body: string;
  datePublished: string;
};

// Add only moderated reviews that are visible on the matching tool page.
export const toolReviews: ToolReview[] = [];

export function getPublishedToolReviews(toolId: string) {
  return toolReviews
    .filter((review) => review.toolId === toolId)
    .toSorted((first, second) =>
      second.datePublished.localeCompare(first.datePublished),
    );
}

export function getAggregateToolRating(reviews: readonly ToolReview[]) {
  if (reviews.length === 0) return null;

  const ratingValue =
    reviews.reduce((total, review) => total + review.rating, 0) /
    reviews.length;

  return {
    ratingValue: Number(ratingValue.toFixed(1)),
    reviewCount: reviews.length,
    bestRating: 5,
    worstRating: 1,
  };
}
