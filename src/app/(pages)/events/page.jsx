"use client";
import React from "react";
import { EventsViewer } from "./EventsViewer";
import { ImagesSliderShower } from "@/components/shared/ImagesSliderShower";
import VideoSection from "./VideoSection";

function EventsPage({ showHeroSection = true }) {
  return (
    <>
      {showHeroSection && (
        <ImagesSliderShower title="Events" pageName="Events" />
      )}

      <VideoSection
        videoUrl="https://www.dropbox.com/scl/fi/tu4axqylol49iiju27in5/office-visit.mp4?rlkey=h0h3vlf01kqrwz320jg0pg143&st=ckcjogbk&raw=1"
        overlayText="RankBPO"
      />

      <EventsViewer />
    </>
  );
}

export default EventsPage;
