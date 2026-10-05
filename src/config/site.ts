export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Komorebi Prison Wiki",
  shortName: "Komorebi Prison",
  logoText: "KP",
  tagline: "Gameplay Guides, PvP Tips & Prison Mechanics",
  description: "A community resource for Komorebi Prison covering gameplay, characters, prison mechanics, story details, guides, and the latest game information.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://komorebiprison.top",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://komorebiprison.top").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://www.roblox.com/discover/?Keyword=komorebi%20prison",
  heroVideoId: "BsQztDUlg1E", // Komorebi Prison gameplay showcase
  social: {
    discord: "https://discord.gg/roblox",
    youtube: "https://www.youtube.com/@roblox",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
