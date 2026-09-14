import type { Metadata } from "next";
import { Figtree, Gilda_Display, Jost } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const gilda = Gilda_Display({
  variable: "--font-gilda",
  subsets: ["latin"],
  weight: ["400"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["400", "700"],
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
      className={`${figtree.variable} ${gilda.variable} ${jost.variable} h-full antialiased`}
    >
      <body className="min-h-full overflow-x-hidden bg-white text-[#282828]">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
