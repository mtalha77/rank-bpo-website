import { ImagesSliderShower } from "@/components/shared/ImagesSliderShower";
import MediaPlayer from "@/components/shared/MediaPlayer";
import React from "react";

function MarketingStrategy({ showHeroSection = true }) {
  return (
    <>
      {/* hero section  */}
      {showHeroSection && <ImagesSliderShower title={"marketing strategy"} />}

      <div className="min-h-[70vh] p-10 grid grid-cols-1 md:grid-cols-[1fr_1fr]">
        {/* left side  */}
        <div
          className="w-full h-full flex items-center mt-4 p-10"
          data-aos="fade-right"
        >
          <MediaPlayer src={"/videos/Marketing Strategy.json"} />
        </div>

        {/* right side  */}
        <div className="text-white/80 p-10" data-aos="fade-left">
          <span className="inline-block mt-5 text-2xl uppercase border-b-4 border-blue-600">
            Marketing Strategy
          </span>

          <h1
            data-aos="fade-down"
            className="mt-10 text-xl md:text-3xl font-extrabold"
          >
            Your Roadmap to Success: Custom Marketing Strategy Solutions
          </h1>

          <p
            data-aos="fade-up"
            className="mt-2 text-lg text-opacity-85 font_barlow text-justify custom_font"
          >
            We recognize that a carefully planned marketing strategy is
            essential for achieving success in business. Our customized
            marketing tactics are created to match your specific objectives,
            audience, and market trends. We utilize a strategy based on data
            analysis of your market standing and competitors to develop
            practical strategies that improve brand recognition, increase
            customer interaction, and optimize return on investment.
          </p>
          <p
            data-aos="fade-up"
            className="mt-2 text-lg text-opacity-85 font_barlow text-justify custom_font"
          >
            Suppose you require a plan for search engine marketing, social media
            campaigns, or content marketing. In that case, we guarantee that
            each component is carefully prepared and enhanced for effectiveness.
            Our team collaborates with you to establish specific goals and
            implement strategies that achieve measurable results.
          </p>
          <p
            data-aos="fade-up"
            className="mt-2 text-lg text-opacity-85 font_barlow text-justify custom_font"
          >
            Rank BPO PVT LTD is dedicated to helping you succeed in a constantly
            changing digital environment, from enhancing brand recognition to
            boosting lead generation and conversion rates.
          </p>
        </div>
      </div>
    </>
  );
}

export default MarketingStrategy;
