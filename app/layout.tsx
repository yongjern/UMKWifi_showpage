import type { Metadata } from "next";
import { AnnouncementBanner } from "@/components/announcement-banner";
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
  title: "UMKWiFi — Available on Microsoft Edge",
  description: "The official UMKWiFi extension is now available on Microsoft Edge Add-ons.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "UMKWiFi — Available on Microsoft Edge",
    description: "The official UMKWiFi extension is now available on Microsoft Edge Add-ons.",
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
    title: "UMKWiFi — Available on Microsoft Edge",
    description: "The official UMKWiFi extension is now available on Microsoft Edge Add-ons.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <AnnouncementBanner />
        {children}
      </body>
    </html>
  );
}
