"use client";

import React, { useEffect, useState } from "react";
import { MessageCircle, Check, Copy, ExternalLink, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function WaClientView({ clinic, pitchMessage, waDirectUrl }) {
  const [copied, setCopied] = useState(false);
  const [countdown, setCountdown] = useState(2);

  // Auto redirect countdown
  useEffect(() => {
    if (!waDirectUrl) return;

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          window.location.href = waDirectUrl;
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [waDirectUrl]);

  const handleCopy = () => {
    navigator.clipboard.writeText(pitchMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="min-h-screen bg-[#F5F5F7] text-[#1D1D1F] flex flex-col justify-center items-center px-4 py-12">
      <div className="max-w-xl w-full bg-white rounded-3xl p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-black/[0.06] space-y-6">
        {/* Header Icon */}
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="w-16 h-16 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-500/25 animate-bounce">
            <MessageCircle className="w-9 h-9" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-[#1D1D1F]">
              Menghubungkan ke WhatsApp
            </h1>
            <p className="text-sm text-[#86868B] mt-1">
              Target Prospek: <strong className="text-[#1D1D1F]">{clinic.name}</strong> ({clinic.kota})
            </p>
          </div>
        </div>

        {/* Status Notification */}
        <div className="bg-emerald-50 border border-emerald-200/80 rounded-2xl p-4 text-center">
          <p className="text-xs sm:text-sm text-emerald-800 font-medium">
            {countdown > 0 ? (
              <>Membuka WhatsApp otomatis dalam <strong>{countdown} detik</strong>...</>
            ) : (
              <>WhatsApp sedang dibuka... Silakan tekan tombol hijau di bawah jika tidak terbuka otomatis.</>
            )}
          </p>
        </div>

        {/* Primary Action Button */}
        <div className="space-y-3">
          <a
            href={waDirectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 px-6 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] active:scale-[0.98] text-white font-semibold text-base flex items-center justify-center gap-2.5 shadow-lg shadow-[#25D366]/30 transition-all text-center"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Buka WhatsApp Sekarang (Pesan Otomatis)</span>
            <ExternalLink className="w-4 h-4 opacity-80" />
          </a>

          <button
            onClick={handleCopy}
            className="w-full py-3 px-5 rounded-2xl bg-[#F5F5F7] hover:bg-[#E8E8ED] active:scale-[0.98] text-[#1D1D1F] font-medium text-xs sm:text-sm flex items-center justify-center gap-2 transition-all border border-black/[0.06]"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" />
                <span className="text-emerald-700 font-semibold">Draft Pesan Berhasil Disalin!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-[#86868B]" />
                <span>Salin Pesan ke Clipboard (Manual Backup)</span>
              </>
            )}
          </button>
        </div>

        {/* Message Preview Box */}
        <div className="space-y-2 pt-2 border-t border-black/[0.06]">
          <div className="flex items-center justify-between text-xs text-[#86868B]">
            <span className="font-medium">Isi Pesan Personalisasi:</span>
            <span>{clinic.wa_display}</span>
          </div>
          <div className="max-h-56 overflow-y-auto bg-[#FBFBFD] border border-black/[0.06] rounded-xl p-3.5 text-xs text-[#1D1D1F] whitespace-pre-wrap font-sans leading-relaxed">
            {pitchMessage}
          </div>
        </div>

        {/* Navigation Back */}
        <div className="text-center pt-2">
          <Link
            href={`/p/${clinic.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[#0071E3] hover:underline"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Kembali ke Website Demo {clinic.name}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
