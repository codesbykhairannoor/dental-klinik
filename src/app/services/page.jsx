"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Clock,
  Shield,
  CheckCircle2,
  Smile,
  Baby,
  Stethoscope,
  Sparkles,
  MessageCircle,
  ArrowRight,
  Calculator,
} from "lucide-react";
import Link from "next/link";
import { useClinic } from "@/context/ClinicContext";

export default function Services() {
  const { clinic, kota, wa, queryStr, waBookingUrl } = useClinic();
  const [activeTab, setActiveTab] = useState("umum");

  const serviceCategories = [
    {
      id: "umum",
      title: "Perawatan Umum",
      icon: <Stethoscope className="h-4 w-4" />,
      description: "Pembersihan karang gigi ultrasonik, penambalan komposit, dan pemeliharaan kesehatan gusi",
      image: "/service_scaling.jpg",
      services: [
        {
          name: "Scaling Gigi (Pembersihan Karang)",
          description:
            "Membersihkan plak membandel dan karang gigi subgingiva menggunakan scaler ultrasonik modern berpendingin air minim rasa ngilu.",
          features: [
            "Pembersihan karang & stain kopi/teh",
            "Polishing pemoles email gigi",
            "Screening gusi & rongga mulut",
            "Edukasi cara sikat gigi presisi",
          ],
          duration: "45-60 menit",
          price: "Rp 250.000 - Rp 450.000",
        },
        {
          name: "Penambalan Estetik Komposit",
          description:
            "Restorasi gigi berlubang menggunakan resin komposit shade-matching yang sewarna dan menyatu sempurna dengan gigi asli Anda.",
          features: [
            "Warna sewarna gigi natural",
            "Kekuatan kunyah tahan bertahun-tahun",
            "Prosedur cepat tanpa rasa sakit",
            "Garansi perawatan klinis",
          ],
          duration: "30-60 menit",
          price: "Rp 250.000 - Rp 450.000 / gigi",
        },
        {
          name: "Perawatan Saluran Akar (Endodonti)",
          description:
            "Menyelamatkan gigi berlubang dalam atau infeksi saraf pulpa dengan pembersihan mikroskopik agar gigi asli tetap dipertahankan.",
          features: [
            "Sterilisasi saluran saraf pulpa",
            "Medikasi anti-bakteri intrakanal",
            "Restorasi pengisian gutta-percha",
            "Persiapan mahkota crown pelindung",
          ],
          duration: "60-90 menit (2 sesi)",
          price: "Rp 800.000 - Rp 1.500.000",
        },
        {
          name: "Pencabutan Gigi Ringan & Sedang",
          description:
            "Ekstraksi gigi yang sudah rusak parah dengan anestesi lokal terukur tanpa trauma rasa sakit berkepanjangan.",
          features: [
            "Anestesi lokal modern tanpa ngilu",
            "Prosedur higienis & cepat",
            "Perawatan hemostatik luka",
            "Panduan pemulihan pasca tindakan",
          ],
          duration: "30-45 menit",
          price: "Rp 200.000 - Rp 400.000",
        },
      ],
    },
    {
      id: "estetika",
      title: "Estetika & Veneer",
      icon: <Sparkles className="h-4 w-4" />,
      description: "Transformasi senyum berkilau, simetris, dan putih natural melalui teknologi pemutihan gigi dan porselen",
      image: "/service_whitening_veneer.jpg",
      services: [
        {
          name: "Teeth Bleaching (Pemutihan Gigi)",
          description:
            "Mencerahkan enamel gigi 3-8 tingkat lebih cerah dalam 1 kali kunjungan menggunakan teknologi aktivasi sinar Blue-LED tanpa merusak email.",
          features: [
            "Teknologi Blue-LED activation",
            "Formula anti-sensitivitas ngilu",
            "Hasil instan tampak berkilau",
            "Aman untuk enamel gigi",
          ],
          duration: "60-75 menit",
          price: "Rp 1.500.000 - Rp 2.500.000",
        },
        {
          name: "Porcelain Veneer E-Max",
          description:
            "Lapisan porselen tipis presisi tinggi buatan lab khusus untuk mengoreksi warna, bentuk, dan celah gigi secara permanen.",
          features: [
            "Material Porselen E-Max ultra kuat",
            "Tampilan translusen persis gigi alami",
            "Tahan noda kopi, teh, dan rokok",
            "Desain digital smile simulation",
          ],
          duration: "2 kali kunjungan",
          price: "Rp 2.500.000 - Rp 4.000.000 / gigi",
        },
        {
          name: "Direct Composite Veneer",
          description:
            "Solusi ekonomis meratakan warna dan bentuk gigi depan secara instan dalam 1 kali duduk di klinik.",
          features: [
            "Hasil langsung selesai hari itu juga",
            "Penutupan celah gigi (diastema)",
            "Minimal pengasahan struktur gigi",
            "Perbaikan gigi gompal / patah ringan",
          ],
          duration: "60-90 menit",
          price: "Rp 600.000 - Rp 1.000.000 / gigi",
        },
      ],
    },
    {
      id: "ortodonti",
      title: "Behel & Ortodonti",
      icon: <Smile className="h-4 w-4" />,
      description: "Ratakan susunan gigi bertumpuk atau renggang dengan pilihan bracket sapphire transparan atau clear aligners",
      image: "/service_aligners.jpg",
      services: [
        {
          name: "Clear Aligners Modern",
          description:
            "Perataan gigi tanpa kawat menggunakan tray plastik transparan yang dapat dilepas-pasang sendiri saat makan dan sikat gigi.",
          features: [
            "100% transparan hampir tak terlihat",
            "Bisa dilepas saat makan & sikat gigi",
            "Simulasi pergerakan 3D digital",
            "Minim sariawan tanpa kawat melukai",
          ],
          duration: "Perawatan 6-18 bulan",
          price: "Mulai Rp 8.000.000",
        },
        {
          name: "Behel Sapphire Estetik",
          description:
            "Bracket kristal sapphire sewarna gigi yang samar dan elegan, cocok untuk profesional dan dewasa aktif.",
          features: [
            "Bracket translusen anti-noda",
            "Kekuatan setara behel logam",
            "Tampilan bersih dan estetik",
            "Kontrol berkala terprogram",
          ],
          duration: "Perawatan 12-24 bulan",
          price: "Mulai Rp 7.500.000",
        },
        {
          name: "Behel Metal Konvensional",
          description:
            "Pilihan terpopuler dan teruji klinis untuk meratakan susunan gigi bertumpuk dengan efisiensi tinggi.",
          features: [
            "Bracket stainless steel medis presisi",
            "Pilihan warna karet bervariasi",
            "Koreksi kasus gigitan kompleks",
            "Paket kontrol terjangkau",
          ],
          duration: "Perawatan 12-24 bulan",
          price: "Mulai Rp 4.500.000",
        },
      ],
    },
    {
      id: "bedah",
      title: "Bedah & Implan",
      icon: <Shield className="h-4 w-4" />,
      description: "Operasi gigi bungsu (odontektomi) dan restorasi implan titanium permanen oleh dokter ahli",
      image: "/service_implant.jpg",
      services: [
        {
          name: "Implan Gigi Titanium Permanen",
          description:
            "Penanaman akar tiruan titanium biocompatible ke tulang rahang untuk menyangga mahkota gigi tiruan permanen seumur hidup.",
          features: [
            "Titanium biocompatible standar global",
            "Kekuatan kunyah persis gigi asli",
            "Tidak merusak gigi sehat di sebelahnya",
            "Tahan puluhan tahun dengan perawatan baik",
          ],
          duration: "Prosedur bertahap",
          price: "Mulai Rp 12.000.000",
        },
        {
          name: "Odontektomi (Operasi Gigi Bungsu)",
          description:
            "Pengambilan gigi bungsu miring (impaksi) yang menekan saraf atau menyebabkan peradangan gusi berulang.",
          features: [
            "Rontgen panoramik presisi sebelum operasi",
            "Anestesi lokal terukur tanpa sakit",
            "Penjahitan steril berpresisi",
            "Obat pereda nyeri pasca operasi",
          ],
          duration: "45-60 menit",
          price: "Rp 1.500.000 - Rp 3.000.000 / gigi",
        },
      ],
    },
    {
      id: "anak",
      title: "Gigi Anak",
      icon: <Baby className="h-4 w-4" />,
      description: "Pendekatan ramah anak untuk membangun kebiasaan gigi sehat sejak dini tanpa rasa takut",
      image: "/doctor_pediatric.jpg",
      services: [
        {
          name: "Pemeriksaan Ramah Balita & Anak",
          description:
            "Sesi santai memperkenalkan alat-alat dokter gigi dengan metode Tell-Show-Do interaktif agar anak nyaman berkunjung.",
          features: [
            "Metode Tell-Show-Do interaktif",
            "Pemeriksaan pertumbuhan gigi susu",
            "Edukasi cara sikat gigi yang benar",
            "Hadiah stiker apresiasi untuk si kecil",
          ],
          duration: "30 menit",
          price: "Rp 150.000 - Rp 250.000",
        },
        {
          name: "Aplikasi Topikal Fluoride & Sealant",
          description:
            "Pelapisan fluoride pelindung enamel dan penutupan ceruk gigi geraham anak untuk mencegah karies berlubang.",
          features: [
            "Perlindungan email gigi dari asam makanan",
            "Mencegah gigi berlubang sejak dini",
            "Aplikasi cepat tanpa rasa sakit & tanpa bor",
            "Rasa buah yang disukai anak-anak",
          ],
          duration: "20-30 menit",
          price: "Rp 200.000 - Rp 400.000",
        },
      ],
    },
  ];

  const currentCategory = serviceCategories.find((c) => c.id === activeTab) || serviceCategories[0];

  return (
    <main className="min-h-screen bg-[#FBFBFD] text-[#1D1D1F]">
      {/* Header Section */}
      <section className="py-16 md:py-24 border-b border-black/[0.04]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-white border border-black/[0.08] shadow-[0_2px_10px_rgba(0,0,0,0.04)] px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold text-[#1D1D1F]"
          >
            <Sparkles className="h-4 w-4 text-[#0071E3]" />
            <span>Katalog Perawatan Spesialis</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-bold tracking-tight text-[#1D1D1F] leading-[1.08]"
          >
            Layanan Perawatan Gigi di {clinic}.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-[#6E6E73] leading-relaxed"
          >
            Mulai dari pembersihan karang gigi hingga tindakan veneer dan bedah implan di {kota}, seluruh prosedur dirancang higienis, teruji klinis, dan transparan.
          </motion.p>
        </div>
      </section>

      {/* Apple iOS Segmented Control Tabs */}
      <section className="py-16 md:py-24 bg-[#F5F5F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Segmented Control Bar */}
          <div className="flex justify-center">
            <div className="bg-[#E5E5EA]/80 backdrop-blur-md p-1.5 rounded-full flex flex-wrap justify-center gap-1 border border-black/[0.04] shadow-inner">
              {serviceCategories.map((cat) => {
                const isActive = activeTab === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveTab(cat.id)}
                    className={`flex items-center gap-2 py-2.5 px-5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                      isActive
                        ? "bg-white text-[#1D1D1F] shadow-[0_2px_12px_rgba(0,0,0,0.1)] scale-100"
                        : "text-[#86868B] hover:text-[#1D1D1F]"
                    }`}
                  >
                    {cat.icon}
                    <span>{cat.title}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Category Billboard Hero */}
          <motion.div
            key={currentCategory.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="rounded-[36px] bg-white border border-black/[0.06] overflow-hidden shadow-apple p-8 sm:p-12 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center"
          >
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 bg-[#0071E3]/10 text-[#0071E3] px-3.5 py-1 rounded-full text-xs font-semibold">
                {currentCategory.icon}
                <span>{currentCategory.title}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1D1D1F]">
                {currentCategory.title}
              </h2>
              <p className="text-base sm:text-lg text-[#6E6E73] leading-relaxed">
                {currentCategory.description}. Seluruh tindakan ditangani langsung oleh dokter gigi spesialis dengan peralatan steril berstandar rumah sakit di {kota}.
              </p>
              <div className="pt-2">
                <a
                  href={waBookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#0071E3] hover:bg-[#0077ED] text-white font-semibold text-sm px-6 py-3 shadow-[0_4px_16px_rgba(0,113,227,0.35)] transition-all"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Konsultasi Tindakan Ini</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden aspect-[16/10] bg-[#F5F5F7] border border-black/[0.06] shadow-sm">
                <img
                  src={currentCategory.image}
                  alt={currentCategory.title}
                  className="w-full h-full object-cover filter brightness-[0.98] hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </motion.div>

          {/* Service Cards Grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {currentCategory.services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
                className="rounded-[32px] bg-white border border-black/[0.06] p-8 shadow-apple hover:shadow-apple-hover transition-all duration-300 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#1D1D1F]">
                      {service.name}
                    </h3>
                    <span className="self-start sm:self-auto rounded-full bg-[#0071E3]/10 text-[#0071E3] font-bold text-xs sm:text-sm px-3.5 py-1 whitespace-nowrap">
                      {service.price}
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-[#6E6E73] leading-relaxed">
                    {service.description}
                  </p>
                  <div className="pt-3 border-t border-black/[0.04] space-y-2.5">
                    <p className="text-xs font-semibold text-[#86868B] uppercase tracking-wider">
                      Cakupan Tindakan:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-[#1D1D1F]">
                          <CheckCircle2 className="h-4 w-4 text-[#0071E3] flex-shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-5 border-t border-black/[0.04] gap-3 text-xs sm:text-sm text-[#86868B]">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-[#0071E3]" />
                    <span>Estimasi: {service.duration}</span>
                  </div>
                  <a
                    href={`https://wa.me/${wa.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                      `Halo Admin ${clinic}, saya ingin tanya jadwal dan konsultasi untuk layanan *${service.name}*.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="w-full sm:w-auto rounded-full bg-[#0071E3] hover:bg-[#0077ED] active:scale-95 text-white font-semibold text-xs sm:text-sm px-5 py-2.5 transition-all flex items-center justify-center gap-2 shadow-sm">
                      <MessageCircle className="h-4 w-4" />
                      <span>Reservasi Layanan</span>
                    </button>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Apple Keynote Space Black CTA */}
      <section className="py-24 bg-[#000000] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-1.5 bg-white/10 text-white/90 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold">
              <Sparkles className="h-4 w-4 text-[#0071E3]" />
              <span>Transparansi Biaya & Konsultasi</span>
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
              Butuh Konsultasi Keluhan Gigi Anda?
            </h2>
            <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto font-normal leading-relaxed">
              Hubungi tim resepsionis {clinic} di {kota}. Kami siap membantu estimasi tindakan dan memilih waktu temu dokter yang paling tepat untuk Anda.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a href={waBookingUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto rounded-full bg-[#0071E3] hover:bg-[#0077ED] active:scale-95 text-white font-semibold px-9 py-4 text-base sm:text-lg shadow-[0_4px_24px_rgba(0,113,227,0.5)] transition-all flex items-center justify-center gap-2.5">
                <MessageCircle className="h-5 w-5" />
                <span>Chat WhatsApp Admin</span>
              </button>
            </a>
            <Link href={`/#kalkulator`} className="w-full sm:w-auto">
              <button className="w-full sm:w-auto rounded-full bg-white/10 hover:bg-white/20 active:scale-95 text-white border border-white/20 font-semibold px-8 py-4 text-base sm:text-lg backdrop-blur-md transition-all flex items-center justify-center gap-2.5">
                <Calculator className="h-5 w-5 text-[#00A3FF]" />
                <span>Simulasi Kalkulator Biaya</span>
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
