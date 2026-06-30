import { generateLlmsText } from "@/lib/llmsContent";

export const dynamic = "force-static";

export function GET() {
  return new Response(generateLlmsText(), {
    headers: {
      "Cache-Control": "public, max-age=3600",
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
