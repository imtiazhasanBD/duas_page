"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const AudioPlayer = ({audio}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPlayer, setShowPlayer] = useState(false);
  const [isAutoplay, setIsAutoplay] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  const handlePlayPause = () => {
    if (!showPlayer) setShowPlayer(true); // Show the player on first play

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      if (isAutoplay) {
        audioRef.current.play(); // Autoplay enabled
      } else {
        audioRef.current.play(); // Normal play
      }
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime || 0);
  };

  const handleLoadedData = () => {
    setDuration(audioRef.current.duration || 0);
    if (isAutoplay) audioRef.current.play(); // Autoplay on load
  };

  const handleProgressChange = (event) => {
    const seekTime = (event.target.value / 100) * duration;
    audioRef.current.currentTime = seekTime;
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadeddata", handleLoadedData);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("loadeddata", handleLoadedData);
    };
  }, [isAutoplay]);

  const formatTime = (seconds) => {
    if (isNaN(seconds)) return "0:00";
    const minutes = Math.floor(seconds / 60);
    const secondsFormatted = Math.floor(seconds % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${secondsFormatted}`;
  };

  const reverseTime = duration - currentTime;
  const progressPercentage = duration ? (currentTime / duration) * 100 : 0;

  return (
    <>
      <div className="p-4 rounded-lg">
        <div className="flex items-center justify-between space-x-4">
          {/* Play Button */}
          <button onClick={handlePlayPause} className="w-full h-full">
            {isPlaying ? (
              <Image
                src="/Dua_icon/pause.svg"
                alt="Pause"
                width={50}
                height={50}
              />
            ) : (
              <Image
                src="/Dua_icon/audiobtn.svg"
                alt="Play"
                width={50}
                height={50}
              />
            )}
          </button>

          {/* Audio Controls */}
          {showPlayer && (
            <>
              {/* Progress Bar */}
              <input
                type="range"
                className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-customGreen"
                min="0"
                max="100"
                value={progressPercentage}
                onChange={handleProgressChange}
              />

              {/* Reverse Time */}
              <span className="text-sm text-gray-600 w-full">
                -{formatTime(reverseTime)}
              </span>
              {/* Autoplay Toggle */}
              <div className="mt-2 h-full w-full">
                <Image
                  onChange={() => setIsAutoplay(!isAutoplay)}
                  src="/Dua_icon/suffle.svg"
                  alt="Play"
                  width={35}
                  height={35}
                />
              </div>
            </>
          )}
        </div>
      </div>

      <audio
        src={audio.replace("http://www.ihadis.com/", "https://api.duaruqyah.com/")}
        ref={audioRef}
      />
    </>
  );
};

export default AudioPlayer;
