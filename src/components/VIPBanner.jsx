"use client";

import React, { useState } from "react";
import { useClinic } from "@/context/ClinicContext";
import { Sparkles, X, MessageCircle } from "lucide-react";

export default function VIPBanner() {
  const { clinic, kota, rating, ulasan, isPitch, waClaimUrl } = useClinic();
  const [dismissed, setDismissed] = useState(false);

  if (!isPitch || dismissed) return null;

  return (
    <div className="bg-gradient-to-r from-slate-900 via-sky-950 to-blue-900 text-white text-xs sm:text-sm py-2.5 px-4 sticky top-0 z-[60] border-b border-sky-500/30 shadow-xl backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 min-w-0">
          <span className="inline-flex items-center gap-1.5 bg-amber-400/20 text-amber-300 px-2.5 py-0.5 rounded-full font-bold text-[11px] uppercase tracking-wider border border-amber-400/30 flex-shrink-0">
            <Sparkles className="h-3 w-3" /> Konsep Eksklusif
          </span>
          <p className="truncate text-slate-100">
            Halo Tim <strong className="text-white font-extrabold underline decoration-amber-400 decoration-2">{clinic}</strong>! Kami siapkan preview website modern ini untuk klinik Anda di <strong className="text-sky-300 font-semibold">{kota}</strong> {rating && `(⭐ ${rating} dari ${ulasan} ulasan)`}.
          </p>
        </div>

        <div className="flex items-center gap-2 ml-auto sm:ml-0 flex-shrink-0">
          <a
            href={waClaimUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-3.5 py-1.5 rounded-lg shadow-md transition-all hover:scale-105 text-xs"
          >
            <MessageCircle className="h-3.5 w-3.5" />
            <span>Klaim Website Ini</span>
          </a>
          <button
            onClick={() => setDismissed(true)}
            className="p-1 text-slate-400 hover:text-white rounded hover:bg-white/10 transition-colors"
            title="Tutup banner"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
