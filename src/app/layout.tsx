import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const serif = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Pramukh Group | Architecture of Serenity | Premium Real Estate Builder",
  description:
    "Discover the Architecture of Serenity with Pramukh Group. A vision of luxury rooted in simplicity, purity, and timeless excellence. Explore our masterworks across Ahmedabad and Gandhinagar.",
  keywords: [
    "Pramukh Group",
    "Architecture of Peace",
    "Real Estate Surat",
    "Builder Ahmedabad",
    "Luxury Flats Gandhinagar",
    "Serene Living",
    "Premium Real Estate",
  ],
  openGraph: {
    title: "Pramukh Group | Architecture of Serenity",
    description: "Experience modern luxury rooted in timeless purity. Discover our premium sanctuaries in Ahmedabad and Gandhinagar.",
    type: "website",
    siteName: "Pramukh Group",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pramukh Group | Architecture of Serenity",
    description: "Discover premium living spaces that embody peace and excellence.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        sans.variable,
        serif.variable,
        "h-full antialiased font-sans",
      )}
    >
      <body className="flex min-h-full flex-col bg-white text-black selection:bg-black selection:text-white">
        <Navbar />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
