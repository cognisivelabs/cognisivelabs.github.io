import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cognisive | Enterprise Technology Consulting & Digital Products",
  description: "Cognisive delivers scalable microservices, Kotlin development, and enterprise-grade products. Engineering excellence powered by CognisiveLabs innovation.",
  keywords: "technology consulting, microservices, Kotlin, enterprise software, React, fintech solutions, Cognisive, CognisiveLabs",
  authors: [{ name: "Cognisive" }],
  metadataBase: new URL("https://cognisive.co.uk"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cognisive.co.uk",
    siteName: "Cognisive",
    title: "Cognisive | Enterprise Technology Solutions",
    description: "Expert consulting for scalable systems and modern product development.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cognisive - Building Tomorrow's Solutions Today",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cognisive | Expert Tech Consulting",
    description: "Building scalable enterprise solutions with Kotlin, React, and Microservices.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Cognisive",
  "image": "https://cognisive.co.uk/cognisiveLogo.png",
  "url": "https://cognisive.co.uk",
  "telephone": "",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "London",
    "addressCountry": "UK"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 51.5074,
    "longitude": -0.1278
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "opens": "09:00",
    "closes": "18:00"
  },
  "sameAs": [
    "https://github.com/cognisivelabs"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}