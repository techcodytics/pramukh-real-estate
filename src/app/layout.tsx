import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Pramukh Group | A Class Of Its Own | Premium Real Estate Builder",
  description: "Official website of Pramukh Group, a leading real estate builder in Surat, Vapi, and Silvassa. 25+ years of delivering luxury residential and commercial projects.",
  keywords: ["Pramukh Group", "Real Estate Surat", "Builder Vapi", "Luxury Flats Surat", "3 BHK Flats Surat", "RERA Registered Projects India"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(inter.variable, manrope.variable, "h-full antialiased font-sans")}
    >
      <body className="flex min-h-full flex-col bg-white text-navy selection:bg-gold/30">
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}
