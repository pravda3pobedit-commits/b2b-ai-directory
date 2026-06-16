"use client";

import { ArrowRight, CheckCircle2, Mail, ShieldCheck } from "lucide-react";
import { type FormEvent, useId, useState } from "react";
import { cn } from "@/lib/utils";

const FORM_ACTION = process.env.NEXT_PUBLIC_NEWSLETTER_FORM_ACTION;

type NewsletterSignupProps = {
  className?: string;
  compact?: boolean;
  source?: string;
};

export default function NewsletterSignup({
  className,
  compact = false,
  source = "site",
}: NewsletterSignupProps) {
  const emailId = useId();
  const headingId = useId();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "error" | "success">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    if (FORM_ACTION) return;

    event.preventDefault();

    if (!email.includes("@") || !email.includes(".")) {
      setStatus("error");
      return;
    }

    setStatus("success");
  }

  return (
    <section
      aria-labelledby={headingId}
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 md:p-6",
        "shadow-[0_20px_80px_-60px_rgba(99,102,241,0.8)]",
        compact ? "max-w-5xl" : "w-full",
        className,
      )}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-400/50 to-transparent" />

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1fr_380px] lg:items-center">
        <div>
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-indigo-300">
            <Mail className="h-3.5 w-3.5" />
            B2B AI Stack Notes
          </div>

          <h2
            id={headingId}
            className="mb-3 text-2xl font-semibold tracking-tight text-white md:text-3xl"
          >
            Get weekly practical AI tool comparisons.
          </h2>

          <p className="max-w-2xl text-sm leading-relaxed text-slate-400">
            One useful email for B2B teams: new comparisons, tool picks,
            workflow ideas, and cautions to check before buying.
          </p>

          <div className="mt-4 flex flex-wrap gap-3 text-xs text-slate-500">
            {[
              "One email per week",
              "No cold email lists",
              "Unsubscribe anytime",
            ].map((item) => (
              <span key={item} className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-indigo-400" />
                {item}
              </span>
            ))}
          </div>
        </div>

        <div>
          <form
            action={FORM_ACTION || undefined}
            method="post"
            onSubmit={handleSubmit}
            className="flex flex-col gap-3 sm:flex-row lg:flex-col"
          >
            <input type="hidden" name="source" value={source} />
            <label htmlFor={emailId} className="sr-only">
              Email address
            </label>
            <input
              id={emailId}
              name="email"
              type="email"
              required
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
                if (status !== "idle") setStatus("idle");
              }}
              placeholder="you@company.com"
              className="min-h-11 flex-1 rounded-full border border-white/10 bg-black/30 px-4 text-sm text-white outline-none transition-colors placeholder:text-slate-600 focus:border-indigo-400/60 focus:bg-black/40"
            />
            <button
              type="submit"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-white px-5 text-sm font-semibold text-black transition-colors hover:bg-slate-200"
            >
              Subscribe
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>

          <p
            className={cn(
              "mt-3 flex items-start gap-2 text-xs leading-relaxed",
              status === "error" ? "text-amber-300" : "text-slate-500",
              status === "success" ? "text-emerald-300" : "",
            )}
          >
            <ShieldCheck className="mt-0.5 h-3.5 w-3.5 shrink-0" />
            {status === "success"
              ? "Signup UI is ready. Connect a newsletter provider before collecting subscribers."
              : status === "error"
                ? "Enter a valid work email to preview the signup state."
                : "Provider connection comes next; this preview does not store emails yet."}
          </p>
        </div>
      </div>
    </section>
  );
}
