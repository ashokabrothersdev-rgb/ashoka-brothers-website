import "./munni-home.css";
import { HomeActivities } from "./HomeActivities";
import { HomeBlogs } from "./HomeBlogs";
import { HomeComposition } from "./HomeComposition";
import { HomeEnquiries } from "./HomeEnquiries";
import { HomeHero } from "./HomeHero";
import { HomeImageText } from "./HomeImageText";
import { HomeIntro } from "./HomeIntro";
import { HomeReviews } from "./HomeReviews";
import { HomeTrades } from "./HomeTrades";
import { HomeWhy } from "./HomeWhy";
import { MunniScrollEffects } from "./MunniScrollEffects";

export function MunniHome() {
  return (
    <article id="home" className="munni-home">
      <HomeHero />
      <HomeIntro />
      <HomeComposition />
      <HomeImageText />
      <HomeActivities />
      <HomeWhy />
      <HomeTrades />
      <HomeEnquiries />
      <HomeBlogs />
      <HomeReviews />
      <MunniScrollEffects />
    </article>
  );
}
