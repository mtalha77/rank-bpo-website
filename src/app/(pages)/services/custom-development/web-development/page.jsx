import { ImagesSliderShower } from "@/components/shared/ImagesSliderShower";
import MediaPlayer from "@/components/shared/MediaPlayer";
import React from "react";

function WebDevelopment({ showHeroSection = true }) {
  return (
    <>
      {/* hero section  */}
      {showHeroSection && <ImagesSliderShower title={"web development"} />}

      <div className="min-h-[70vh] p-10 grid grid-cols-1 md:grid-cols-[1fr_1fr]">
        {/* left side  */}
        <div
          className="w-full h-full flex items-center justify-center mt-4 p-10"
          data-aos="fade-right"
        >
          <MediaPlayer src={"/videos/web-dev.json"} />
        </div>

        {/* right side  */}
        <div className="text-white/80 p-10" data-aos="fade-left">
          <span className="inline-block mt-5 text-2xl uppercase border-b-4 border-blue-600">
            Web Development
          </span>

          <h1
            data-aos="fade-down"
            className="mt-10 text-xl md:text-3xl font-extrabold"
          >
            Make Sure The World Knows Your Brand with Tailored Websites
          </h1>

          <p
            data-aos="fade-up"
            className="mt-2 text-lg text-opacity-85 font_barlow text-justify custom_font"
          >
            A website is the first impression of your company that plays a vital
            role in building trust with potential customers. Our expertise lies
            in creating responsive websites that turn your concepts into
            captivating online interactions. We use innovative techniques and
            design principles to develop user-friendly websites that are
            customized to your brand.
          </p>
          <p
            data-aos="fade-up"
            className="mt-2 text-lg text-opacity-85 font_barlow text-justify custom_font"
          >
            We recognize that each business has different requirements, so our
            approach is completely tailored. We guarantee that your website,
            whether it&apos;s an e-commerce platform or informational site, has
            both excellent appearance and smooth performance. We focus on
            efficiency, security, and flexibility, enabling your website to
            expand along with your company.
          </p>
          <p
            data-aos="fade-up"
            className="mt-2 text-lg text-opacity-85 font_barlow text-justify custom_font"
          >
            However, the process does not conclude with the launch. Our continuous support and maintenance services ensure that your website is online and functioning efficiently. We offer a strong online presence that attracts many customers and boosts conversions. Let&apos;s create something amazing in collaboration.
          </p>
        </div>
      </div>
    </>
  );
}

export default WebDevelopment;
