import { ImagesSliderShower } from "@/components/shared/ImagesSliderShower";
import MediaPlayer from "@/components/shared/MediaPlayer";
import React from "react";

function MobileDevelopment({ showHeroSection = true }) {
  return (
    <>
      {/* hero section  */}
      {showHeroSection && <ImagesSliderShower title={"mobile development"} />}

      <div className="min-h-[70vh] p-10 grid grid-cols-1 md:grid-cols-[1fr_1fr]">
        {/* left side  */}
        <div
          className="w-full h-full flex items-center mt-4 p-10"
          data-aos="fade-right"
        >
          <MediaPlayer src={"/videos/Mobile Development.json"} />
        </div>

        {/* right side  */}
        <div className="text-white/80 p-10" data-aos="fade-left">
          <span className="inline-block mt-5 text-2xl uppercase border-b-4 border-blue-600">
            Mobile Development
          </span>

          <h1
            data-aos="fade-down"
            className="mt-10 text-xl md:text-3xl font-extrabold"
          >
            Enhancing Customer Engagement Through Beautiful Mobile Apps
          </h1>

          <p
            data-aos="fade-up"
            className="mt-2 text-lg text-opacity-85 font_barlow text-justify custom_font"
          >
            Everyone has a mobile phone today. Mobile apps are becoming very
            important for engaging with customers while they are on the move. We
            are the experts in mobile development that can take your business to
            higher levels. Our team creates easy-to-use apps to make sure your
            brand is available to your audience in their hands.
          </p>
          <p
            data-aos="fade-up"
            className="mt-2 text-lg text-opacity-85 font_barlow text-justify custom_font"
          >
            Our main focus is on developing smooth experiences that combine
            practicality with beauty. From the first idea to the last
            implementation, we collaborate closely with you to realize your
            vision. Our personalized mobile solutions are tailored to meet all
            your needs. Whether you want to improve customer interaction or
            simplify processes like retail, we will help you.
          </p>
          <p
            data-aos="fade-up"
            className="mt-2 text-lg text-opacity-85 font_barlow text-justify custom_font"
          >
            Committed to quality, our thorough testing procedures ensure
            flawless performance of your app. Collaborate with us to develop a
            modern mobile app that meets user needs and helps your business
            grow.
          </p>
        </div>
      </div>
    </>
  );
}

export default MobileDevelopment;
