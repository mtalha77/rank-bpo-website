import { ImagesSliderShower } from "@/components/shared/ImagesSliderShower";
import MediaPlayer from "@/components/shared/MediaPlayer";
import React from "react";

function SocialMediaMarketing({ showHeroSection = true }) {
  return (
    <>
      {/* hero section  */}
      {showHeroSection && (
        <ImagesSliderShower title={"social media marketing"} />
      )}

      <div className="min-h-[70vh] p-10 grid grid-cols-1 md:grid-cols-[1fr_1fr]">
        {/* left side  */}
        <div
          className="w-full h-full flex items-center mt-4 p-10"
          data-aos="fade-right"
        >
          <MediaPlayer src={"/videos/Social Media Marketing video.json"} />
        </div>

        {/* right side  */}
        <div className="text-white/80 p-10" data-aos="fade-left">
          <span className="inline-block mt-5 text-2xl uppercase border-b-4 border-blue-600">
            Social Media Marketing
          </span>

          <h1
            data-aos="fade-down"
            className="mt-10 text-xl md:text-3xl font-extrabold"
          >
            Grow Followers, Drive Results with Expert Social Media Marketing
          </h1>

          <p
            data-aos="fade-up"
            className="mt-2 text-lg text-opacity-85 font_barlow text-justify custom_font"
          >
            Our Social Media Marketing services are tailored to support the
            success of your brand on various platforms such as Facebook,
            Instagram, and more. We create personalized plans that connect with
            your audience, establish brand recognition, and encourage
            significant engagements. Whether you want to grow followers, enhance
            engagement, or increase conversions, our customized social media
            campaigns deliver great results.
          </p>
          <p
            data-aos="fade-up"
            className="mt-2 text-lg text-opacity-85 font_barlow text-justify custom_font"
          >
            Our main focus is capturing your brand&apos;s essence and delivering
            messages that connect with your audience by creating engaging
            content and overseeing specific ad campaigns. We also offer thorough
            performance analysis to make sure your campaigns are optimized for
            the highest possible reach and engagement
          </p>
          <p
            data-aos="fade-up"
            className="mt-2 text-lg text-opacity-85 font_barlow text-justify custom_font"
          >
            We can expertly enhance your social media presence, creating
            connections that lead to increased business. Let us take care of and
            handle your social media accounts. We promise to deliver the results
            that you need.
          </p>
        </div>
      </div>
    </>
  );
}

export default SocialMediaMarketing;
