import { KnowMore } from "./KnowMore";
import { munniImage, trades } from "@/data/home-page.data";

export function HomeTrades() {
  return (
    <section id="homeSpa">
      <div className="mainContainer" data-scroll="" data-scroll-repeat="">
        <div className="highlight cBlue no_overflow tCenter">
          <h2 className="block has_transition_1500 fast_rewind top_hidden">
            Built for every trade
          </h2>
        </div>
        <div className="sectionSubtitle uppercase text halfMargin has_transition_3000 fast_rewind top_single d100 tCenter">
          <p>
            From furniture to fabrication,
            <br />
            our fasteners do the holding.
          </p>
        </div>
      </div>
      <div
        id="spaPic"
        className="fullContainer doubleMargin no_overflow"
        data-scroll=""
        data-scroll-repeat=""
      >
        {trades.map((trade, index) => (
          <div
            key={trade.alt}
            className={`pic ${trade.shape} relative no_overflow top_hidden has_transition_3000 fast_rewind${index === 1 ? " d200" : ""}`}
          >
            <img
              alt={trade.alt}
              src={munniImage(trade.image)}
              width={trade.width}
              height={trade.height}
              className="fit"
            />
          </div>
        ))}
      </div>
      <div id="spaText" data-scroll="" data-scroll-repeat="">
        <div className="text doubleMargin has_transition_3000 fast_rewind top_single tCenter">
          <p>
            Carpenters, fabricators, electricians and assembly lines all rely
            on the same thing, a fastener that fits right and holds firm. Our
            range is specified to suit each one.
          </p>
        </div>
        <KnowMore href="/products" className="margin full">
          know more
        </KnowMore>
      </div>
    </section>
  );
}
