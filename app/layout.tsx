import type { Metadata } from "next";
import { Quicksand, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Ashoka Brothers",
    template: "%s - Ashoka Brothers",
  },
  description:
    "Ashoka Brothers manufactures precision screws, bolts, nuts, and hooks with clean threads and a firm hold.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${quicksand.variable} ${sourceSerif.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full overflow-x-hidden bg-white text-[#282828]">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
