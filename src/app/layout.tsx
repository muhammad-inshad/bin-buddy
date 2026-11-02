import type { Metadata, Viewport } from "next";
import Script from "next/script";
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
  title: "Bin Friend — Waste Pickup & Cleaning Services in Kozhikode",
  description:
    "Top-rated doorstep waste pickup, scrap recycling, quality dustbins and professional house cleaning services in Kozhikode (Calicut), Kerala. Book on WhatsApp: +91 70250 34758.",
  keywords: [
    "waste pickup service in kozhikode",
    "waste pickup kozhikode",
    "doorstep waste collection calicut",
    "garbage pickup service kozhikode",
    "scrap pickup kozhikode",
    "house cleaning services in kozhikode",
    "waste management kozhikode",
    "dustbins kozhikode",
    "bin friend kozhikode",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Bin Friend — Waste Pickup & Cleaning Services in Kozhikode",
    description:
      "Reliable doorstep waste collection, recycling, and deep house cleaning across Kozhikode (Calicut). Based in Mankavu. Same-day booking via WhatsApp.",
    url: "https://warm-liger-7e5ba3.netlify.app/",
    siteName: "Bin Friend",
    locale: "en_IN",
    type: "website",
  },
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
  name: "Bin Friend",
  image: "https://warm-liger-7e5ba3.netlify.app/icon.svg",
  url: "https://warm-liger-7e5ba3.netlify.app/",
  telephone: "7025034758",
   "priceRange": "2000",
  openingHours: "Mo-Su 09:00-21:00",
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
        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-FBTWW31Z33"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-FBTWW31Z33');
          `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground overflow-x-hidden selection:bg-brand-light selection:text-brand-dark">
        <Navbar />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
