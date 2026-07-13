"use client";

import { Mail, Star } from "lucide-react";
import { useId, useMemo, useState } from "react";

const REVIEW_EMAIL = "pravda3pobedit@gmail.com";
const ratingOptions = [1, 2, 3, 4, 5] as const;

type ReviewSubmissionFormProps = {
  toolId: string;
  toolName: string;
};

export default function ReviewSubmissionForm({
  toolId,
  toolName,
}: ReviewSubmissionFormProps) {
  const nameId = useId();
  const contextId = useId();
  const reviewId = useId();
  const [name, setName] = useState("");
  const [context, setContext] = useState("");
  const [rating, setRating] = useState<(typeof ratingOptions)[number]>(5);
  const [review, setReview] = useState("");

  const mailtoHref = useMemo(() => {
    const subject = `B2BAIStack review for ${toolName}`;
    const body = [
      `Tool: ${toolName}`,
      `Tool ID: ${toolId}`,
      `Rating: ${rating}/5`,
      `Name: ${name}`,
      `Role or company: ${context}`,
      "",
      "Review:",
      review,
      "",
      "I understand this review may be moderated before publication.",
    ].join("\n");

    return `mailto:${REVIEW_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [context, name, rating, review, toolId, toolName]);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.location.href = mailtoHref;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-5 md:p-6"
    >
      <div className="mb-5 flex flex-col gap-2">
        <span className="text-xs font-semibold uppercase tracking-wide text-indigo-300">
          Leave a Review
        </span>
        <h3 className="text-xl font-semibold text-white">
          Share your experience with {toolName}
        </h3>
        <p className="text-sm leading-relaxed text-slate-400">
          Reviews are checked before they appear on B2BAIStack. Published
          ratings are the only ones used in structured data.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label htmlFor={nameId} className="flex flex-col gap-2">
          <span className="text-sm font-medium text-slate-300">Name</span>
          <input
            id={nameId}
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
            className="h-11 rounded-xl border border-white/10 bg-black/30 px-3 text-sm text-white outline-none transition-colors placeholder:text-slate-600 focus:border-indigo-400"
            placeholder="Your name"
          />
        </label>

        <label htmlFor={contextId} className="flex flex-col gap-2">
          <span className="text-sm font-medium text-slate-300">
            Role or company
          </span>
          <input
            id={contextId}
            name="context"
            value={context}
            onChange={(event) => setContext(event.target.value)}
            className="h-11 rounded-xl border border-white/10 bg-black/30 px-3 text-sm text-white outline-none transition-colors placeholder:text-slate-600 focus:border-indigo-400"
            placeholder="Founder, RevOps, agency..."
          />
        </label>
      </div>

      <fieldset className="mt-4">
        <legend className="mb-2 text-sm font-medium text-slate-300">
          Rating
        </legend>
        <div className="grid grid-cols-5 gap-2">
          {ratingOptions.map((option) => {
            const selected = option === rating;

            return (
              <label
                key={option}
                className={`flex h-11 cursor-pointer items-center justify-center gap-1 rounded-xl border text-sm font-semibold transition-colors ${
                  selected
                    ? "border-amber-300/60 bg-amber-300/15 text-amber-200"
                    : "border-white/10 bg-black/30 text-slate-400 hover:border-white/25 hover:text-white"
                }`}
              >
                <input
                  type="radio"
                  name="rating"
                  value={option}
                  checked={selected}
                  onChange={() => setRating(option)}
                  className="sr-only"
                />
                <Star
                  className="h-4 w-4"
                  fill={selected ? "currentColor" : "none"}
                />
                {option}
              </label>
            );
          })}
        </div>
      </fieldset>

      <label htmlFor={reviewId} className="mt-4 flex flex-col gap-2">
        <span className="text-sm font-medium text-slate-300">Review</span>
        <textarea
          id={reviewId}
          name="review"
          value={review}
          onChange={(event) => setReview(event.target.value)}
          required
          minLength={40}
          rows={5}
          className="resize-y rounded-xl border border-white/10 bg-black/30 px-3 py-3 text-sm leading-relaxed text-white outline-none transition-colors placeholder:text-slate-600 focus:border-indigo-400"
          placeholder="What did this tool help with? What should other B2B buyers check before using it?"
        />
      </label>

      <button
        type="submit"
        className="mt-5 inline-flex h-11 items-center justify-center gap-2 rounded-full bg-indigo-600 px-5 text-sm font-semibold text-white transition-colors hover:bg-indigo-500"
      >
        <Mail className="h-4 w-4" />
        Send for Moderation
      </button>
    </form>
  );
}
