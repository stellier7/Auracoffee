import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aura Coffee — Small-Batch Roasted, Brewed with Intention",
  description:
    "Aura Coffee is a small-batch roastery and café serving thoughtfully sourced, expertly roasted coffee. Visit us in-store or order beans online.",
  keywords: [
    "Aura Coffee",
    "coffee roastery",
    "specialty coffee",
    "café",
    "coffee beans",
  ],
  openGraph: {
    title: "Aura Coffee — Small-Batch Roasted, Brewed with Intention",
    description:
      "Thoughtfully sourced, expertly roasted coffee. Visit our café or order beans online.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[--color-cream] text-[--color-espresso]">
        {children}
      </body>
    </html>
  );
}
