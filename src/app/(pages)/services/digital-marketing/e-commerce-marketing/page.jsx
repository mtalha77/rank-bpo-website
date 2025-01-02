import { ImagesSliderShower } from "@/components/shared/ImagesSliderShower";
import MediaPlayer from "@/components/shared/MediaPlayer";
import React from "react";

function EcommerceMarketing({ showHeroSection = true }) {
  return (
    <>
      {/* hero section  */}
      {showHeroSection && <ImagesSliderShower title={"e commerce marketing"} />}

      <div className="min-h-[70vh] p-10 grid grid-cols-1 md:grid-cols-[1fr_1fr]">
        {/* left side  */}
        <div
          className="w-full h-full flex items-center mt-4 p-10"
          data-aos="fade-right"
        >
          <MediaPlayer src={"/videos/sale advertisement.json"} />
        </div>

        {/* right side  */}
        <div className="text-white/80 p-10" data-aos="fade-left">
          <span className="inline-block mt-5 text-2xl uppercase border-b-4 border-blue-600">
            E-Commerce Marketing
          </span>

          <h1
            data-aos="fade-down"
            className="mt-10 text-xl md:text-3xl font-extrabold"
          >
            Maximize Sales with Proven E-Commerce Marketing Solutions
          </h1>

          <p
            data-aos="fade-up"
            className="mt-2 text-lg text-opacity-85 font_barlow text-justify custom_font"
          >
            Want to enhance your brand reach? At Rank BPO PVT LTD, we focus on
            providing specialized E-Commerce Marketing solutions to assist your
            online store in achieving success in the current fiercely
            competitive digital marketplace. Our strategy is customized for your
            unique business objectives, guaranteeing that each marketing
            campaign is focused on boosting website visits, improving sales, and
            retaining customers. We operate on various platforms like Shopify,
            Daraz, Amazon, Alibaba, and more. Improving your SEO to boost
            product rankings, starting focused PPC campaigns for quality leads,
            and utilizing social media for brand visibility and interaction.
          </p>
          <p
            data-aos="fade-up"
            className="mt-2 text-lg text-opacity-85 font_barlow text-justify custom_font"
          >
            Aside from our strong digital marketing tactics, we prioritize
            enhancing the user experience for your clients. We guarantee that
            your website will not only bring in visitors but also turn them into
            devoted customers, through smooth navigation and improved product
            pages. We also utilize email marketing to develop customized
            campaigns that encourage customers to return. Rely on our customized
            solutions created to help your business grow and stay ahead in the
            competitive market.
          </p>
        </div>
      </div>
    </>
  );
}

export default EcommerceMarketing;
