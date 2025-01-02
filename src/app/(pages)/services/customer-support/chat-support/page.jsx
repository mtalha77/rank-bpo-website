import { ImagesSliderShower } from "@/components/shared/ImagesSliderShower";
import MediaPlayer from "@/components/shared/MediaPlayer";
import React from "react";

function ChatSupport({ showHeroSection = true }) {
  return (
    <>
      {/* hero section  */}
      {showHeroSection && <ImagesSliderShower title={"chat support"} />}

      <div className="min-h-[70vh] p-10 grid grid-cols-1 md:grid-cols-[1fr_1fr]">
        {/* left side  */}
        <div
          className="w-full h-full flex items-center mt-4 p-10"
          data-aos="fade-right"
        >
          <MediaPlayer src={"/videos/Customer Support chat.json"} />
        </div>

        {/* right side  */}
        <div className="text-white/80 p-10" data-aos="fade-left">
          <span className="inline-block mt-5 text-2xl uppercase border-b-4 border-blue-600">
            Chat Support
          </span>

          <h1
            data-aos="fade-down"
            className="mt-10 text-xl md:text-3xl font-extrabold"
          >
            Real-Time Chat Solutions to Enhance Customer Satisfaction
          </h1>

          <p
            data-aos="fade-up"
            className="mt-2 text-lg text-opacity-85 font_barlow text-justify custom_font"
          >
            Our chat support services aim to offer immediate help to your
            customers, improving their overall satisfaction. Immediate
            communication is crucial for quickly addressing customer needs and
            resolving problems if you want to survive in today&apos;s
            fast-moving digital landscape.
          </p>
          <p
            data-aos="fade-up"
            className="mt-2 text-lg text-opacity-85 font_barlow text-justify custom_font"
          >
            Our main goal is to comprehend customer queries, offer precise
            information, resolve issues, and assist users in navigating
            processes smoothly. With our chat support service, you can enhance
            interaction, improve conversion rates, and decrease response times.
            We promise quality service and customer satisfaction every time.
          </p>
          <p
            data-aos="fade-up"
            className="mt-2 text-lg text-opacity-85 font_barlow text-justify custom_font"
          >
            Utilizing our sophisticated analytics will give you a deeper
            understanding of customer actions, enabling you to constantly
            improve your services. Allow us to enhance your customer service
            with our dependable and efficient chat options, guaranteeing that
            your customers feel appreciated and assisted throughout their
            journey.
          </p>
        </div>
      </div>
    </>
  );
}

export default ChatSupport;
