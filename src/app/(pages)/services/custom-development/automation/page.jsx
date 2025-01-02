import { ImagesSliderShower } from "@/components/shared/ImagesSliderShower";
import MediaPlayer from "@/components/shared/MediaPlayer";
import React from "react";

function Automation({ showHeroSection = true }) {
  return (
    <>
      {/* hero section  */}
      {showHeroSection && <ImagesSliderShower title={"automation"} />}

      <div className="min-h-[70vh] p-10 grid grid-cols-1 md:grid-cols-[1fr_1fr]">
        {/* left side  */}
        <div
          className="w-full h-full flex items-center mt-4 p-10"
          data-aos="fade-right"
        >
          <MediaPlayer src={"/videos/Robotic process automation.json"} />
        </div>

        {/* right side  */}
        <div className="text-white/80 p-10" data-aos="fade-left">
          <span className="inline-block mt-5 text-2xl uppercase border-b-4 border-blue-600">
            Automation
          </span>

          <h1
            data-aos="fade-down"
            className="mt-10 text-xl md:text-3xl font-extrabold"
          >
            Streamlining Operations and Boosting Efficiency with Automation
          </h1>

          <p
            data-aos="fade-up"
            className="mt-2 text-lg text-opacity-85 font_barlow text-justify custom_font"
          >
            Speed and efficiency are a must if you want to stay in competition
            in the market. Rank BPO PVT LTD&apos;s automation services are
            designed to make your operations more efficient, decrease manual
            labor, and improve performance. We assist companies in automating
            tasks in different areas, from simple routines to complicated
            processes, to improve efficiency and utilize resources effectively.
          </p>
          <p
            data-aos="fade-up"
            className="mt-2 text-lg text-opacity-85 font_barlow text-justify custom_font"
          >
            Our team develops automation solutions tailored to fit seamlessly
            with your current systems, boosting productivity while maintaining
            workflow efficiency. We create intelligent solutions that can grow
            alongside your business, whether it involves automating customer
            interactions, data management, or internal processes.
          </p>
          <p
            data-aos="fade-up"
            className="mt-2 text-lg text-opacity-85 font_barlow text-justify custom_font"
          >
            Our automation services help save time and costs by reducing
            mistakes and increasing efficiency, enabling you to concentrate on
            innovation and growth. Collaborate with us to utilize automation for
            a competitive advantage and elevate your business operations. We
            guarantee that we can improve your business in a way you have never
            seen before.
          </p>
        </div>
      </div>
    </>
  );
}

export default Automation;
