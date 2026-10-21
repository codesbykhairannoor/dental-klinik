"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, MessageCircle, Sparkles, Shield, Calculator, ArrowRight } from "lucide-react";
import { useClinic } from "@/context/ClinicContext";

export default function TreatmentCalculator() {
  const { clinic, kota, wa } = useClinic();

  const treatments = [
    {
      id: "scaling",
      name: "Pembersihan Karang (Scaling)",
      desc: "Pembersihan plak & karang gigi ultrasonik",
      price: 350000,
      unit: "per rahang / paket",
      time: "45 Menit",
      badge: "Paling Populer",
    },
    {
      id: "bleaching",
      name: "Pemutihan Gigi (Bleaching)",
      desc: "Mencerahkan gigi 3-8 tingkat instan",
      price: 1800000,
      unit: "per sesi",
      time: "60 Menit",
      badge: "Estetika Instan",
    },
    {
      id: "tambal",
      name: "Tambal Estetik Komposit",
      desc: "Tambalan sewarna gigi asli berdaya tahan tinggi",
      price: 350000,
      unit: "per gigi",
      time: "45 Menit",
      badge: "Restoratif",
    },
    {
      id: "behel",
      name: "Pemasangan Behel Gigi",
      desc: "Kawat gigi sapphire / metal merapikan susunan",
      price: 5500000,
      unit: "paket awal",
      time: "Konsultasi + Pasang",
      badge: "Ortodonti",
    },
    {
      id: "veneer",
      name: "Porcelain Veneer E-Max",
      desc: "Lapisan porselen simetris & berkilau natural",
      price: 3000000,
      unit: "per gigi",
      time: "2 Kunjungan",
      badge: "Premium Smile",
    },
  ];

  const [selectedTreatments, setSelectedTreatments] = useState(["scaling"]);
  const [tambalQty, setTambalQty] = useState(1);
  const [veneerQty, setVeneerQty] = useState(2);

  const toggleTreatment = (id) => {
    if (selectedTreatments.includes(id)) {
      if (selectedTreatments.length > 1) {
        setSelectedTreatments(selectedTreatments.filter((t) => t !== id));
      }
    } else {
      setSelectedTreatments([...selectedTreatments, id]);
    }
  };

  const calculateTotal = () => {
    let total = 0;
    selectedTreatments.forEach((id) => {
      const item = treatments.find((t) => t.id === id);
      if (!item) return;
      if (id === "tambal") {
        total += item.price * tambalQty;
      } else if (id === "veneer") {
        total += item.price * veneerQty;
      } else {
        total += item.price;
      }
    });
    return total;
  };

  const totalFormatted = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(calculateTotal());

  const getWhatsAppMessage = () => {
    const list = selectedTreatments
      .map((id) => {
        const item = treatments.find((t) => t.id === id);
        if (id === "tambal") return `• ${item.name} (${tambalQty} gigi)`;
        if (id === "veneer") return `• ${item.name} (${veneerQty} gigi)`;
        return `• ${item.name}`;
      })
      .join("\n");

    const text = `Halo Admin ${clinic} (${kota}),\n\nSaya menggunakan simulasi kalkulator di website dan tertarik untuk konsultasi rencana perawatan berikut:\n${list}\n\nEstimasi simulasi: *${totalFormatted}*\n\nBisa dibantu info jadwal temu dokter untuk evaluasi langsung? Terima kasih!`;
    return `https://wa.me/${wa.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="rounded-[32px] sm:rounded-[40px] bg-white border border-black/[0.06] p-7 sm:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.06)] space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-black/[0.04]">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 bg-[#0071E3]/10 text-[#0071E3] px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold">
            <Calculator className="h-4 w-4" />
            <span>Transparansi Biaya & Estimasi</span>
          </div>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#1D1D1F]">
            Simulasi Rencana Perawatan Gigi
          </h3>
          <p className="text-base text-[#6E6E73] max-w-xl">
            Pilih tindakan yang Anda butuhkan untuk melihat estimasi biaya transparan dan terukur di {clinic}.
          </p>
        </div>

        <div className="text-left md:text-right">
          <p className="text-xs sm:text-sm text-[#86868B] font-semibold uppercase tracking-wider">
            Estimasi Investasi Senyum
          </p>
          <motion.div
            key={calculateTotal()}
            initial={{ scale: 0.95, opacity: 0.8 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0071E3]"
          >
            {totalFormatted}
          </motion.div>
        </div>
      </div>

      {/* Selectable Options in Apple Pill/Card Layout */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {treatments.map((t) => {
          const isSelected = selectedTreatments.includes(t.id);
          return (
            <motion.div
              key={t.id}
              whileTap={{ scale: 0.98 }}
              onClick={() => toggleTreatment(t.id)}
              className={`rounded-2xl sm:rounded-3xl p-6 border cursor-pointer transition-all flex flex-col justify-between select-none ${
                isSelected
                  ? "bg-[#0071E3]/[0.04] border-[#0071E3] shadow-[0_4px_24px_rgba(0,113,227,0.15)] ring-1 ring-[#0071E3]"
                  : "bg-[#F5F5F7] border-transparent hover:border-black/[0.08] hover:bg-[#EAEAEA]"
              }`}
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      isSelected ? "bg-[#0071E3] text-white" : "bg-black/5 text-[#86868B]"
                    }`}
                  >
                    {t.badge}
                  </span>
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors ${
                      isSelected ? "bg-[#0071E3] text-white" : "border border-black/20"
                    }`}
                  >
                    {isSelected && <Check className="h-3.5 w-3.5 stroke-[3]" />}
                  </div>
                </div>
                <h4 className="font-bold text-base sm:text-lg text-[#1D1D1F] pt-1">
                  {t.name}
                </h4>
                <p className="text-xs sm:text-sm text-[#6E6E73] leading-relaxed">
                  {t.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-black/[0.04] flex items-center justify-between text-sm">
                <span className="font-bold text-base text-[#1D1D1F]">
                  Rp {t.price.toLocaleString("id-ID")}
                </span>
                <span className="text-[#86868B] text-xs">{t.unit}</span>
              </div>

              {/* Quantity controls if applicable */}
              {isSelected && (t.id === "tambal" || t.id === "veneer") && (
                <div
                  className="mt-3.5 pt-3 border-t border-[#0071E3]/20 flex items-center justify-between text-xs sm:text-sm"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span className="text-[#6E6E73] font-medium">Jumlah Gigi:</span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        if (t.id === "tambal" && tambalQty > 1) setTambalQty(tambalQty - 1);
                        if (t.id === "veneer" && veneerQty > 1) setVeneerQty(veneerQty - 1);
                      }}
                      className="w-7 h-7 rounded-full bg-white border border-black/10 flex items-center justify-center font-bold text-sm hover:bg-black/5 shadow-xs"
                    >
                      -
                    </button>
                    <span className="font-bold text-sm sm:text-base text-[#1D1D1F] px-1">
                      {t.id === "tambal" ? tambalQty : veneerQty}
                    </span>
                    <button
                      type="button"
                      onClick={() => {
                        if (t.id === "tambal" && tambalQty < 8) setTambalQty(tambalQty + 1);
                        if (t.id === "veneer" && veneerQty < 10) setVeneerQty(veneerQty + 1);
                      }}
                      className="w-7 h-7 rounded-full bg-white border border-black/10 flex items-center justify-center font-bold text-sm hover:bg-black/5 shadow-xs"
                    >
                      +
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Action Footer */}
      <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#F5F5F7] p-6 rounded-2xl border border-black/[0.04]">
        <div className="text-xs sm:text-sm text-[#6E6E73] space-y-0.5 text-center sm:text-left">
          <p className="font-semibold text-[#1D1D1F]">
            *Estimasi biaya di atas mencakup tindakan dasar & konsultasi awal.
          </p>
          <p>Kondisi pasti akan dievaluasi oleh dokter gigi secara transparan sebelum tindakan.</p>
        </div>

        <a
          href={getWhatsAppMessage()}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto flex-shrink-0"
        >
          <button className="w-full sm:w-auto rounded-full bg-[#0071E3] hover:bg-[#0077ED] active:scale-[0.98] text-white font-semibold px-7 py-3.5 text-sm sm:text-base shadow-[0_4px_16px_rgba(0,113,227,0.3)] transition-all flex items-center justify-center gap-2">
            <MessageCircle className="h-4 w-4" />
            <span>Konsultasikan Rencana Ini via WhatsApp</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </a>
      </div>
    </div>
  );
}
