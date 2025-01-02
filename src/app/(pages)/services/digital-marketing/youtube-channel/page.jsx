import { ImagesSliderShower } from "@/components/shared/ImagesSliderShower";
import MediaPlayer from "@/components/shared/MediaPlayer";
import React from "react";

function YoutubeChannel({ showHeroSection = true }) {
  return (
    <>
      {/* hero section  */}
      {showHeroSection && <ImagesSliderShower title={"youtube channel"} />}

      <div className="min-h-[70vh] p-10 grid grid-cols-1 md:grid-cols-[1fr_1fr]">
        {/* left side  */}
        <div
          className="w-full h-full flex items-center mt-4 p-10"
          data-aos="fade-right"
        >
          <MediaPlayer src={"/videos/video-podcast.json"} />
        </div>

        {/* right side  */}
        <div className="text-white/80 p-10" data-aos="fade-left">
          <span className="inline-block mt-5 text-2xl uppercase border-b-4 border-blue-600">
            YouTube Channel
          </span>

          <h1
            data-aos="fade-down"
            className="mt-10 text-xl md:text-3xl font-extrabold"
          >
            Engage and Grow Your Audience with Compelling Video Content
          </h1>

          <p
            data-aos="fade-up"
            className="mt-2 text-lg text-opacity-85 font_barlow text-justify custom_font"
          >
            Our marketing services on YouTube are designed to enhance your
            brands visibility on this major video platform globally. We
            recognize the influence of video content in captivating viewers,
            creating brand recognition, and increasing conversions. Our method
            includes developing a thorough plan that not only emphasizes
            creating excellent videos but also enhances them for search and
            engagement.
          </p>
          <p
            data-aos="fade-up"
            className="mt-2 text-lg text-opacity-85 font_barlow text-justify custom_font"
          >
            Our services cover content creation, video editing, and SEO
            optimization to boost your videos visibility and engage with your
            desired audience. Our team carefully researches popular topics and
            keywords to create engaging content that connects with audiences.
          </p>
          <p
            data-aos="fade-up"
            className="mt-2 text-lg text-opacity-85 font_barlow text-justify custom_font"
          >
            Furthermore, we offer analysis and data to track progress, enabling
            us to improve your plan and increase audience interaction
            consistently. Suppose you are starting a new channel or trying to
            expand an existing one. In that case, we can help make your presence
            on YouTube effective and prosperous
          </p>
        </div>
      </div>
    </>
  );
}

export default YoutubeChannel;
