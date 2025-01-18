"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const AudioPlayer = ({ audio, handlePlaying }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPlayer, setShowPlayer] = useState(false);
  const [isLooping, setIsLooping] = useState(false); // Controls the loop functionality
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  const handlePlayPause = () => {
    if (!showPlayer) setShowPlayer(true); // Show the player on first play

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
    handlePlaying && handlePlaying(!isPlaying); // Notify parent if needed
  };

  const handleToggleLoop = () => {
    setIsLooping((prevState) => !prevState); // Toggle looping
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime || 0);
  };

  const handleLoadedData = () => {
    setDuration(audioRef.current.duration || 0);
  };

  const handleAudioEnd = () => {
    if (isLooping) {
      audioRef.current.currentTime = 0; // Reset to start if looping is enabled
      audioRef.current.play();
    } else {
      setIsPlaying(false); // Stop playing if looping is disabled
    }
  };

  const handleProgressChange = (event) => {
    const seekTime = (event.target.value / 100) * duration;
    audioRef.current.currentTime = seekTime;
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Event listeners
    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadeddata", handleLoadedData);
    audio.addEventListener("ended", handleAudioEnd);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("loadeddata", handleLoadedData);
      audio.removeEventListener("ended", handleAudioEnd);
    };
  }, [isLooping]);

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
      <div className="md:p-4 rounded-lg">
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

              {/* Loop Toggle */}
              <div
                className="mt-2 h-full w-full cursor-pointer"
                onClick={handleToggleLoop} // Handle loop toggle
              >
                <Image
                  src="/Dua_icon/suffle.svg"
                  className={`${!isLooping && "opacity-60"}`}
                  alt="Loop Toggle"
                  width={35}
                  height={35}
                />
              </div>
            </>
          )}
        </div>
      </div>

      {/* Audio Tag */}
      <audio
        src={audio.replace("http://www.ihadis.com/", "https://api.duaruqyah.com/")}
        ref={audioRef}
      />
    </>
  );
};

export default AudioPlayer;
