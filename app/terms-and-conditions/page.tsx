import type { Metadata } from "next";
import { TermsArticle } from "@/components/terms/TermsArticle";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms for using the Ashoka Brothers website and for enquiries, quotations and orders for OSCAR X fasteners.",
};

export default function TermsAndConditionsPage() {
  return <TermsArticle />;
}
