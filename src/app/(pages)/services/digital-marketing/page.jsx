import { ImagesSliderShower } from "@/components/shared/ImagesSliderShower";
import MediaPlayer from "@/components/shared/MediaPlayer";
import ServiceCard from "@/components/shared/ServiceCard";
import Link from "next/link";
import React from "react";

const services = [
  {
    image: "/images/services/App-Store-Optimization-and-Marketing.jpg",
    title: "App Store Optimization",
    description:
      "Boost the visibility and number of downloads of your apps with customized optimization and marketing to achieve success.",
    url: "/services/digital-marketing/app-store-optimization-and-marketing",
  },
  {
    image:
      "/images/services/Content-Writing-and-Marketing.jpg",
    title: "content writing and Marketing",
    description:
      "Create compelling content material that connects you with your visitors, building trust and enhancing reputation.",
    url: "/services/digital-marketing/content-writing-and-marketing",
  },
  {
    image:
      "/images/services/Conversion-Rate-Optimization.jpg",
    title: "conversion rate optimization",
    description:
      "Increase your online advertising effectiveness by utilizing data-driven techniques to convert traffic into paying clients.",
    url: "/services/digital-marketing/conversion-rate-optimization",
  },
  {
    image: "/images/services/E-Commerce-Marketing.jpg",
    title: "e commerce marketing",
    description:
      "Boost sales and customer loyalty by implementing specific marketing techniques that turn visitors into customers.",
    url: "/services/digital-marketing/e-commerce-marketing",
  },
  {
    image:
      "/images/services/Marketing-Strategy.jpg",
    title: "marketing strategy",
    description:
      "Develop customized marketing plans tailored to fit your unique business image and target audience for highly effective results.",
    url: "/services/digital-marketing/marketing-strategy",
  },
  {
    image:
      "/images/services/Pay-Per-Click-(PPC)-Management.jpg",
    title: "ppc management",
    description:
      "Make the most of your advertising budget with amazing PPC management, which gives brilliant results and great ROI.",
    url: "/services/digital-marketing/ppc-management",
  },
  {
    image:
      "/images/services/Search-Engine-Marketing.jpg",
    title: "search engine marketing",
    description:
      "Boost your online visibility on search engines with strategically targeted ads that significantly increase conversion rates",
    url: "/services/digital-marketing/search-engine-marketing",
  },
  {
    image:
      "/images/services/search-engine-optimization.jpg",
    title: "search engine optimization",
    description:
      "Drive organic traffic and improve rankings with expertly crafted SEO strategies that enhance visibility and engagement.",
    url: "/services/digital-marketing/search-engine-optimization",
  },
  {
    image:
      "/images/services/Social-Media-Marketing.jpg",
    title: "social media marketing",
    description:
      "Capture and increase your audience on social media platforms with personalized content material and targeted advertising techniques.",
    url: "/services/digital-marketing/social-media-marketing",
  },
  {
    image:
      "/images/services/YouTube-Channel-Marketing.jpg",
    title: "youtube channel",
    description:
      "Grow the presence of your brand with engaging video content and strategic management of your YouTube channel.",
    url: "/services/digital-marketing/youtube-channel",
  },
];

function DigitalMarketingPage({ showHeroSection = true }) {
  return (
    <>
      {/* hero section  */}
      {showHeroSection && (
        <ImagesSliderShower title={"Digital Marketing Services"} />
      )}

      <div className="min-h-[70vh] py-10 grid grid-cols-1 md:grid-cols-[1fr_1fr]">
        {/* left side  */}
        <div className="w-full h-full flex items-center mt-4 p-10">
          <MediaPlayer src={"/videos/Social Media Marketing.json"} />
        </div>

        {/* right side  */}
        <div className="text-white/80 p-10">
          <span className="inline-block mt-5 text-2xl uppercase border-b-4 border-blue-600">
            Digital Marketing
          </span>

          <h1
            data-aos="fade-down"
            className="mt-10 text-xl md:text-3xl font-extrabold"
          >
            Tailored Digital Strategies for Maximum Impact and Visibility
          </h1>

          <p
            data-aos="fade-up"
            className="mt-2 text-lg text-opacity-85 custom_font text-justify"
          >
            In the present world that prioritizes digital platforms, a robust
            online presence is crucial for businesses to thrive. At Rank BPO PVT
            LTD, we provide thorough digital marketing services that aim to
            enhance your brand and reach your desired audience. Whether you
            require search engine marketing for better visibility or social
            media marketing to engage users on various platforms, our strategies
            are designed to deliver results.
          </p>
          <p
            data-aos="fade-up"
            className="mt-2 text-lg text-opacity-85 custom_font text-justify"
          >
            We have knowledge in various areas, from managing PPC to maximizing
            advertising budget to optimizing conversion rates to create loyal
            customers. We also have expertise in e-commerce marketing to help
            your online store succeed, as well as YouTube marketing to increase
            video engagement.
          </p>
          <p
            data-aos="fade-up"
            className="mt-2 text-lg text-opacity-85 custom_font text-justify"
          >
            By implementing personalized methods such as content creation,
            optimizing for app stores, and developing unique marketing tactics,
            our main goal is to generate campaigns that will expand your
            company. Collaborate with us to enhance your online presence and
            stay ahead of competitors.
          </p>
        </div>
      </div>

      {/* service cards  */}
      {showHeroSection ? (
        <div className="flex flex-col items-center gap-2 pb-5">
          <span className="inline-block mt-20 text-2xl uppercase text-blue-600">
            Our Services
          </span>

          <p
            data-aos="fade-up"
            className="text-3xl md:text-4xl font-extrabold text-md text-opacity-85 font_barlow text-center md:w-[35%]"
          >
            Explore Our Services
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr]">
          <div className="text-black/90 flex flex-col items-start pl-10 gap-2 pb-5">
            <span className="inline-block mt-14 text-2xl uppercase text-red-600">
              Our Services
            </span>

            <p
              data-aos="fade-up"
              className="text-3xl md:text-4xl font-extrabold text-md text-opacity-85 font_barlow text-center md:w-[35%]"
            >
              Explore Our Services
            </p>
          </div>

          <div className="flex justify-end items-center pr-10">
            <Link
              href={"/services"}
              className="btn bg-blue-600 border-0 text-white hover:bg-red-600 hover:scale-110"
              data-aos="fade-left"
            >
              All Services
            </Link>
          </div>
        </div>
      )}

      <div className=" grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 gap-4 p-10">
        {services.map(({ image, title, description, url }) => (
          <ServiceCard
            key={title}
            image={image}
            title={title}
            description={description}
            url={url}
          />
        ))}
      </div>
    </>
  );
}

export default DigitalMarketingPage;
