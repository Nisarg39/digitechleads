import type { Metadata } from "next";
import { Bebas_Neue, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.digitechleads.com"),
  title: "DigiTechLeads | Premium Digital Marketing, SEO, PPC & Lead Generation",
  description:
    "DigiTechLeads is a premium digital marketing agency delivering SEO, paid ads, social media marketing, web design, content strategy, lead generation and conversion-focused growth systems for ambitious brands worldwide.",
  keywords: [
    "premium digital marketing agency",
    "SEO agency",
    "PPC management",
    "lead generation",
    "social media marketing",
    "web design",
    "content marketing",
    "conversion optimization",
    "performance marketing",
    "marketing automation",
  ],
  authors: [{ name: "DigiTechLeads" }],
  creator: "DigiTechLeads",
  publisher: "DigiTechLeads",
  robots: "index, follow",
  openGraph: {
    title: "DigiTechLeads | Premium Digital Marketing Agency",
    description:
      "SEO, PPC, lead generation, social media marketing, web design and marketing automation for brands that want measurable growth worldwide.",
    type: "website",
    url: "https://www.digitechleads.com/",
    images: ["/logo.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "DigiTechLeads | Premium Digital Marketing Agency",
    description:
      "Performance-driven SEO, paid ads, social media and lead generation for ambitious brands worldwide.",
    images: ["/logo.svg"],
  },
  alternates: {
    canonical: "https://www.digitechleads.com/",
  },
};

export const viewport = {
  themeColor: "#0D1117",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${plusJakarta.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-bg text-cream font-jakarta">{children}</body>
    </html>
  );
}
