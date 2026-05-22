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
    name: "Quso (ex-Vidyo)",
    category: "Marketing",
    icon: Video,
    affiliateLink: "https://vidyo.ai",
    metric: "10x Faster",
    metricLabel: "Content Output",
    descFreelancer: "Scale your content marketing pipeline. Automatically repurpose long-form videos into high-converting short assets.",
    descBusiness: "Scale your agency's content pipeline. Automatically convert webinars, town halls, and long-form corporate videos into branded, social-ready clips in bulk.",
    imagePath: "/quso.png",
    longDescription: "Quso (ex-Vidyo) revolutionizes the way marketing teams repurpose long-form video content. By leveraging advanced AI, it automatically identifies engaging moments in webinars and town halls, instantly converting them into high-converting, branded short clips for social media. This drastically cuts down video editing times and ensures a consistent flow of enterprise content.",
    features: [
      "Automated clip generation",
      "Brand kit customization",
      "AI virality scoring",
      "Multi-platform aspect ratios"
    ],
    ctaText: "Try for Free"
  },
  {
    id: "invideo-ai",
    name: "InVideo AI",
    category: "Marketing",
    icon: Wand2,
    affiliateLink: "https://invideo.io",
    metric: "5M+",
    metricLabel: "Active Creators",
    metricBusiness: "5000+",
    metricLabelBusiness: "Global Brands",
    descFreelancer: "Generate publish-ready video assets from simple text prompts. Scale your marketing services and streamline campaign creation.",
    descBusiness: "Produce high-converting video ads in minutes, not weeks. Eliminate the need for expensive production studios and actors.",
    imagePath: "/invideo.png",
    longDescription: "InVideo AI empowers enterprise marketing teams to produce broadcast-quality video ads in minutes using simple text prompts. It eliminates the need for expensive production studios, enabling rapid iteration of creative assets for global campaigns. With seamless stock media integration and automated voiceovers, scaling video content has never been more efficient.",
    features: [
      "Text-to-video generation",
      "Millions of premium stock assets",
      "Automated scripting and voiceovers",
      "Team collaboration tools"
    ],
    ctaText: "Try for Free"
  },
  {
    id: "elevenlabs",
    name: "ElevenLabs",
    category: "Marketing",
    icon: Mic2,
    affiliateLink: "https://elevenlabs.io",
    metric: "Ultra-HD",
    metricLabel: "Voice Quality",
    descFreelancer: "Add premium, ultra-realistic voiceovers to your corporate projects instantly. Produce high-quality audio without hiring voice actors.",
    descBusiness: "Automate voiceovers for marketing campaigns, tutorials, and ads. Drastically reduce audio production costs and turnaround times.",
    imagePath: "/elevenlabs.png",
    longDescription: "ElevenLabs is the industry leader in ultra-realistic AI voice synthesis, providing businesses with studio-quality audio instantly. It allows enterprises to clone voices, generate highly emotive voiceovers for marketing campaigns, and localize content across dozens of languages without hiring voice actors. This significantly reduces audio production costs and turnaround times.",
    features: [
      "Ultra-realistic voice synthesis",
      "Voice cloning in 29 languages",
      "Emotion and pacing control",
      "Enterprise-grade API access"
    ],
    ctaText: "Try for Free"
  },
  {
    id: "heygen",
    name: "HeyGen",
    category: "Sales",
    icon: Users,
    affiliateLink: "https://www.heygen.com",
    metric: "120+",
    metricLabel: "Languages",
    descFreelancer: "Create professional AI avatar videos for corporate campaigns. Produce premium presentation and marketing videos at lightning speed.",
    descBusiness: "Scale personalized video outreach and corporate training with AI avatars. Stop paying for expensive talent and studio time.",
    imagePath: "/heygen.png",
    longDescription: "HeyGen transforms personalized video outreach by generating professional AI avatars for sales, marketing, and corporate training. It allows teams to create scalable, human-like video presentations simply by typing text, entirely replacing the need for on-camera talent or studio time. Secure, localized, and easily integrated, HeyGen is built for modern enterprise communication.",
    features: [
      "Custom AI avatars",
      "Text-to-speech in 120+ languages",
      "Automated personalized video campaigns",
      "Enterprise security and SSO"
    ],
    ctaText: "Try for Free"
  },
  {
    id: "creatify-ai",
    name: "Creatify AI",
    category: "Marketing",
    icon: ShoppingBag,
    affiliateLink: "https://creatify.ai",
    metric: "ROI",
    metricLabel: "Optimized Ads",
    descFreelancer: "Generate unlimited high-performing ads from product links. Provide highly profitable ad creatives to B2B clients faster.",
    descBusiness: "Generate converting video ads directly from your product URLs. Replace costly UGC agencies with an automated AI pipeline.",
    imagePath: "/creatify.png",
    longDescription: "Creatify AI streamlines the creation of high-performing video ads by generating unlimited variations directly from product URLs. It allows performance marketing teams to rapidly test ad creatives, replacing costly UGC agencies with an automated, AI-driven pipeline. Maximize ROI and dramatically increase your creative testing velocity.",
    features: [
      "URL-to-video ad generation",
      "AI-driven script writing",
      "Automated A/B testing variations",
      "E-commerce platform integrations"
    ],
    ctaText: "Create 1st Ad Free"
  }
];
