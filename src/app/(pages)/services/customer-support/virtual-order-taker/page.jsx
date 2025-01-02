import { ImagesSliderShower } from "@/components/shared/ImagesSliderShower";
import MediaPlayer from "@/components/shared/MediaPlayer";
import React from "react";

function VirtualOrderTaker({ showHeroSection = true }) {
  return (
    <>
      {/* hero section  */}
      {showHeroSection && <ImagesSliderShower title={"virtual order taker"} />}

      <div className="min-h-[70vh] p-10 grid grid-cols-1 md:grid-cols-[1fr_1fr]">
        {/* left side  */}
        <div
          className="w-full h-full flex items-center mt-4 p-10"
          data-aos="fade-right"
        >
          <MediaPlayer src={"/videos/Online shopping order.json"} />
        </div>

        {/* right side  */}
        <div className="text-white/80 p-10" data-aos="fade-left">
          <span className="inline-block mt-5 text-2xl uppercase border-b-4 border-blue-600">
            Virtual Order Taker
          </span>

          <h1
            data-aos="fade-down"
            className="mt-10 text-xl md:text-3xl font-extrabold"
          >
            Effortless Order Management with Our Virtual Order Takers
          </h1>

          <p
            data-aos="fade-up"
            className="mt-2 text-lg text-opacity-85 font_barlow text-justify custom_font"
          >
            We offer virtual order-taker services that aim to simplify your
            order management process and improve customer satisfaction. Our
            experienced virtual order takers seamlessly manage customer orders
            with professionalism to ensure smooth transaction processing, acting
            as an extension of your business. Rank BPO PVT LTD makes sure no
            customer is left unnoticed, and no order is ignored.
          </p>
          <p
            data-aos="fade-up"
            className="mt-2 text-lg text-opacity-85 font_barlow text-justify custom_font"
          >
            Our team is committed to delivering excellent service that aligns
            with the values of your brand, whether it is through phone orders,
            online requests, or email confirmations. We guarantee precision in
            processing orders, decreasing error chances and improving overall
            customer satisfaction.
          </p>
          <p
            data-aos="fade-up"
            className="mt-2 text-lg text-opacity-85 font_barlow text-justify custom_font"
          >
            By delegating your order-taking requirements to us, you can dedicate
            more time and resources to your main business tasks. Partnering with
            us guarantees your customers receive prompt and dependable service,
            resulting in higher loyalty and repeated business.
          </p>
        </div>
      </div>
    </>
  );
}

export default VirtualOrderTaker;
