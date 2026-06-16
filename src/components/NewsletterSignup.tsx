"use client";

import { CheckCircle2, Mail, ShieldCheck } from "lucide-react";
import { useEffect, useId, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const BEEHIIV_FORM_ID = "10790bdf-f1b8-4bf3-a7bb-8da33b013eea";
const BEEHIIV_ORIGIN = "https://subscribe-forms.beehiiv.com";
const BEEHIIV_FORM_URL = `${BEEHIIV_ORIGIN}/v3/forms/${BEEHIIV_FORM_ID}`;

function buildBeehiivUrl(source: string, referrer?: string) {
  const url = new URL(BEEHIIV_FORM_URL);

  url.searchParams.set("layout", "slim");
  url.searchParams.set("utm_source", "b2baistack");
  url.searchParams.set("utm_medium", "website");
  url.searchParams.set("utm_campaign", source);

  if (referrer) {
    url.searchParams.set("referrer", encodeURIComponent(referrer));
  }

  return url.toString();
}

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
  const headingId = useId();
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const fallbackUrl = useMemo(() => buildBeehiivUrl(source), [source]);
  const [beehiivUrl, setBeehiivUrl] = useState(fallbackUrl);
  const [iframeHeight, setIframeHeight] = useState(88);
  const [status, setStatus] = useState<"loading" | "ready" | "success">(
    "loading",
  );

  useEffect(() => {
    setBeehiivUrl(buildBeehiivUrl(source, window.location.href));
    setIframeHeight(88);
    setStatus("loading");
  }, [source]);

  useEffect(() => {
    function handleBeehiivMessage(event: MessageEvent) {
      if (event.origin !== BEEHIIV_ORIGIN) return;
      if (event.source !== iframeRef.current?.contentWindow) return;
      if (!event.data || typeof event.data !== "object") return;

      const message = event.data as {
        type?: string;
        payload?: { height?: string | number };
        url?: string;
      };

      if (message.type === "beehiiv:child-loaded") {
        iframeRef.current?.contentWindow?.postMessage(
          { type: "beehiiv:parent-loaded" },
          BEEHIIV_ORIGIN,
        );
        return;
      }

      if (
        message.type === "beehiiv:styles" ||
        message.type === "beehiiv:challenge"
      ) {
        const nextHeight = Number.parseInt(
          String(message.payload?.height ?? ""),
          10,
        );

        if (Number.isFinite(nextHeight) && nextHeight > 0) {
          setIframeHeight(Math.min(Math.max(nextHeight, 68), 520));
        }

        setStatus("ready");
        return;
      }

      if (
        message.type === "beehiiv:submitted" ||
        message.type === "beehiiv:success-toast"
      ) {
        setStatus("success");
        return;
      }

      if (message.type === "beehiiv:redirect" && message.url) {
        window.location.href = message.url;
      }
    }

    window.addEventListener("message", handleBeehiivMessage);
    return () => window.removeEventListener("message", handleBeehiivMessage);
  }, []);

  return (
    <section
      aria-labelledby={headingId}
      data-newsletter-source={source}
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
          <input type="hidden" name="source" value={source} readOnly />

          <div className="overflow-hidden rounded-xl border border-white/10 bg-white shadow-[0_18px_50px_-32px_rgba(0,0,0,0.85)]">
            <iframe
              ref={iframeRef}
              src={beehiivUrl}
              title="Subscribe to B2B AI Stack Notes"
              loading="eager"
              scrolling="no"
              onLoad={() => {
                setStatus((currentStatus) =>
                  currentStatus === "loading" ? "ready" : currentStatus,
                );
              }}
              className="block w-full border-0 bg-white"
              style={{ height: iframeHeight }}
            />
          </div>

          <noscript>
            <a
              href={fallbackUrl}
              className="mt-3 inline-flex rounded-full bg-white px-5 py-2 text-sm font-semibold text-black"
            >
              Subscribe
            </a>
          </noscript>

          <p
            className={cn(
              "mt-3 flex items-start gap-2 text-xs leading-relaxed",
              status === "success" ? "text-emerald-300" : "text-slate-500",
            )}
          >
            <ShieldCheck className="mt-0.5 h-3.5 w-3.5 shrink-0" />
            {status === "success"
              ? "You’re subscribed. Check your inbox to confirm."
              : status === "loading"
                ? "Loading the secure beehiiv signup form."
                : "Secure beehiiv signup. Use a work email; confirmation may be required."}
          </p>
        </div>
      </div>
    </section>
  );
}
