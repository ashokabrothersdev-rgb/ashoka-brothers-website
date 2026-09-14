import type { Metadata } from "next";
import { Alexandria, Cormorant_Garamond, Figtree, Gilda_Display, Jost } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const alexandria = Alexandria({
  variable: "--font-alexandria",
  subsets: ["latin"],
  weight: ["700"],
});

const gilda = Gilda_Display({
  variable: "--font-gilda",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Ashoka Brothers",
  description:
    "Ashoka Brothers manufactures precision screws, bolts, nuts, and hooks with clean threads and a firm hold.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${figtree.variable} ${cormorant.variable} ${jost.variable} ${alexandria.variable} ${gilda.variable} h-full antialiased`}
    >
      <body className="min-h-full overflow-x-hidden bg-white text-[#282828]">{children}</body>
    </html>
  );
}
