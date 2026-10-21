"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Copy, Check, ChevronUp, ChevronDown, Send, Building2 } from "lucide-react";
import { useClinic } from "@/context/ClinicContext";

export default function PitchControlBar() {
  const { clinic, kota, rating, ulasan, wa, myWa, isPitch } = useClinic();
  const [isOpen, setIsOpen] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedPitch, setCopiedPitch] = useState(false);

  // Preset klinik nyata dari listing.xlsx
  const presets = [
    {
      name: "Kamelia Dental Care",
      kota: "Jakarta Selatan",
      rating: "5.0",
      ulasan: "239",
      wa: "6281290909990",
      dr: "drg. Kamelia, Sp.KG",
      alamat: "Jl. RC. Veteran Raya No.11D, Bintaro, Pesanggrahan",
    },
    {
      name: "FDC Dental Clinic Bandung",
      kota: "Bandung",
      rating: "4.9",
      ulasan: "1420",
      wa: "628111220220",
      dr: "drg. Fajar Pratama, Sp.Ort",
      alamat: "Jl. LLRE Martadinata No.112, Riau, Bandung",
    },
    {
      name: "Audy Dental Kemang",
      kota: "Jakarta Selatan",
      rating: "4.9",
      ulasan: "890",
      wa: "6281289897788",
      dr: "drg. Reza Ramadhan, Sp.BM",
      alamat: "Jl. Bangka Raya No. 40, Kemang, Jakarta Selatan",
    },
    {
      name: "Damessa Dental Clinic",
      kota: "Jakarta Selatan",
      rating: "4.8",
      ulasan: "410",
      wa: "6281318882000",
      dr: "drg. Amanda Putri, Sp.KG",
      alamat: "Jl. Fatmawati No. 28, Cilandak, Jakarta Selatan",
    },
  ];

  const switchClinic = (preset) => {
    const params = new URLSearchParams();
    params.set("clinic", preset.name);
    params.set("kota", preset.kota);
    params.set("rating", preset.rating);
    params.set("ulasan", preset.ulasan);
    params.set("wa", preset.wa);
    params.set("dr", preset.dr);
    params.set("alamat", preset.alamat);
    params.set("mywa", myWa || "6281234567890");
    window.location.href = `/?${params.toString()}`;
  };

  const currentUrl = typeof window !== "undefined" ? window.location.href : "";

  const copyLink = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const copyPitchMessage = () => {
    const message = `Halo Dok / Tim Manajemen ${clinic},\n\nSalam kenal! Saya perhatikan ${clinic} memiliki reputasi bintang ${rating} dengan ${ulasan}+ ulasan pasien di ${kota}.\n\nKami berinisiatif membuatkan preview website profil modern berstandar Apple UI khusus untuk ${clinic}, sudah terintegrasi WhatsApp booking langsung:\n👉 ${currentUrl}\n\nJika tertarik mengaktifkan website ini ke domain resmi klinik Anda, silakan hubungi kami via tombol 'Klaim Website Ini' di atas. Terima kasih banyak Dok! 🙏`;
    navigator.clipboard.writeText(message);
    setCopiedPitch(true);
    setTimeout(() => setCopiedPitch(false), 2000);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            className="mb-3 w-[340px] sm:w-[380px] rounded-[28px] bg-[#161617]/95 backdrop-blur-2xl text-white border border-white/10 p-5 shadow-[0_25px_60px_rgba(0,0,0,0.4)] space-y-4"
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="font-bold tracking-tight">Katalog Demo Lead Klinik</span>
              </div>
              <span className="text-[11px] text-white/50">1,995 Database</span>
            </div>

            <div className="space-y-1.5">
              <p className="text-[11px] text-white/60 font-medium">Pilih Preset Lead untuk Uji Coba:</p>
              <div className="grid grid-cols-1 gap-1.5 max-h-44 overflow-y-auto pr-1">
                {presets.map((p) => {
                  const isActive = clinic === p.name;
                  return (
                    <button
                      key={p.name}
                      onClick={() => switchClinic(p)}
                      className={`text-left p-2.5 rounded-xl text-xs flex items-center justify-between transition-all ${
                        isActive
                          ? "bg-[#0071E3] text-white font-semibold"
                          : "bg-white/5 hover:bg-white/10 text-white/80"
                      }`}
                    >
                      <div className="truncate">
                        <div className="truncate">{p.name}</div>
                        <div className="text-[10px] opacity-70">
                          {p.kota} • ⭐ {p.rating} ({p.ulasan})
                        </div>
                      </div>
                      {isActive && <Check className="h-4 w-4 flex-shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="pt-2 border-t border-white/10 grid grid-cols-2 gap-2 text-xs">
              <button
                onClick={copyLink}
                className="rounded-full bg-white/10 hover:bg-white/20 active:scale-95 py-2 px-3 text-center font-medium flex items-center justify-center gap-1.5 transition-all"
              >
                {copiedLink ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                <span>{copiedLink ? "Link Tersalin!" : "Salin Link"}</span>
              </button>

              <button
                onClick={copyPitchMessage}
                className="rounded-full bg-[#0071E3] hover:bg-[#0077ED] active:scale-95 py-2 px-3 text-center font-medium flex items-center justify-center gap-1.5 transition-all text-white shadow-sm"
              >
                {copiedPitch ? <Check className="h-3.5 w-3.5 text-white" /> : <Send className="h-3.5 w-3.5" />}
                <span>{copiedPitch ? "Draft Tersalin!" : "Salin Draft WA"}</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Pill Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-full bg-[#161617]/90 backdrop-blur-2xl text-white border border-white/15 px-4 py-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.3)] flex items-center gap-2.5 text-xs font-semibold hover:border-white/30 transition-all"
      >
        <div className="w-5 h-5 rounded-full bg-[#0071E3] flex items-center justify-center text-white">
          <Sparkles className="h-3 w-3" />
        </div>
        <span>Pitch Tools</span>
        {isOpen ? <ChevronDown className="h-3.5 w-3.5 opacity-60" /> : <ChevronUp className="h-3.5 w-3.5 opacity-60" />}
      </motion.button>
    </div>
  );
}
