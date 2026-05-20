import {
  Video,
  Wand2,
  Mic2,
  Users,
  ShoppingBag,
} from "lucide-react";

export const platforms = [
  {
    id: "opus-clip",
    name: "Opus Clip",
    category: "Video Repurposing",
    icon: Video,
    affiliateLink: "",
    metric: "10x Faster",
    metricLabel: "Content Output",
    descFreelancer: "Turn long videos into viral shorts in 1 click. Deliver 10x more content to clients without working extra hours.",
    descBusiness: "Scale corporate marketing and internal communications. Repurpose long-form webinars and company events into bite-sized social media assets instantly."
  },
  {
    id: "invideo-ai",
    name: "InVideo AI",
    category: "AI Video Generation",
    icon: Wand2,
    affiliateLink: "",
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
    affiliateLink: "",
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
    affiliateLink: "",
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
    affiliateLink: "",
    metric: "ROI",
    metricLabel: "Optimized Ads",
    descFreelancer: "Generate unlimited high-performing UGC ads from product links. Provide highly profitable ad creatives to e-commerce clients faster.",
    descBusiness: "Generate converting video ads directly from your product URLs. Replace costly UGC agencies with an automated AI pipeline."
  }
];
