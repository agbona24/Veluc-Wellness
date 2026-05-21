import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import JsonLd from "./JsonLd";
import MetaPixel from "./MetaPixel";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://veluc.online";
const OG_IMAGE = `${SITE_URL}/images/main%20image.jpeg`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "The 21-Day Postpartum Belly Flatten Guide | Veluc Wellness Blog",
    template: "%s | Veluc Wellness Blog",
  },
  description:
    "Retired Nutritionist reveals how Nigerian mothers are losing 7kg–15kg after childbirth without giving up rice, swallow or their favourite foods. Proven food-timing method. Only ₦9,800 / $8. 30-day money-back guarantee.",

  keywords: [
    "postpartum weight loss Nigeria",
    "how to lose belly fat after childbirth Nigeria",
    "Nigerian mothers weight loss guide",
    "lose belly fat without dieting Nigeria",
    "postpartum belly flatten",
    "weight loss after baby Nigeria",
    "how to slim down eating Nigerian food",
    "food timing weight loss",
    "belly fat after pregnancy",
    "Nigerian food weight loss",
    "lose weight eating rice Nigeria",
    "busy mum weight loss Nigeria",
    "Veluc Wellness Blog",
  ],

  authors: [{ name: "Chioma", url: SITE_URL }],
  creator: "Veluc Wellness Blog",
  publisher: "Veluc Wellness Blog",

  alternates: {
    canonical: SITE_URL,
  },

  openGraph: {
    type: "website",
    locale: "en_NG",
    url: SITE_URL,
    siteName: "Veluc Wellness Blog",
    title: "Retired Nutritionist Reveals How Nigerian Mothers Are Losing 7kg–15kg After Childbirth Without Giving Up Rice or Swallow",
    description:
      "Simple food-timing method helps busy Nigerian mothers flatten postpartum belly without dieting, gym, or giving up their favourite foods. ₦9,800 / $8 — 30-day guarantee.",
    images: [
      {
        url: OG_IMAGE,
        width: 800,
        height: 500,
        alt: "Veluc Wellness Blog — Postpartum Belly Flatten Guide for Nigerian Mothers",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Nigerian Mothers Are Losing 7kg–15kg After Childbirth Without Giving Up Rice — Here's How",
    description:
      "A retired nutritionist's food-timing method that lets you eat rice, swallow and eba while still losing postpartum belly fat. ₦9,800 / $8.",
    images: [OG_IMAGE],
    creator: "@velucwellness",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  category: "health",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.variable}>
      <body>
        <JsonLd />
        <MetaPixel />
        {children}
      </body>
    </html>
  );
}
