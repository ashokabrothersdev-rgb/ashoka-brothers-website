/** A paragraph, or a bulleted list when it's an array. */
export type TermsBlock = string | string[];

export type TermsSection = {
  id: string;
  title: string;
  body: TermsBlock[];
};

export const termsPage = {
  eyebrow: "Legal",
  title: "Terms & Conditions",
  updated: "23 October 2026",
  intro:
    "Please read these terms carefully. They explain how you may use this website and the conditions that apply when you enquire with us, receive a quotation or place an order for our fasteners.",
  sections: [
    {
      id: "introduction",
      title: "Introduction",
      body: [
        "This website is operated by Ashoka Brothers (“Ashoka Brothers”, “we”, “us” or “our”), makers and suppliers of OSCAR X screws, bolts, nuts, hooks and related fasteners, with our office at 300/6, Loha Mandi, Near Tunda Talab, Amritsar, Punjab 143001, India.",
        "By using this website, sending us an enquiry or placing an order, you agree to these terms. If you do not agree, please do not use the website. Where a written quotation, order confirmation or separate agreement with you says something different, that document applies to that transaction.",
      ],
    },
    {
      id: "using-this-website",
      title: "Using this website",
      body: [
        "You may use this website to learn about our company and products and to contact us. When you use it, you agree not to:",
        [
          "use the website in any way that breaks the law or harms others;",
          "try to gain unauthorised access to the website, its servers or any connected systems;",
          "introduce viruses or other harmful code, or overload or disrupt the website;",
          "copy, scrape or reuse its content for commercial purposes without our written permission.",
        ],
        "We may update, suspend or withdraw any part of the website at any time without notice.",
      ],
    },
    {
      id: "product-information",
      title: "Product information and size charts",
      body: [
        "Product descriptions, photographs and size charts on this website are provided for general guidance. Photographs are illustrative, and the finish, colour and packaging of the products you receive may differ slightly.",
        "Sizes are listed as diameter × length in millimetres. Specifications, available sizes and stock can change without notice. The specification that applies to your order is the one confirmed in our written quotation or invoice. If you need a size that is not listed, please contact us.",
      ],
    },
    {
      id: "enquiries-and-orders",
      title: "Enquiries, quotations and orders",
      body: [
        "This website does not sell products online. Submitting the contact form or calling us is a request for information or a quotation, not an order.",
        "Quotations are valid for the period stated on them. An order is binding only once we have confirmed it in writing, for example by email, order confirmation or invoice. We may decline any order, including where products are unavailable or information provided is incorrect.",
      ],
    },
    {
      id: "prices-and-payment",
      title: "Prices and payment",
      body: [
        "Prices are as stated in our quotation or invoice. Unless stated otherwise, prices exclude GST and other applicable taxes, which are charged at the rates in force at the time of invoicing, and exclude freight and insurance.",
        "Payment is due on the terms agreed in writing. We may hold dispatch of an order until any amount due from you has been paid.",
      ],
    },
    {
      id: "delivery",
      title: "Delivery",
      body: [
        "Delivery dates we give are estimates. We will do our best to meet them, but we are not responsible for delays caused by events beyond our reasonable control, such as transport disruption, strikes, shortages of raw material, natural events or government action.",
        "Delivery arrangements, and the point at which risk in the goods passes to you, are as agreed in the order confirmation. Ownership of the goods passes to you once we have received payment in full.",
      ],
    },
    {
      id: "inspection-and-claims",
      title: "Inspection, claims and returns",
      body: [
        "Please inspect goods as soon as you receive them. Any shortage, damage in transit or defect visible on inspection must be reported to us in writing within 7 days of delivery, with your invoice number and photographs where possible.",
        "Goods may be returned only with our prior written approval. We do not accept returns of goods supplied correctly to your order, or of goods made, cut or finished to your specification, unless they are defective.",
      ],
    },
    {
      id: "selection-and-use",
      title: "Correct selection and use",
      body: [
        "Fasteners must be chosen to suit the materials being joined, the expected load and the conditions of use. You are responsible for selecting the right product, size and finish for your application and for installing it correctly.",
        "For structural or safety-critical applications, use fasteners that meet the relevant standards and seek qualified engineering advice. Any guidance we give, including in our blogs, is general information and not a substitute for that advice.",
      ],
    },
    {
      id: "warranty-and-liability",
      title: "Warranty and limitation of liability",
      body: [
        "We warrant that our products will conform to the specification agreed in writing at the time of delivery. If a product does not, and you tell us within the period in section 7, we will at our option replace it or refund the price paid for it. This is your sole remedy for non-conforming goods.",
        "We are not liable for failures caused by incorrect selection, installation or use, overloading, unsuitable environments, normal wear, or alterations made after delivery.",
        "To the extent permitted by law, we are not liable for any indirect or consequential loss, including loss of profit, production or business, and our total liability for any order will not exceed the price paid for the goods concerned. Nothing in these terms limits any liability that cannot be limited under Indian law.",
      ],
    },
    {
      id: "intellectual-property",
      title: "Intellectual property",
      body: [
        "The OSCAR X name and logo, and all content on this website, including text, photographs, videos and graphics, belong to Ashoka Brothers or its licensors. You may not copy, reproduce or use them without our written permission, except to view and print pages for your own reference.",
      ],
    },
    {
      id: "privacy",
      title: "Privacy and your information",
      body: [
        "When you use our contact form, we collect your name, email address and phone number. We use these details only to respond to your enquiry, prepare quotations and keep a record of enquiries.",
        "Your details are stored and processed by service providers that help us run this website and manage enquiries. We do not sell your personal information. To ask us to correct or delete your details, email us at the address below.",
      ],
    },
    {
      id: "third-party-links",
      title: "Third-party links and services",
      body: [
        "This website includes a Google Maps view and links to other websites, such as social media. These are provided for convenience. We are not responsible for their content or practices, which are governed by their own terms and privacy policies.",
      ],
    },
    {
      id: "governing-law",
      title: "Governing law and jurisdiction",
      body: [
        "These terms are governed by the laws of India. Any dispute arising from them, from your use of this website or from any order with us is subject to the exclusive jurisdiction of the courts at Amritsar, Punjab.",
      ],
    },
    {
      id: "changes",
      title: "Changes to these terms",
      body: [
        "We may update these terms from time to time. The date at the top of this page shows when they were last changed. The version in force when you place an order applies to that order.",
      ],
    },
  ] satisfies TermsSection[],
  contactTitle: "Questions about these terms?",
  contactText:
    "Get in touch with us and we will be happy to help before you place an order.",
};
