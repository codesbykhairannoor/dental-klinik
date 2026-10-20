"use client";

import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
} from "lucide-react";
import { useClinic } from "@/context/ClinicContext";

export default function Services() {
  const { clinic, kota, wa, waBookingUrl } = useClinic();

  const serviceCategories = [
    {
      id: "umum",
      title: "Perawatan Umum",
      icon: <Stethoscope className="h-4 w-4" />,
      description: "Pemeriksaan dan tindakan pencegahan dasar untuk menjaga kebersihan rongga mulut Anda",
      services: [
        {
          name: "Scaling Gigi (Pembersihan Karang)",
          description:
            "Membersihkan tumpukan karang gigi dan plak membandel menggunakan scaler ultrasonik modern minim ngilu.",
          features: [
            "Pembersihan plak & karang gigi",
            "Polishing pemoles noda",
            "Screening kesehatan gusi",
            "Konsultasi kebersihan mulut",
          ],
          duration: "45-60 menit",
          price: "Rp 250.000 - Rp 450.000",
        },
        {
          name: "Penambalan Estetik Komposit",
          description: "Menambal gigi berlubang menggunakan bahan komposit resin warna natural persis gigi asli.",
          features: [
            "Warna sewarna gigi (shade-matching)",
            "Kekuatan kunyah tahan lama",
            "Prosedur cepat tanpa rasa sakit",
            "Garansi perawatan klinis",
          ],
          duration: "30-60 menit",
          price: "Rp 250.000 - Rp 450.000 / gigi",
        },
        {
          name: "Perawatan Saluran Akar (Endodonti)",
          description:
            "Menyelamatkan gigi berlubang dalam atau terinfeksi saraf agar tidak perlu dicabut.",
          features: [
            "Pembersihan saluran saraf",
            "Medikasi anti-bakteri",
            "Restorasi pengisian saluran akar",
            "Persiapan crown pelindung",
          ],
          duration: "60-90 menit (2 sesi)",
          price: "Rp 800.000 - Rp 1.500.000",
        },
        {
          name: "Pencabutan Gigi Standar",
          description:
            "Ekstraksi gigi yang sudah rusak parah dengan anestesi lokal lembut tanpa rasa ngilu traumatis.",
          features: [
            "Anestesi lokal modern",
            "Prosedur ekstraksi higienis",
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
      description: "Tingkatkan rasa percaya diri dengan senyum yang lebih putih, rapi, dan simetris",
      services: [
        {
          name: "Teeth Bleaching (Pemutihan Gigi)",
          description:
            "Mencerahkan warna gigi 3-8 tingkat lebih putih dalam 1 kali kunjungan tanpa merusak email.",
          features: [
            "Teknologi Blue-LED activation",
            "Formula anti-sensitivitas",
            "Hasil instan tampak cerah",
            "Aman untuk enamel gigi",
          ],
          duration: "60-75 menit",
          price: "Rp 1.500.000 - Rp 2.500.000",
        },
        {
          name: "Porcelain Veneer E-Max",
          description:
            "Lapisan porselen tipis presisi tinggi untuk mengoreksi bentuk, warna, dan celah gigi secara permanen.",
          features: [
            "Material Porselen E-Max ultra kuat",
            "Tampilan translusen sangat natural",
            "Tahan noda kopi dan rokok",
            "Didesain presisi digital",
          ],
          duration: "2 kali kunjungan",
          price: "Rp 2.500.000 - Rp 4.000.000 / gigi",
        },
        {
          name: "Direct Composite Veneer",
          description:
            "Solusi ekonomis meratakan warna dan bentuk gigi depan secara instan dalam satu kali duduk.",
          features: [
            "Hasil langsung selesai di hari yang sama",
            "Penutupan celah gigi (diastema)",
            "Minimal pengasahan gigi",
            "Perbaikan gigi patah ringan",
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
      description: "Ratakan susunan gigi yang bertumpuk, berantakan, atau memiliki celah gigitan",
      services: [
        {
          name: "Behel Metal Konvensional",
          description:
            "Pilihan terpopuler dan teruji klinis untuk meratakan gigi dengan bracket logam presisi tinggi.",
          features: [
            "Bracket stainless steel medis",
            "Pilihan warna karet bervariasi",
            "Koreksi kasus gigi bertumpuk",
            "Kontrol berkala terprogram",
          ],
          duration: "Perawatan 12-24 bulan",
          price: "Mulai Rp 4.500.000",
        },
        {
          name: "Behel Keramik Sapphire",
          description:
            "Bracket sewarna gigi yang samar dan estetik, cocok untuk profesional dan dewasa aktif.",
          features: [
            "Bracket translusen hampir tak terlihat",
            "Tahan perubahan warna noda",
            "Kekuatan setara behel metal",
            "Tampilan lebih rapi dan elegan",
          ],
          duration: "Perawatan 12-24 bulan",
          price: "Mulai Rp 7.500.000",
        },
        {
          name: "Clear Aligners Modern",
          description:
            "Perataan gigi tanpa kawat menggunakan tray plastik transparan yang dapat dilepas-pasang sendiri.",
          features: [
            "100% transparan dan fleksibel",
            "Bisa dilepas saat makan dan sikat gigi",
            "Simulasi 3D sebelum perawatan",
            "Minim rasa nyeri gesekan sariawan",
          ],
          duration: "Perawatan 6-18 bulan",
          price: "Mulai Rp 8.000.000",
        },
      ],
    },
    {
      id: "bedah",
      title: "Bedah & Implan",
      icon: <Shield className="h-4 w-4" />,
      description: "Tindakan bedah minor dan penggantian gigi permanen oleh dokter ahli",
      services: [
        {
          name: "Odontektomi (Operasi Gigi Bungsu)",
          description:
            "Pengambilan gigi bungsu yang tumbuh miring (impaksi) atau menekan saraf dan gigi sebelah.",
          features: [
            "Foto rontgen digital sebelum tindakan",
            "Anestesi lokal terukur tanpa sakit",
            "Penjahitan steril berpresisi",
            "Obat pereda nyeri pasca operasi",
          ],
          duration: "45-60 menit",
          price: "Rp 1.500.000 - Rp 3.000.000 / gigi",
        },
        {
          name: "Implan Gigi Titanium Permanen",
          description:
            "Penanaman akar tiruan titanium ke dalam tulang rahang untuk menyangga mahkota gigi baru.",
          features: [
            "Titanium biocompatible standar internasional",
            "Kekuatan kunyah setara gigi asli",
            "Tidak merusak gigi sehat di sebelahnya",
            "Hasil tahan puluhan tahun",
          ],
          duration: "Prosedur bertahap",
          price: "Mulai Rp 12.000.000",
        },
      ],
    },
    {
      id: "anak",
      title: "Gigi Anak",
      icon: <Baby className="h-4 w-4" />,
      description: "Pendekatan ramah anak untuk membangun kebiasaan gigi sehat sejak usia dini",
      services: [
        {
          name: "Pemeriksaan Ramah Anak",
          description:
            "Sesi santai memperkenalkan alat-alat dokter gigi tanpa rasa takut agar anak nyaman berkunjung.",
          features: [
            "Metode Tell-Show-Do interaktif",
            "Pemeriksaan pertumbuhan gigi susu",
            "Edukasi cara sikat gigi yang benar",
            "Hadiah reward stiker untuk si kecil",
          ],
          duration: "30 menit",
          price: "Rp 150.000 - Rp 250.000",
        },
        {
          name: "Aplikasi Topikal Fluoride",
          description:
            "Pelapisan fluoride dan penutupan lekukan gigi geraham anak untuk mencegah gigi berlubang.",
          features: [
            "Perlindungan email gigi dari asam",
            "Mencegah karies gigi anak",
            "Rasa buah yang disukai anak-anak",
            "Aplikasi cepat tanpa bor gigi",
          ],
          duration: "20-30 menit",
          price: "Rp 200.000 - Rp 400.000",
        },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-[#FBFBFD] text-[#1D1D1F]">
      {/* Header Section */}
      <section className="py-16 md:py-24 border-b border-black/[0.04]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-1.5 bg-white border border-black/[0.08] shadow-[0_2px_8px_rgba(0,0,0,0.04)] px-3.5 py-1.5 rounded-full text-xs font-medium text-[#1D1D1F]">
            <span>Katalog Perawatan</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#1D1D1F]">
            Layanan Perawatan Gigi {clinic}
          </h1>
          <p className="text-lg text-[#86868B] leading-relaxed">
            Solusi lengkap mulai dari pembersihan karang gigi hingga tindakan estetika dan bedah mulut di {kota}, transparan dengan standar sterilisasi teruji.
          </p>
        </div>
      </section>

      {/* Apple iOS Segmented Control Tabs */}
      <section className="py-16 md:py-24 bg-[#F5F5F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="umum" className="space-y-12">
            <div className="flex justify-center">
              <TabsList className="bg-[#E8E8ED]/80 backdrop-blur-md p-1.5 rounded-full flex flex-wrap justify-center gap-1 border border-black/[0.04] h-auto shadow-inner">
                {serviceCategories.map((cat) => (
                  <TabsTrigger
                    key={cat.id}
                    value={cat.id}
                    className="flex items-center gap-2 py-2 px-4 rounded-full text-xs sm:text-sm font-medium text-[#86868B] data-[state=active]:bg-white data-[state=active]:text-[#1D1D1F] data-[state=active]:shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-all"
                  >
                    {cat.icon}
                    <span>{cat.title}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {serviceCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="space-y-8">
                <div className="text-center max-w-xl mx-auto space-y-1.5">
                  <h2 className="text-2xl font-bold tracking-tight text-[#1D1D1F]">
                    {category.title}
                  </h2>
                  <p className="text-sm text-[#86868B]">
                    {category.description}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                  {category.services.map((service, index) => (
                    <div
                      key={index}
                      className="rounded-3xl bg-white border border-black/[0.06] p-7 shadow-apple hover:shadow-apple-hover transition-all duration-300 flex flex-col justify-between"
                    >
                      <div className="space-y-4">
                        <div className="flex justify-between items-start gap-4">
                          <h3 className="text-lg font-bold tracking-tight text-[#1D1D1F]">
                            {service.name}
                          </h3>
                          <span className="rounded-full bg-[#0071E3]/10 text-[#0071E3] font-semibold text-xs px-3 py-1 whitespace-nowrap">
                            {service.price}
                          </span>
                        </div>
                        <p className="text-sm text-[#86868B] leading-relaxed">
                          {service.description}
                        </p>
                        <div className="pt-3 border-t border-black/[0.04] space-y-2">
                          <p className="text-[11px] font-semibold text-[#86868B] uppercase tracking-wider">
                            Detail Tindakan:
                          </p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                            {service.features.map((feat, idx) => (
                              <div key={idx} className="flex items-center gap-1.5 text-xs text-[#1D1D1F]">
                                <CheckCircle2 className="h-3.5 w-3.5 text-[#0071E3] flex-shrink-0" />
                                <span>{feat}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-5 mt-4 border-t border-black/[0.04] text-xs text-[#86868B]">
                        <div className="flex items-center gap-1.5">
                          <Clock className="h-3.5 w-3.5 text-[#0071E3]" />
                          <span>Durasi: {service.duration}</span>
                        </div>
                        <a
                          href={`https://wa.me/${wa.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                            `Halo Admin ${clinic}, saya ingin konsultasi dan tanya jadwal untuk layanan *${service.name}*.`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button className="rounded-full bg-[#0071E3] hover:bg-[#0077ED] active:scale-95 text-white font-medium text-xs px-4 py-2 transition-all flex items-center gap-1.5 shadow-sm">
                            <MessageCircle className="h-3.5 w-3.5" />
                            <span>Reservasi Layanan</span>
                          </button>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Apple Keynote CTA */}
      <section className="py-20 bg-[#161617] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-3">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Butuh Konsultasi Mengenai Keluhan Gigi Anda?
            </h2>
            <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto font-normal">
              Hubungi tim admin {clinic} di {kota}. Kami siap membantu memberikan estimasi tindakan dan memilih waktu temu dokter yang paling nyaman untuk Anda.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a href={waBookingUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto rounded-full bg-[#0071E3] hover:bg-[#0077ED] active:scale-95 text-white font-medium px-8 py-3.5 text-sm sm:text-base shadow-[0_4px_16px_rgba(0,113,227,0.4)] transition-all flex items-center justify-center gap-2">
                <MessageCircle className="h-4 w-4" />
                <span>Chat WhatsApp Admin</span>
              </button>
            </a>
            <a href={`tel:${wa.replace(/[^0-9]/g, "")}`} className="w-full sm:w-auto">
              <button className="w-full sm:w-auto rounded-full bg-white/10 hover:bg-white/20 active:scale-95 text-white border border-white/20 font-medium px-7 py-3.5 text-sm sm:text-base backdrop-blur-md transition-all flex items-center justify-center gap-2">
                <Phone className="h-4 w-4" />
                <span>Telepon: {wa}</span>
              </button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
