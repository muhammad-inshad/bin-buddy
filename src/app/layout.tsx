import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#16a34a",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://warm-liger-7e5ba3.netlify.app"),
  title: "Bin Buddy — Bins & Waste Pickup Services",
  description:
    "Bin Buddy sells quality dustbins and offers home waste pickup, recycling, cleaning and junk removal services.",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  verification: {
    google: "ZOkPbN-dqYyIhsm0BlUkelkmNkytcsYYJyH98w_EXNM",
  },
};

const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "Bin Buddy",
  url: "https://warm-liger-7e5ba3.netlify.app/",
  image: "https://warm-liger-7e5ba3.netlify.app/icon.svg",
  telephone: "+917025034758",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Mankavu",
    addressLocality: "Kozhikode",
    postalCode: "673007",
    addressCountry: "IN",
    addressRegion: "Kerala",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 11.2404392,
    longitude: 75.8156257,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground overflow-x-hidden selection:bg-brand-light selection:text-brand-dark">
        <Navbar />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
