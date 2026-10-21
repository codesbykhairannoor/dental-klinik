"use client";

import React, { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function BeforeAfterSlider({
  beforeImage = "/teeth_smile_before.jpg",
  afterImage = "/teeth_smile_after.jpg",
  beforeLabel = "Sebelum Perawatan",
  afterLabel = "Hasil di Klinik (Veneer & Whitening)",
  className = "",
}) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <div className={`space-y-4 ${className}`}>
      <div
        ref={containerRef}
        className="relative select-none overflow-hidden rounded-[28px] sm:rounded-[36px] w-full aspect-[4/3] sm:aspect-[16/10] bg-[#161617] border border-black/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.1)] cursor-ew-resize"
        onMouseMove={handleMouseMove}
        onMouseDown={(e) => {
          setIsDragging(true);
          handleMove(e.clientX);
        }}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onTouchStart={(e) => {
          setIsDragging(true);
          handleMove(e.touches[0].clientX);
        }}
        onTouchMove={handleTouchMove}
        onTouchEnd={() => setIsDragging(false)}
      >
        {/* Layer After (Background Layer) */}
        <img
          src={afterImage}
          alt={afterLabel}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />
        <div className="absolute top-4 right-4 z-10 bg-white/80 backdrop-blur-xl border border-black/[0.08] text-[#1D1D1F] text-xs font-semibold px-3.5 py-1.5 rounded-full shadow-sm flex items-center gap-1.5">
          <Sparkles className="h-3.5 w-3.5 text-[#0071E3]" />
          <span>{afterLabel}</span>
        </div>

        {/* Layer Before (Clipped Foreground Layer) */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{
            clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
          }}
        >
          <img
            src={beforeImage}
            alt={beforeLabel}
            className="absolute inset-0 w-full h-full object-cover pointer-events-none filter brightness-95"
          />
          <div className="absolute top-4 left-4 z-10 bg-black/60 backdrop-blur-xl border border-white/10 text-white text-xs font-medium px-3.5 py-1.5 rounded-full shadow-sm">
            <span>{beforeLabel}</span>
          </div>
        </div>

        {/* Draggable Divider Line & Apple Glass Handle */}
        <div
          className="absolute top-0 bottom-0 z-20 w-0.5 bg-white shadow-[0_0_12px_rgba(0,0,0,0.6)] cursor-ew-resize"
          style={{ left: `${sliderPosition}%` }}
        >
          <motion.div
            className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/95 backdrop-blur-2xl shadow-[0_4px_20px_rgba(0,0,0,0.25)] border border-black/[0.08] flex items-center justify-center text-[#1D1D1F] cursor-ew-resize"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              className="w-5 h-5 text-[#1D1D1F]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l-4 3 4 3m8-6l4 3-4 3" />
            </svg>
          </motion.div>
        </div>
      </div>

      <div className="flex items-center justify-between text-xs text-[#86868B] px-2 font-medium">
        <span>← Geser ke kiri untuk melihat hasil estetik</span>
        <span>Geser ke kanan untuk melihat kondisi awal →</span>
      </div>
    </div>
  );
}
