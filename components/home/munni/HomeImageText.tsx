"use client";

import { KnowMore } from "./KnowMore";
import { munniImage } from "./data";

function revealImage(image: HTMLImageElement | null) {
  if (image?.complete && image.naturalWidth > 0) image.classList.add("loaded");
}

const blocks = [
  {
    imageClass: "itbImage--1",
    image: "itb-products.jpg",
    alt: "Precision screw from the Ashoka Brothers range",
    width: 1041,
    height: 1333,
    label: "Our Products",
    heading: "The right fastener",
    signature: "for every project",
    body: "From precision screws and dependable bolts to nuts, hooks and fastening essentials, Ashoka Brothers offers a reliable range built for secure performance, consistent quality and lasting results across every project. Whatever the application, you will find hardware that fits, holds and keeps doing its job.",
    href: "/products",
  },
  {
    imageClass: "itbImage--2",
    image: "itb-quality.jpg",
    alt: "Craftsman grinding steel in the workshop",
    width: 1333,
    height: 2000,
    label: "Quality Focused",
    heading: "Quality first",
    signature: "in every piece",
    body: "Quality is at the heart of every product we offer. From material and finish to performance and consistency, we focus on hardware that delivers a secure hold and dependable results. Every batch is checked before it leaves us, so what you fit today performs the same tomorrow.",
    href: "/about-us",
  },
];

export function HomeImageText() {
  return (
    <section id="homeImageText">
      <div className="itbContainer">
        {blocks.map((block) => (
          <div className="imageTextBlock" key={block.label}>
            <div className={`itbImage ${block.imageClass}`}>
              <img
                src={munniImage(block.image)}
                alt={block.alt}
                width={block.width}
                height={block.height}
                data-scroll=""
                data-scroll-speed="-1"
                data-scroll-target={`.${block.imageClass}`}
                ref={revealImage}
                onLoad={(event) => event.currentTarget.classList.add("loaded")}
              />
              <img
                className="itbLogo"
                src={munniImage("oscar-footer-logo.png")}
                alt="Oscar Screws"
                width={578}
                height={548}
              />
            </div>
            <div className="itbText" data-scroll="">
              <span className="itbLabel">{block.label}</span>
              <div className="itbSeparator" />
              <h2 className="itbHeading" data-scroll="" data-scroll-speed="1">
                {block.heading}
                <span className="itbSignature">{block.signature}</span>
              </h2>
              <p className="itbParagraph">{block.body}</p>
              <KnowMore href={block.href} className="full">
                know more
              </KnowMore>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
