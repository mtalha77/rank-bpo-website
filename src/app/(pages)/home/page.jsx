import HeroSection from "@/components/core/HeroSection";
import React from "react";
import AboutUsPage from "../about-us/page";
import dynamic from "next/dynamic";
// import EventsPage from "../events/page";

const EventsPage = dynamic(() => import('./../events/page'), { ssr: false });

function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutUsPage showHeroSection={false} />
      <EventsPage showHeroSection={false} />
    </>
  );
}

export default HomePage;
