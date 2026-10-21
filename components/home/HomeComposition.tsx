import Link from "next/link";
import { KnowMore } from "./KnowMore";
import { compositionCards, compositionPics, mobileProducts, munniImage } from "@/data/home-page.data";

export function HomeComposition() {
  return (
    <>
      <section id="homeComposition" className="mobileHidden">
        <div id="compositionTarget" data-scroll="" data-scroll-id="compositionTarget" />
        <div
          id="compositionSticky"
          data-scroll=""
          data-scroll-class="sticky"
          data-scroll-id="compositionSticky"
          data-scroll-sticky=""
          data-scroll-target="#compositionTarget"
        >
          <div id="compositionPicLayer" className="has_transition_800">
            {compositionPics.map((pic) => (
              <div
                key={pic.id}
                id={pic.id}
                className={`no_overflow relative${pic.id === "cpMain" ? "" : " has_transition_1000"}`}
              >
                <img
                  alt=""
                  src={munniImage(pic.image)}
                  width={pic.width}
                  height={pic.height}
                  className={`fit${pic.id === "cpMain" ? " has_transition_800 block" : ""}`}
                />
                {pic.id === "cpMain" ? <div className="cpVeil" /> : null}
              </div>
            ))}
          </div>
          <div id="compositionCardsLayer" className="has_transition_800">
            {compositionCards.map((card) => (
              <Link
                key={card.id}
                href="/products"
                className="compositionCard has_transition_1000"
                id={card.id}
              >
                <div className="cardContent">
                  <div className="cardTitle cBlue no_overflow top_translated has_transition_3000 fast_rewind relative">
                    <span>{card.title}</span>
                    <span className="plus" />
                  </div>
                  <div className="cardLine top_translated has_transition_3000 d100 fast_rewind" />
                  <div className="cardText top_translated has_transition_3000 d200 fast_rewind text smaller">
                    {card.text}
                  </div>
                </div>
                <div className="cardPic relative">
                  <div className="mask_bottom no_overflow has_transition_3000 full full_height d200 fast_rewind">
                    <div className="t_container no_overflow has_transition_3000 full_height d200 fast_rewind">
                      <img
                        alt={card.title}
                        src={munniImage(card.image)}
                        width={card.width}
                        height={card.height}
                        className="fit"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section id="homeSuites" className="mobileOnly">
        {mobileProducts.map((product, index) => (
          <div
            key={product.title}
            className={`mainContainer insight${index === 0 ? "" : " tripleMargin"}`}
          >
            <div className="top no_overflow" data-scroll="" data-scroll-repeat="">
              <div className="left">
                <div className="highlight cBlue no_overflow has_transition_3000 fast_rewind top_translated">
                  <h2>{product.title}</h2>
                </div>
                <div className="sectionSubtitle text halfMargin has_transition_3000 fast_rewind top_translated d100">
                  <p>{product.subtitle}</p>
                </div>
                <div className="text doubleMargin has_transition_3000 fast_rewind top_translated d200">
                  <p>{product.body}</p>
                </div>
              </div>
              <div className="right">
                <div className="pic relative no_overflow" data-scroll="" data-scroll-repeat="">
                  <div className="mask_bottom no_overflow has_transition_1500_inout full full_height fast_rewind">
                    <div className="t_container no_overflow has_transition_1500_inout full_height fast_rewind">
                      <img
                        alt={product.title}
                        src={munniImage(product.image)}
                        width={product.width}
                        height={product.height}
                        className="fit has_transition_1500_inout scaledUp fast_rewind"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <KnowMore href="/products">know more</KnowMore>
          </div>
        ))}
      </section>
    </>
  );
}
