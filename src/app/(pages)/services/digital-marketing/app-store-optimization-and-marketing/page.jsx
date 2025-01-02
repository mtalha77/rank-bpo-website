import { ImagesSliderShower } from "@/components/shared/ImagesSliderShower";
import MediaPlayer from "@/components/shared/MediaPlayer";
import React from "react";

function AppStoreOptimizationAndMarketing({ showHeroSection = true }) {
  return (
    <>
      {/* hero section  */}
      {showHeroSection && (
        <ImagesSliderShower title={"app store optimization and marketing"} />
      )}

      <div className="min-h-[70vh] p-10 grid grid-cols-1 md:grid-cols-[1fr_1fr]">
        {/* left side  */}
        <div
          className="w-full h-full flex items-center mt-4 p-10"
          data-aos="fade-right"
        >
          <MediaPlayer src={"/videos/App Store Optimization.json"} />
        </div>

        {/* right side  */}
        <div className="text-white/80 p-10" data-aos="fade-left">
          <span className="inline-block mt-5 text-2xl uppercase border-b-4 border-blue-600">
            App Store Optimization and Marketing
          </span>

          <h1
            data-aos="fade-down"
            className="mt-10 text-xl md:text-3xl font-extrabold"
          >
            Drive Downloads and Engagement with Expert ASO and Marketing
          </h1>

          <p
            data-aos="fade-up"
            className="mt-2 text-lg text-opacity-85 font_barlow text-justify custom_font"
          >
            App Store Optimization (ASO) and Marketing services aim to improve
            the visibility and performance of your mobile app in competitive app
            stores. Amidst the competition of millions of apps, a successful ASO
            is essential to draw in and keep users. We start by conducting
            thorough keyword research and analysis to determine the specific
            terms your desired audience is looking for, ultimately increasing
            the visibility of your app in search engine and app stores.
          </p>
          <p
            data-aos="fade-up"
            className="mt-2 text-lg text-opacity-85 font_barlow text-justify custom_font"
          >
            Our focus is on enhancing your apps title, description, and visuals
            to boost downloads and user engagement. Furthermore, our team
            creates a customized marketing plan to increase the visibility of
            your app listing. We also track app performance with analytics,
            enabling us to constantly improve our strategies for the best
            results.
          </p>
          <p
            data-aos="fade-up"
            className="mt-2 text-lg text-opacity-85 font_barlow text-justify custom_font"
          >
            Allow us to assist you in optimizing your app’s capabilities,
            converting downloads into devoted users, and promoting continuous
            expansion.
          </p>
        </div>
      </div>
    </>
  );
}

export default AppStoreOptimizationAndMarketing;
