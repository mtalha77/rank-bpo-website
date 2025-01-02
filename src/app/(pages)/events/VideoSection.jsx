"use client";
import { Volume2, VolumeOff } from "lucide-react";
import React, { useState } from "react";

const VideoSection = ({ videoUrl, overlayText = "" }) => {
  const [muted, setMuted] = useState(true); // Initially muted

  const toggleMute = () => {
    setMuted((prevMuted) => !prevMuted); // Toggle mute/unmute
  };

  return (
    <div className="flex justify-center items-center bg-transparent p-4">
      <div className="relative w-full max-w-5xl rounded-xl overflow-hidden shadow-lg">
        <div className="relative w-full h-0 pb-[56.25%] bg-black">
          {/* Video Element */}
          <video
            src={videoUrl}
            className="absolute top-0 left-0 w-full h-full object-cover z-100"
            muted={muted}
            autoPlay
            loop
            controls={false} // Disable all native controls
          />
        </div>

        {/* Overlay Text */}
        {/* {overlayText && (
          <div className="absolute bottom-16 left-4 text-white font-bold text-xl">
            {overlayText}
          </div>
        )} */}

        {/* Mute/Unmute Button */}
        <div
          className="absolute top-4 right-4 bg-white/50 text-xs p-2 rounded-full cursor-pointer"
          onClick={toggleMute}
        >
          {muted ? (
            <span className="text-black font-bold">
              <VolumeOff />
            </span>
          ) : (
            <span className="text-black font-bold">
              <Volume2 />
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
