"use client";

import { sendGAEvent } from "@next/third-parties/google";
import { ExternalLink, ArrowRight } from "lucide-react";

interface TrackedAffiliateLinkProps {
  href: string;
  toolId: string;
  toolName: string;
  ctaText?: string;
  className?: string;
  icon?: "external" | "arrow";
}

export default function TrackedAffiliateLink({
  href,
  toolId,
  toolName,
  ctaText,
  className,
  icon,
}: TrackedAffiliateLinkProps) {
  const label = ctaText || "Try for Free";

  function handleClick() {
    sendGAEvent("event", "affiliate_click", {
      tool_id: toolId,
      tool_name: toolName,
      link_url: href,
      link_text: label,
      page_path: window.location.pathname,
    });
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="sponsored nofollow noopener noreferrer"
      className={className}
      onClick={handleClick}
    >
      {label}{" "}
      {icon === "arrow" ? (
        <ArrowRight className="w-3 h-3" />
      ) : (
        <ExternalLink className="w-4 h-4" />
      )}
    </a>
  );
}
