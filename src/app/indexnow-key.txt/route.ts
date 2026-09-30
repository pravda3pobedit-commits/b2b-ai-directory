import indexNowConfig from "../../../config/indexnow.json";

export const dynamic = "force-static";

export function GET() {
  return new Response(`${indexNowConfig.key}\n`, {
    headers: {
      "cache-control": "public, max-age=3600",
      "content-type": "text/plain; charset=utf-8",
    },
  });
}
