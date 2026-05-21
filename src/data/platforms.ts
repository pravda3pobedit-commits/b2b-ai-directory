import {
  Video,
  Wand2,
  Mic2,
  Users,
  ShoppingBag,
} from "lucide-react";

export const platforms = [
  {
    id: "vidyo-ai",
    name: "Vidyo.ai",
    category: "Video Repurposing",
    icon: Video,
    affiliateLink: "https://vidyo.ai",
    metric: "10x Faster",
    metricLabel: "Content Output",
    descFreelancer: "Repurpose long podcasts and videos into viral short clips for TikTok, Reels, and Shorts instantly using AI. Features a generous Freemium plan to drive conversions.",
    descBusiness: "Scale your agency's content pipeline. Automatically convert webinars, town halls, and long-form corporate videos into branded, social-ready clips in bulk."
  },
  {
    id: "invideo-ai",
    name: "InVideo AI",
    category: "AI Video Generation",
    icon: Wand2,
    affiliateLink: "https://invideo.io",
    metric: "5M+",
    metricLabel: "Active Creators",
    metricBusiness: "5000+",
    metricLabelBusiness: "Global Brands",
    descFreelancer: "Generate publish-ready videos from simple text prompts. Scale your content creation services and take on more clients.",
    descBusiness: "Produce high-converting video ads in minutes, not weeks. Eliminate the need for expensive production studios and actors."
  },
  {
    id: "elevenlabs",
    name: "ElevenLabs",
    category: "AI Voice Synthesis",
    icon: Mic2,
    affiliateLink: "https://elevenlabs.io",
    metric: "Ultra-HD",
    metricLabel: "Voice Quality",
    descFreelancer: "Add premium, ultra-realistic voiceovers to your projects instantly. Charge more for high-quality audio without hiring voice actors.",
    descBusiness: "Automate voiceovers for marketing campaigns, tutorials, and ads. Drastically reduce audio production costs and turnaround times."
  },
  {
    id: "heygen",
    name: "HeyGen",
    category: "AI Avatar Generation",
    icon: Users,
    affiliateLink: "https://www.heygen.com",
    metric: "120+",
    metricLabel: "Languages",
    descFreelancer: "Create professional AI avatar videos for client campaigns. Offer premium presentation and marketing videos at lightning speed.",
    descBusiness: "Scale personalized video outreach and corporate training with AI avatars. Stop paying for expensive talent and studio time."
  },
  {
    id: "creatify-ai",
    name: "Creatify AI",
    category: "AI Video Ads",
    icon: ShoppingBag,
    affiliateLink: "https://creatify.ai",
    metric: "ROI",
    metricLabel: "Optimized Ads",
    descFreelancer: "Generate unlimited high-performing UGC ads from product links. Provide highly profitable ad creatives to e-commerce clients faster.",
    descBusiness: "Generate converting video ads directly from your product URLs. Replace costly UGC agencies with an automated AI pipeline."
  }
];
