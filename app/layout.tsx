import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CognisiveLabs - Building Tomorrow's Solutions Today",
  description: "Empowering consulting companies with innovative tools and solutions for everyday business challenges",
  keywords: "consulting, software, tools, business solutions, CognisiveLabs, Cognisive",
  authors: [{ name: "CognisiveLabs" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cognisivelabs.github.io",
    siteName: "CognisiveLabs",
    title: "CognisiveLabs - Building Tomorrow's Solutions Today",
    description: "Empowering consulting companies with innovative tools and solutions",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CognisiveLabs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CognisiveLabs",
    description: "Building Tomorrow's Solutions Today",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}