"use client";

import { useEffect, useState } from "react";
import { reviews } from "./data";

export function HomeReviews() {
  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    setRevealed(false);
    const frame = requestAnimationFrame(() => setRevealed(true));
    return () => cancelAnimationFrame(frame);
  }, [index]);

  const go = (next: number) => {
    setIndex((next + reviews.length) % reviews.length);
  };

  return (
    <section id="reviews">
      <div className="fullContainer relative">
        <div id="quotes" aria-hidden="true">
          <svg viewBox="0 0 51.275 43.795">
            <path
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="0.1"
              d="M26.826,38.768 l2.64,4.961c12.799-6.68,21.759-18.4,21.759-33.6c0-6.399-3.52-10.078-8.12-10.078c-4.398,0-7.639,3.76-7.639,8.318 c0,4.48,3.2,6.799,7.36,6.799c0.252,0,0.532-0.024,0.824-0.063C43.499,23.53,37.622,32.551,26.826,38.768z"
            />
            <path
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="0.1"
              d="M16.067,15.169 c0.252,0,0.533-0.025,0.825-0.064c-0.151,8.425-6.028,17.446-16.825,23.664l2.641,4.96c12.798-6.681,21.758-18.4,21.758-33.6 c0-6.399-3.52-10.079-8.119-10.079c-4.399,0-7.639,3.76-7.639,8.32C8.708,12.849,11.907,15.169,16.067,15.169z"
            />
          </svg>
        </div>
        <div className="highlight cWhite tCenter doubleMargin no_overflow" data-scroll="">
          <h2 className="block top_hidden has_transition_1500 fast_rewind">GUEST REVIEWS</h2>
        </div>
        <div id="reviewSlider" className="doubleMargin" data-scroll="">
          <div className="glide__track has_transition_800 transition_all">
            <ul
              className="glide__slides"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {reviews.map((review, reviewIndex) => (
                <li
                  key={review.name}
                  className={`glide__slide${revealed && reviewIndex === index ? " show" : ""}`}
                >
                  <div className="reviewItem">
                    <div className="text smaller uppercase">
                      <span>{review.name}</span>
                    </div>
                    <div className="text special mid margin relative">
                      <p>{review.quote}</p>
                      <div className="revLineCover" aria-hidden="true">
                        {Array.from({ length: 12 }, (_, line) => (
                          <div
                            key={line}
                            className={`revLineMask has_transition_2000 d${line * 50}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="glide__arrows mobileHidden">
            <button
              type="button"
              className="glide__arrow glide__arrow--left"
              aria-label="Previous review"
              onClick={() => go(index - 1)}
            />
            <button
              type="button"
              className="glide__arrow glide__arrow--right"
              aria-label="Next review"
              onClick={() => go(index + 1)}
            />
          </div>
          <div className="glide__bullets halfMargin mobileOnly">
            {reviews.map((review, reviewIndex) => (
              <button
                key={review.name}
                type="button"
                className={`glide__bullet${reviewIndex === index ? " glide__bullet--active" : ""}`}
                aria-label={`Show review ${reviewIndex + 1}`}
                onClick={() => go(reviewIndex)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
