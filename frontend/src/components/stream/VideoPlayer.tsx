"use client";

import { useState } from "react";
import Image from "next/image";
import {
  FaPlay,
  FaPause,
  FaExpand,
  FaVolumeMute,
  FaVolumeUp,
} from "react-icons/fa";
import type { Match } from "@/lib/data";

interface VideoPlayerProps {
  match: Match;
}

const VideoPlayer = ({ match }: VideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  return (
    <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden">
      {/* Video Placeholder */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src={match.thumbnail || "/images/placeholder.jpg"}
          alt={match.title}
          fill
          className="object-cover"
        />

        {/* Play button overlay */}
        {!isPlaying && (
          <div
            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 cursor-pointer"
            onClick={() => setIsPlaying(true)}
          >
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary bg-opacity-80 hover:bg-opacity-100 transition-colors">
              <FaPlay className="text-white text-2xl ml-1" />
            </div>
          </div>
        )}
      </div>

      {/* Video Controls */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <button
              className="text-white hover:text-primary transition-colors"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? <FaPause /> : <FaPlay />}
            </button>

            <button
              className="text-white hover:text-primary transition-colors"
              onClick={() => setIsMuted(!isMuted)}
            >
              {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
            </button>

            <div className="text-white text-sm">
              <span>0:00</span> / <span>0:00</span>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="text-white text-sm">
              <span>{match.isLive ? "LIVE" : "ON DEMAND"}</span>
            </div>

            <button className="text-white hover:text-primary transition-colors">
              <FaExpand />
            </button>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-2 h-1 bg-gray-700 rounded-full overflow-hidden">
          <div className="h-full bg-primary" style={{ width: "0%" }}></div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
