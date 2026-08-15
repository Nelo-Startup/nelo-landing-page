"use client";

import { useEffect, useRef, useState } from "react";

const CLIPS = [
  "/videos/1-mountain-runner.mp4",
  "/videos/2-bench.mp4",
  "/videos/3-cooking.mp4",
  "/videos/4-jump-rope.mp4",
  "/videos/5-running.mp4",
];

export default function VideoHero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return;
      if (i === activeIndex) {
        video.currentTime = 0;
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, [activeIndex]);

  const handleEnded = () => {
    setActiveIndex((i) => (i + 1) % CLIPS.length);
  };

  return (
    <div className="absolute inset-0 h-full w-full overflow-hidden">
      {CLIPS.map((src, i) => (
        <video
          key={src}
          ref={(el) => {
            videoRefs.current[i] = el;
          }}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out ${
            i === activeIndex ? "opacity-100" : "opacity-0"
          }`}
          src={src}
          muted
          playsInline
          autoPlay={i === 0}
          onEnded={i === activeIndex ? handleEnded : undefined}
          preload="auto"
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/60" />
    </div>
  );
}
