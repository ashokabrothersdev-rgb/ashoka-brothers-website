import type { Metadata } from "next";
import { Mrs_Saint_Delafield, Quicksand, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { LocomotiveScroll } from "@/components/shared/LocomotiveScroll";

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

const script = Mrs_Saint_Delafield({
  variable: "--font-script",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "OscarX",
    template: "%s - OscarX",
  },
  description:
    "OscarX manufactures precision screws, bolts, nuts, and hooks with clean threads and a firm hold.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${quicksand.variable} ${sourceSerif.variable} ${script.variable} h-full antialiased`}
    >
      <body className="min-h-full overflow-x-hidden bg-white text-[#282828]">
        <LocomotiveScroll>
          <Navbar />
          {children}
          <Footer />
        </LocomotiveScroll>
      </body>
    </html>
  );
}
