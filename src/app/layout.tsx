
import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#15803d",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://warm-liger-7e5ba3.netlify.app"),
  title: {
    default: "Bin Friend — Waste Pickup & House Cleaning Services in Kozhikode",
    template: "%s | Bin Friend Kozhikode",
  },
  description:
    "Professional doorstep waste pickup, scrap recycling, dustbin solutions, and deep house cleaning services across Kozhikode (Calicut), Kerala. Based in Mankavu. Instant WhatsApp booking.",
  keywords: [
    "waste pickup service in kozhikode",
    "waste pickup kozhikode",
    "doorstep waste collection calicut",
    "garbage pickup service kozhikode",
    "scrap pickup kozhikode",
    "house cleaning services in kozhikode",
    "deep cleaning services calicut",
    "waste management kozhikode",
    "dustbins kozhikode",
    "bin friend kozhikode",
  ],
  authors: [{ name: "Bin Friend Team", url: "https://warm-liger-7e5ba3.netlify.app" }],
  creator: "Bin Friend",
  publisher: "Bin Friend",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Bin Friend — Waste Pickup & House Cleaning Services in Kozhikode",
    description:
      "Reliable doorstep waste collection, scrap recycling, and professional deep house cleaning across Kozhikode (Calicut). Based in Mankavu, Kerala.",
    url: "https://warm-liger-7e5ba3.netlify.app/",
    siteName: "Bin Friend",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/service-doorstep-pickup.jpg",
        width: 1200,
        height: 630,
        alt: "Bin Friend Waste Pickup and Cleaning in Kozhikode",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bin Friend — Waste Pickup & House Cleaning Services in Kozhikode",
    description:
      "Reliable doorstep waste collection, scrap recycling, and deep house cleaning in Kozhikode (Calicut).",
    images: ["/images/service-doorstep-pickup.jpg"],
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
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
  "@id": "https://warm-liger-7e5ba3.netlify.app/#organization",
  name: "Bin Friend",
  alternateName: ["Bin Friend Kozhikode", "Bin Friend Waste Management"],
  image: "https://warm-liger-7e5ba3.netlify.app/icon.svg",
  url: "https://warm-liger-7e5ba3.netlify.app/",
  telephone: "+91-7025034758",
  priceRange: "₹2000",
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
  areaServed: [
    {
      "@type": "City",
      name: "Kozhikode",
    },
    {
      "@type": "AdministrativeArea",
      name: "Kerala",
    },
  ],
  sameAs: [
    "https://instagram.com/binfriend",
    "https://facebook.com/binfriend",
    "https://twitter.com/binfriend",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        {/* Preconnect & DNS prefetch for Google Tag Manager */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        {/* Business Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(businessJsonLd),
          }}
        />
      </head>

      <body className="min-h-full flex flex-col bg-background text-foreground overflow-x-hidden selection:bg-brand-light selection:text-brand-dark">
        {/* Google Tag Manager (lazyOnload defers until browser is idle) */}
        <Script
          id="google-tag-manager"
          strategy="lazyOnload"
        >
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
            j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MKWXKLCT');
          `}
        </Script>

        {/* Skip to Main Content Link for Keyboard Accessibility */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MKWXKLCT"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <Navbar />
        <main id="main-content" className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
