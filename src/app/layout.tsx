import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

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
  description: "Official website of Pramukh Group, a leading real estate builder in Surat, Vapi, and Silvassa. Experience the harmony of simplicity, purity, and excellence.",
  keywords: ["Pramukh Group", "Architecture of Peace", "Real Estate Surat", "Builder Vapi", "Luxury Flats Surat", "Serene Living"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(sans.variable, serif.variable, "h-full antialiased font-sans")}
    >
      <body className="flex min-h-full flex-col bg-stone-50 text-stone-900 selection:bg-orange-100">
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}
