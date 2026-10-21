"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Star,
  Clock,
  Shield,
  Heart,
  Smile,
  Zap,
  MapPin,
  MessageCircle,
  CheckCircle2,
  Sparkles,
  Phone,
  ArrowRight,
  ChevronRight,
  Calculator,
} from "lucide-react";
import Link from "next/link";
import { useClinic } from "@/context/ClinicContext";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import TreatmentCalculator from "@/components/TreatmentCalculator";

export default function Home() {
  const { clinic, kota, rating, ulasan, dr, wa, queryStr, waBookingUrl } = useClinic();

  const promoCards = [
    {
      eyebrow: "Estetika & Kosmetik Gigi",
      title: "Porcelain Veneer & Teeth Whitening.",
      description:
        "Senyum simetris, berkilau natural, dan tahan noda kopi/teh puluhan tahun. Dirancang presisi 3D khusus untuk struktur wajah Anda.",
      actionText: "Pelajari Perawatan Veneer",
      href: `/services${queryStr}`,
      theme: "light",
      image: "/service_whitening_veneer.jpg",
      badge: "Hasil Instan 1 Kunjungan",
    },
    {
      eyebrow: "Ortodonti Modern",
      title: "Behel Sapphire & Clear Aligners.",
      description:
        "Ratakan susunan gigi tanpa rasa sakit berlebih. Pilihan bracket transparan estetik atau aligner fleksibel yang bisa dilepas pasang.",
      actionText: "Konsultasi Behel Gigi",
      href: `/services${queryStr}`,
      theme: "dark",
      image: "/service_aligners.jpg",
      badge: "Simulasi 3D Digital",
    },
    {
      eyebrow: "Pencegahan & Kesehatan Mulut",
      title: "Pembersihan Karang Gigi Ultrasonik.",
      description:
        "Bebaskan gusi dari radang, karang membandel, dan bau mulut dengan scaler mikro-vibrasi berpendingin air minim rasa ngilu.",
      actionText: "Jadwalkan Scaling Rutin",
      href: `/services${queryStr}`,
      theme: "dark",
      image: "/service_scaling.jpg",
      badge: "Disarankan Setiap 6 Bulan",
    },
    {
      eyebrow: "Bedah & Rekonstruksi Permanen",
      title: "Implan Gigi Titanium & Odontektomi.",
      description:
        "Gantikan gigi tanggal permanen dengan akar titanium berdaya kunyah kuat, dan penanganan gigi bungsu oleh dokter ahli.",
      actionText: "Konsultasi Implan Gigi",
      href: `/services${queryStr}`,
      theme: "light",
      image: "/service_implant.jpg",
      badge: "Kekuatan Setara Gigi Asli",
    },
  ];

  const testimonials = [
    {
      name: "Ibu Rahmawati S.",
      rating: 5,
      text: "Dokternya sangat sabar, ramah, dan teliti menjelaskan kondisi gigi. Anak saya yang biasanya trauma ke dokter gigi jadi nyaman banget periksa di sini. Ruangan dan alat-alatnya super bersih!",
      treatment: "Pemeriksaan Rutin & Tambal Estetik",
    },
    {
      name: "Bpk. Hendra Gunawan",
      rating: 5,
      text: "Hasil bleaching giginya natural banget dan sama sekali nggak bikin ngilu! Proses pengerjaannya cepat, tempatnya adem, staf resepsionisnya pun ramah dan profesional.",
      treatment: "Teeth Bleaching & Whitening",
    },
    {
      name: "Siti Nurhaliza, S.E.",
      rating: 5,
      text: "Pasang behel di sini sangat memuaskan. Dokter komunikatif menjelaskan setiap progress bulanan dengan detail. Sekarang senyum jadi jauh lebih percaya diri!",
      treatment: "Perawatan Orthodonti (Behel)",
    },
  ];

  const stats = [
    { number: `${rating} ★`, label: "Rating Google Maps" },
    { number: `${ulasan}+`, label: "Ulasan Pasien Nyata" },
    { number: "10+ Thn", label: "Pengalaman Klinis" },
    { number: "100%", label: "Alat Steril Standar Medis" },
  ];

  return (
    <main className="min-h-screen bg-[#FBFBFD] text-[#1D1D1F] overflow-hidden">
      {/* SECTION 1: Apple Split 2-Column Flagship Hero */}
      <section className="relative pt-10 pb-16 md:pt-16 md:pb-24 border-b border-black/[0.04]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Column: Copy & Actions */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Eyebrow Pill Badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-white border border-black/[0.08] shadow-[0_2px_12px_rgba(0,0,0,0.04)] px-4 py-2 rounded-full text-xs sm:text-sm font-semibold text-[#1D1D1F]"
              >
                <MapPin className="h-4 w-4 text-[#0071E3]" />
                <span>Praktek Dokter Gigi Terpercaya di {kota}</span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-[54px] xl:text-[62px] font-bold tracking-tight text-[#1D1D1F] leading-[1.08]"
              >
                Senyum Sehat & Presisi. <br />
                <span className="bg-gradient-to-r from-[#0071E3] via-[#0077ED] to-[#00A3FF] bg-clip-text text-transparent">
                  Dirawat di {clinic}.
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-xl text-[#6E6E73] font-normal leading-relaxed max-w-2xl"
              >
                Perawatan gigi berstandar internasional dengan peralatan modern, prosedur lembut bebas rasa cemas, dan transparansi biaya tanpa antre lama di {kota}.
              </motion.p>

              {/* Apple Dual Action Controls */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
              >
                <a href={waBookingUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto rounded-full bg-[#0071E3] hover:bg-[#0077ED] active:scale-[0.98] text-white font-semibold px-8 py-4 text-base sm:text-lg shadow-[0_4px_20px_rgba(0,113,227,0.35)] transition-all flex items-center justify-center gap-2.5">
                    <MessageCircle className="h-5 w-5" />
                    <span>Reservasi Jadwal WhatsApp</span>
                  </button>
                </a>

                <a href="#kalkulator" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto rounded-full bg-white hover:bg-black/[0.03] active:scale-[0.98] text-[#1D1D1F] border border-black/[0.12] font-semibold px-7 py-4 text-base sm:text-lg shadow-sm transition-all flex items-center justify-center gap-2.5">
                    <Calculator className="h-5 w-5 text-[#0071E3]" />
                    <span>Simulasi Biaya & Layanan</span>
                  </button>
                </a>
              </motion.div>

              {/* Trust Indicator Meta */}
              <div className="pt-3 flex flex-wrap items-center gap-6 text-sm sm:text-base text-[#6E6E73]">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-[#0071E3] flex-shrink-0" />
                  <span>Setiap Hari (09.00 - 21.00)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-[#0071E3] flex-shrink-0" />
                  <span>Steril Standar Medis</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400 flex-shrink-0" />
                  <span className="font-semibold text-[#1D1D1F]">{rating} Rating ({ulasan}+ Pasien)</span>
                </div>
              </div>
            </div>

            {/* Right Column: Apple-Grade Visual Clinical Showcase */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5 relative mt-6 lg:mt-0"
            >
              {/* Ambient Glow */}
              <div className="absolute -top-10 -right-10 w-72 h-72 bg-gradient-to-br from-[#0071E3]/20 via-[#00A3FF]/15 to-transparent rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

              {/* Main Showcase Card */}
              <div className="relative rounded-[36px] sm:rounded-[44px] overflow-hidden border border-black/[0.08] bg-white shadow-[0_24px_60px_rgba(0,0,0,0.12)]">
                <div className="aspect-[4/4.8] relative overflow-hidden bg-slate-100">
                  <img
                    src="/hero_dental_operatory.jpg"
                    alt={`Ruang Perawatan Dental ${clinic}`}
                    className="w-full h-full object-cover filter brightness-[0.98] hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Subtle Gradient Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 pointer-events-none" />

                  {/* Top-Left Frosted Badge: Medically Certified */}
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-xl border border-white/15 text-white px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-sm flex items-center gap-1.5">
                    <Shield className="h-3.5 w-3.5 text-[#00A3FF]" />
                    <span>Ruang Steril Bertekanan</span>
                  </div>

                  {/* Top-Right Floating Card: Google Rating */}
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="absolute top-4 right-4 bg-white/95 backdrop-blur-xl border border-white/60 p-3.5 rounded-2xl shadow-[0_12px_32px_rgba(0,0,0,0.15)] flex items-center gap-3"
                  >
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500 flex-shrink-0">
                      <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[#1D1D1F] flex items-center gap-1">
                        <span>{rating}</span>
                        <span className="text-xs text-[#86868B] font-normal">/ 5.0</span>
                      </div>
                      <p className="text-xs text-[#86868B] font-medium">{ulasan}+ Ulasan Google</p>
                    </div>
                  </motion.div>

                  {/* Bottom-Left Floating Card: Doctor in Charge */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-xl border border-white/60 p-4 rounded-2xl shadow-[0_16px_40px_rgba(0,0,0,0.18)] flex items-center gap-3.5"
                  >
                    <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-[#0071E3] to-[#00A3FF] flex items-center justify-center text-white flex-shrink-0 font-bold text-base shadow-sm">
                      {dr.split(" ")[1]?.[0] || "D"}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-[11px] font-semibold text-emerald-600 uppercase tracking-wider">Jadwal Praktek Aktif</span>
                      </div>
                      <h4 className="text-sm sm:text-base font-bold text-[#1D1D1F] truncate">{dr}</h4>
                      <p className="text-xs text-[#86868B] truncate">Penanggung Jawab Medis {clinic}</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Apple Stats Ribbon */}
      <section className="py-12 bg-white border-b border-black/[0.04]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-1.5">
                <div className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#1D1D1F]">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base text-[#6E6E73] font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: Interactive Before & After Smile Slider (Super GG Feature) */}
      <section className="py-20 md:py-28 bg-[#F5F5F7] border-b border-black/[0.04]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#0071E3]">
              Bukti Kualitas Klinis
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1D1D1F]">
              Transformasi Senyum Pasien.
            </h2>
            <p className="text-base sm:text-xl text-[#6E6E73] leading-relaxed">
              Lihat perubahan nyata sebelum dan sesudah tindakan pemutihan & veneer porselen di {clinic}. Geser tuas untuk membandingkan.
            </p>
          </div>

          <BeforeAfterSlider />
        </div>
      </section>

      {/* SECTION 4: Apple 2x2 Promo Bento Billboard */}
      <section className="py-20 md:py-28 bg-white border-b border-black/[0.04]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#0071E3]">
              Layanan Unggulan
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1D1D1F]">
              Standar Perawatan Komprehensif.
            </h2>
            <p className="text-base sm:text-xl text-[#6E6E73] leading-relaxed">
              Keahlian spesialis dengan teknologi mutakhir untuk kesehatan dan estetika gigi keluarga Anda di {kota}.
            </p>
          </div>

          {/* 2x2 Apple Style Billboards */}
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {promoCards.map((card, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className={`rounded-[32px] sm:rounded-[40px] p-8 sm:p-12 flex flex-col justify-between overflow-hidden relative border border-black/[0.06] shadow-apple ${
                  card.theme === "dark"
                    ? "bg-[#161617] text-white"
                    : "bg-[#F5F5F7] text-[#1D1D1F]"
                }`}
              >
                <div className="space-y-4 z-10 max-w-md">
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-xs sm:text-sm font-semibold px-3.5 py-1.5 rounded-full ${
                        card.theme === "dark"
                          ? "bg-white/10 text-white"
                          : "bg-white text-[#0071E3] border border-black/[0.06]"
                      }`}
                    >
                      {card.badge}
                    </span>
                  </div>
                  <div className="space-y-2.5">
                    <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#86868B]">
                      {card.eyebrow}
                    </p>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
                      {card.title}
                    </h3>
                    <p
                      className={`text-base sm:text-lg leading-relaxed ${
                        card.theme === "dark" ? "text-white/80" : "text-[#6E6E73]"
                      }`}
                    >
                      {card.description}
                    </p>
                  </div>

                  <div className="pt-2">
                    <Link
                      href={card.href}
                      className={`inline-flex items-center gap-1.5 text-base font-semibold hover:underline underline-offset-4 ${
                        card.theme === "dark" ? "text-[#0077ED]" : "text-[#0071E3]"
                      }`}
                    >
                      <span>{card.actionText}</span>
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>

                {/* Subtle Image Vignette */}
                <div className="mt-8 rounded-2xl overflow-hidden aspect-[16/9] border border-black/10 shadow-sm">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover filter brightness-95 hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: Interactive Treatment & Budget Estimator (The Apple Configurator) */}
      <section id="kalkulator" className="py-20 md:py-28 bg-[#F5F5F7] border-b border-black/[0.04]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <TreatmentCalculator />
        </div>
      </section>

      {/* SECTION 6: Apple Testimonial Cards */}
      <section className="py-20 md:py-28 bg-white border-b border-black/[0.04]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#0071E3]">
              Pengalaman Pasien
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1D1D1F]">
              Apa Kata Pasien {clinic}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="rounded-3xl bg-[#F5F5F7] border border-black/[0.04] p-8 space-y-5 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-base sm:text-lg text-[#1D1D1F] leading-relaxed italic">
                    &quot;{t.text}&quot;
                  </p>
                </div>
                <div className="pt-4 border-t border-black/[0.04]">
                  <div className="font-bold text-base text-[#1D1D1F]">{t.name}</div>
                  <div className="text-sm text-[#0071E3] font-medium mt-0.5">{t.treatment}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: Apple Space Black Keynote CTA */}
      <section className="py-24 bg-[#000000] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-1.5 bg-white/10 text-white/90 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold">
              <Sparkles className="h-4 w-4 text-[#0071E3]" />
              <span>Layanan Spesialis Terpercaya {kota}</span>
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
              Siap Mewujudkan Senyum Sehat & Percaya Diri?
            </h2>
            <p className="text-lg sm:text-2xl text-white/70 max-w-2xl mx-auto font-normal leading-relaxed">
              Konsultasikan keluhan gigi Anda bersama dokter penanggung jawab medis {clinic} ({dr}) hari ini. Dapatkan jadwal periksa yang fleksibel tanpa antre lama.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a href={waBookingUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto rounded-full bg-[#0071E3] hover:bg-[#0077ED] active:scale-95 text-white font-semibold px-9 py-4 text-base sm:text-lg shadow-[0_4px_24px_rgba(0,113,227,0.5)] transition-all flex items-center justify-center gap-2.5">
                <MessageCircle className="h-5 w-5" />
                <span>Reservasi Jadwal via WhatsApp</span>
              </button>
            </a>
            <a href={`tel:${wa.replace(/[^0-9]/g, "")}`} className="w-full sm:w-auto">
              <button className="w-full sm:w-auto rounded-full bg-white/10 hover:bg-white/20 active:scale-95 text-white border border-white/20 font-semibold px-8 py-4 text-base sm:text-lg backdrop-blur-md transition-all flex items-center justify-center gap-2.5">
                <Phone className="h-5 w-5" />
                <span>Hubungi: {wa}</span>
              </button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
