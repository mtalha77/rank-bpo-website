import { ImagesSliderShower } from "@/components/shared/ImagesSliderShower";
import MediaPlayer from "@/components/shared/MediaPlayer";
import React from "react";

function ContentWritingAndMarketing({ showHeroSection = true }) {
  return (
    <>
      {/* hero section  */}
      {showHeroSection && (
        <ImagesSliderShower title={"content writing and marketing"} />
      )}

      <div className="min-h-[70vh] p-10 grid grid-cols-1 md:grid-cols-[1fr_1fr]">
        {/* left side  */}
        <div
          className="w-full h-full flex items-center mt-4 p-10"
          data-aos="fade-right"
        >
          <MediaPlayer src={"/videos/article-writing.json"} />
        </div>

        {/* right side  */}
        <div className="text-white/80 p-10" data-aos="fade-left">
          <span className="inline-block mt-5 text-2xl uppercase border-b-4 border-blue-600">
            Content Writing and Marketing
          </span>

          <h1
            data-aos="fade-down"
            className="mt-10 text-xl md:text-3xl font-extrabold"
          >
            Crafting Stories That Builds Brand Loyalty With Every Word
          </h1>

          <p
            data-aos="fade-up"
            className="mt-2 text-lg text-opacity-85 font_barlow text-justify custom_font"
          >
            At Rank BPO PVT LTD, our passionate content writing and marketing
            team aims to assist your brand in sharing engaging stories that
            connect with your audience. Our team of experienced writers produces
            engaging, informative, and SEO-optimized content customized to meet
            your specific requirements, emphasizing the importance of quality
            content in marketing. From blog posts and articles to website text
            and social media posts, we make sure that all content reflects your
            brand voice and objectives.
          </p>
          <p
            data-aos="fade-up"
            className="mt-2 text-lg text-opacity-85 font_barlow text-justify custom_font"
          >
            We emphasize providing value to your audience through strategic
            content marketing methods that result in higher traffic, improved
            engagement, and enhanced trust. Our method involves thorough
            research to understand your audience and pinpoint popular subjects
            that engage their attention. We also assess the performance of the
            content, enabling us to improve strategies and optimize your ROI..
          </p>
          <p
            data-aos="fade-up"
            className="mt-2 text-lg text-opacity-85 font_barlow text-justify custom_font"
          >
            Allow our experts to assist you in positioning your brand as a
            leading figure in the industry through content that informs and
            motivates action.
          </p>
        </div>
      </div>
    </>
  );
}

export default ContentWritingAndMarketing;
