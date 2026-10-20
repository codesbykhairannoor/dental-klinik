"use client";

import React, { useState } from "react";
import { useClinic } from "@/context/ClinicContext";
import { Sparkles, X, MessageCircle, ArrowRight } from "lucide-react";

export default function VIPBanner() {
  const { clinic, kota, rating, ulasan, isPitch, waClaimUrl } = useClinic();
  const [dismissed, setDismissed] = useState(false);

  if (!isPitch || dismissed) return null;

  return (
    <div className="sticky top-0 z-[60] px-3 py-2 bg-[#161617]/90 backdrop-blur-2xl border-b border-white/10 text-white shadow-xl transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 text-xs sm:text-sm">
        <div className="flex items-center gap-2.5 min-w-0">
          <span className="inline-flex items-center gap-1.5 bg-white/10 text-amber-300 px-3 py-1 rounded-full font-semibold text-[11px] tracking-wide border border-white/10 flex-shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
            Preview Eksklusif
          </span>
          <p className="truncate text-slate-200 font-normal">
            Khusus Tim <span className="text-white font-semibold underline decoration-white/30 underline-offset-4">{clinic}</span> ({kota}) {rating && `• ⭐ ${rating} (${ulasan} ulasan Google)`}
          </p>
        </div>

        <div className="flex items-center gap-2 ml-auto sm:ml-0 flex-shrink-0">
          <a
            href={waClaimUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-[#0071E3] hover:bg-[#0077ED] active:scale-95 text-white font-medium px-4 py-1.5 rounded-full shadow-sm transition-all text-xs"
          >
            <MessageCircle className="h-3.5 w-3.5" />
            <span>Klaim Website Ini</span>
            <ArrowRight className="h-3 w-3 opacity-70" />
          </a>
          <button
            onClick={() => setDismissed(true)}
            className="p-1 text-slate-400 hover:text-white rounded-full hover:bg-white/10 transition-colors"
            title="Tutup banner"
            aria-label="Tutup"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
