import type { Metadata } from "next";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/space-grotesk/600.css";
import "@fontsource/space-grotesk/700.css";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "@fontsource/ibm-plex-mono/600.css";
import "@fontsource/ibm-plex-mono/700.css";
import "@fontsource/eb-garamond/400-italic.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: process.env.VERCEL_URL
    ? new URL(`https://${process.env.VERCEL_URL}`)
    : new URL("http://localhost:3000"),
  title: "UMK WiFi — Launching Soon",
  description: "A faster, clearer way to get connected across UMK is on the way.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "UMK WiFi — Launching Soon",
    description: "A faster, clearer way to get connected across UMK is on the way.",
    siteName: "UMKWiFi",
    images: [
      {
        url: "/logo.png",
        width: 128,
        height: 128,
        alt: "UMKWiFi logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "UMK WiFi — Launching Soon",
    description: "A faster, clearer way to get connected across UMK is on the way.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
