"use client";

import { Badge } from "@/components/ui/badge";
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
} from "lucide-react";
import Link from "next/link";
import { useClinic } from "@/context/ClinicContext";

export default function Home() {
  const { clinic, kota, rating, ulasan, dr, wa, queryStr, waBookingUrl } = useClinic();

  const services = [
    {
      icon: <Smile className="h-6 w-6 text-[#0071E3]" />,
      title: "Perawatan Umum & Scaling",
      description:
        "Pemeriksaan kesehatan rongga mulut menyeluruh, pembersihan karang gigi ultrasonik, dan penambalan komposit sewarna gigi asli.",
      features: [
        "Scaling Ultrasonik Steril",
        "Penambalan Estetik Komposit",
        "Pemeriksaan Rongga Mulut",
        "Pencabutan Minim Ngilu",
      ],
    },
    {
      icon: <Sparkles className="h-6 w-6 text-[#0071E3]" />,
      title: "Estetika, Veneer & Bleaching",
      description:
        "Wujudkan senyum putih simetris dengan prosedur pemutihan gigi modern dan veneer porselen berpresisi tinggi.",
      features: [
        "Bleaching Gigi Instan",
        "Porcelain Veneer E-Max",
        "Composite Bonding Estetis",
        "Smile Line Rejuvenation",
      ],
    },
    {
      icon: <Shield className="h-6 w-6 text-[#0071E3]" />,
      title: "Orthodonti & Behel Gigi",
      description:
        "Perbaiki struktur gigitan dan susunan gigi yang berantakan dengan pilihan behel logam, keramik sapphire, maupun clear aligner.",
      features: [
        "Behel Logam & Sapphire",
        "Clear Aligners Transparan",
        "Retainer Pasca Perawatan",
        "Koreksi Gigitan Presisi",
      ],
    },
    {
      icon: <Heart className="h-6 w-6 text-[#0071E3]" />,
      title: "Implan Gigi & Restorasi",
      description:
        "Gantikan gigi yang tanggal dengan implan gigi permanen berdaya kunyah kuat atau gigi tiruan lepasan yang nyaman dan natural.",
      features: [
        "Implan Titanium Presisi",
        "Crown & Bridge Porselen",
        "Gigi Tiruan Fleksibel",
        "Perawatan Saluran Akar",
      ],
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
    <main className="min-h-screen bg-[#FBFBFD] text-[#1D1D1F]">
      {/* Apple-Style Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32 border-b border-black/[0.04]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 bg-white border border-black/[0.08] shadow-[0_2px_8px_rgba(0,0,0,0.04)] px-3.5 py-1.5 rounded-full text-xs font-medium text-[#1D1D1F]">
                  <MapPin className="h-3.5 w-3.5 text-[#0071E3]" />
                  <span>Klinik Dokter Gigi Terpercaya di {kota}</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1D1D1F] leading-[1.08]">
                  Senyum Sehat & Presisi. <br />
                  <span className="bg-gradient-to-r from-[#0071E3] to-[#00A3FF] bg-clip-text text-transparent">
                    Bersama {clinic}.
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-[#86868B] font-normal leading-relaxed max-w-xl">
                  Layanan perawatan gigi dan mulut terpadu untuk Anda dan keluarga. Ditangani langsung oleh dokter spesialis berpengalaman dengan teknologi medis modern tanpa rasa cemas.
                </p>
              </div>

              {/* Apple Pill CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <a href={waBookingUrl} target="_blank" rel="noopener noreferrer">
                  <button className="w-full sm:w-auto rounded-full bg-[#0071E3] hover:bg-[#0077ED] active:scale-[0.98] text-white font-medium px-8 py-3.5 text-sm sm:text-base shadow-[0_4px_14px_rgba(0,113,227,0.3)] transition-all flex items-center justify-center gap-2">
                    <MessageCircle className="h-4 w-4" />
                    <span>Reservasi Jadwal via WhatsApp</span>
                  </button>
                </a>
                <Link href={`/services${queryStr}`}>
                  <button className="w-full sm:w-auto rounded-full bg-white hover:bg-black/[0.03] active:scale-[0.98] text-[#1D1D1F] border border-black/[0.08] font-medium px-7 py-3.5 text-sm sm:text-base shadow-sm transition-all flex items-center justify-center gap-1.5">
                    <span>Lihat Daftar Layanan</span>
                    <ChevronRight className="h-4 w-4 text-[#86868B]" />
                  </button>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-6 pt-4 text-xs sm:text-sm text-[#86868B]">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-[#0071E3]" />
                  <span>Praktek Setiap Hari</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-[#0071E3]" />
                  <span>Sterilisasi Medis Teruji</span>
                </div>
              </div>
            </div>

            {/* Right Graphic: Apple iOS Widget Sheet */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md rounded-[32px] bg-white border border-black/[0.06] p-7 shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-transform duration-500 hover:scale-[1.01]">
                <div className="rounded-[24px] bg-gradient-to-br from-[#0071E3] to-[#00A3FF] p-8 text-white text-center space-y-6 shadow-inner relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto border border-white/30 shadow-md">
                    <Smile className="h-8 w-8 text-white" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-2xl font-bold tracking-tight text-white">
                      {clinic}
                    </h3>
                    <p className="text-white/80 text-xs font-normal">
                      Pusat Pelayanan Kesehatan Gigi Spesialis • {kota}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-white/20">
                    <p className="text-white/70 text-[11px] uppercase tracking-wider font-medium">
                      Penanggung Jawab Medis
                    </p>
                    <p className="text-white font-semibold text-sm mt-0.5">
                      {dr}
                    </p>
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3 text-center">
                  <div className="p-3 bg-[#F5F5F7] rounded-2xl">
                    <div className="text-base font-bold text-[#1D1D1F]">{rating} ★</div>
                    <div className="text-[11px] text-[#86868B]">Google Review</div>
                  </div>
                  <div className="p-3 bg-[#F5F5F7] rounded-2xl">
                    <div className="text-base font-bold text-[#1D1D1F]">{ulasan}+</div>
                    <div className="text-[11px] text-[#86868B]">Pasien Terverifikasi</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Apple Keynote Style Stats */}
      <section className="py-12 bg-white border-b border-black/[0.04]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-1">
                <div className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1D1D1F]">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm text-[#86868B] font-normal">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apple Bento Grid Services */}
      <section id="services" className="py-20 md:py-28 bg-[#F5F5F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-16 max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0071E3]">
              Layanan Utama
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1D1D1F]">
              Kesehatan & Estetika Gigi Lengkap
            </h2>
            <p className="text-base text-[#86868B]">
              Dari perawatan rutin hingga rekonstruksi kompleks, seluruh prosedur dilakukan dengan standar higienis tertinggi di {kota}.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="rounded-3xl bg-white border border-black/[0.06] p-8 shadow-apple hover:shadow-apple-hover transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#0071E3]/10 flex items-center justify-center transition-transform group-hover:scale-105">
                    {service.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold tracking-tight text-[#1D1D1F]">
                      {service.title}
                    </h3>
                    <p className="text-sm text-[#86868B] leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-black/[0.04] grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-[#1D1D1F]/90">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#0071E3] flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href={`/services${queryStr}`}>
              <button className="rounded-full bg-white hover:bg-black/[0.03] text-[#1D1D1F] border border-black/[0.08] font-medium px-7 py-3 text-sm shadow-sm transition-all inline-flex items-center gap-1.5">
                <span>Lihat Semua Daftar Layanan & Biaya</span>
                <ChevronRight className="h-4 w-4 text-[#86868B]" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us: Apple Feature Showcase */}
      <section className="py-20 md:py-28 bg-white border-b border-black/[0.04]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#0071E3]">
                  Keunggulan Medis
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1D1D1F]">
                  Standar Pelayanan Terbaik untuk Anda
                </h2>
                <p className="text-base text-[#86868B] leading-relaxed">
                  Kami mengutamakan keselamatan, ketelitian klinis, dan kenyamanan psikologis pasien. Periksa gigi kini bebas dari rasa trauma.
                </p>
              </div>

              <div className="space-y-5">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#F5F5F7] border border-black/[0.04]">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center flex-shrink-0 shadow-sm text-[#0071E3]">
                    <Shield className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1D1D1F] text-base">
                      Dokter Gigi Berlisensi Resmi KKI
                    </h3>
                    <p className="text-[#86868B] text-xs sm:text-sm mt-0.5">
                      Ditangani langsung oleh {dr} dan tim medis yang berdedikasi tinggi serta berpengalaman luas.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#F5F5F7] border border-black/[0.04]">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center flex-shrink-0 shadow-sm text-[#0071E3]">
                    <Zap className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1D1D1F] text-base">
                      Teknologi Medis Digital Presisi
                    </h3>
                    <p className="text-[#86868B] text-xs sm:text-sm mt-0.5">
                      Diagnosa digital dental imaging beresolusi tinggi dan teknik minimal invasif yang cepat pulih.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#F5F5F7] border border-black/[0.04]">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center flex-shrink-0 shadow-sm text-[#0071E3]">
                    <Heart className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1D1D1F] text-base">
                      Pendekatan Empatik Tanpa Sakit
                    </h3>
                    <p className="text-[#86868B] text-xs sm:text-sm mt-0.5">
                      Setiap tindakan dijelaskan secara transparan dengan anestesi lembut agar Anda merasa tenang.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[32px] bg-gradient-to-br from-[#F5F5F7] to-[#E8E8ED] p-10 border border-black/[0.06] text-center space-y-6">
              <div className="w-20 h-20 rounded-full bg-[#0071E3] flex items-center justify-center mx-auto text-white shadow-lg shadow-[#0071E3]/20">
                <Smile className="h-10 w-10 text-white" />
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl font-bold tracking-tight text-[#1D1D1F]">
                  {ulasan}+ Pasien di {kota}
                </h3>
                <p className="text-sm text-[#86868B] max-w-sm mx-auto leading-relaxed">
                  Telah mempercayakan perawatan kesehatan gigi dan senyum cerah keluarga mereka bersama {clinic}.
                </p>
              </div>
              <a href={waBookingUrl} target="_blank" rel="noopener noreferrer" className="inline-block">
                <button className="rounded-full bg-[#1D1D1F] hover:bg-black active:scale-95 text-white font-medium px-6 py-3 text-xs sm:text-sm transition-all shadow-md">
                  Jadwalkan Konsultasi Anda
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Apple-Style Testimonials */}
      <section className="py-20 md:py-28 bg-[#F5F5F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-16 max-w-xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0071E3]">
              Ulasan Pasien
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1D1D1F]">
              Apa Kata Pasien {clinic}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="rounded-3xl bg-white border border-black/[0.06] p-7 shadow-apple hover:shadow-apple-hover transition-all duration-300 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-sm text-[#1D1D1F]/90 leading-relaxed italic">
                    &quot;{t.text}&quot;
                  </p>
                </div>
                <div className="pt-4 border-t border-black/[0.04]">
                  <div className="font-semibold text-sm text-[#1D1D1F]">{t.name}</div>
                  <div className="text-xs text-[#0071E3] font-medium mt-0.5">{t.treatment}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apple Dark Keynote CTA Banner */}
      <section className="py-20 bg-[#161617] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-3">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              Siap Mewujudkan Senyum Sehat & Percaya Diri?
            </h2>
            <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto font-normal">
              Konsultasikan keluhan gigi Anda bersama dokter spesialis {clinic} di {kota}. Dapatkan jadwal temu fleksibel tanpa antre lama.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a href={waBookingUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto rounded-full bg-[#0071E3] hover:bg-[#0077ED] active:scale-95 text-white font-medium px-8 py-3.5 text-sm sm:text-base shadow-[0_4px_16px_rgba(0,113,227,0.4)] transition-all flex items-center justify-center gap-2">
                <MessageCircle className="h-4 w-4" />
                <span>Reservasi Jadwal via WhatsApp</span>
              </button>
            </a>
            <a href={`tel:${wa.replace(/[^0-9]/g, "")}`} className="w-full sm:w-auto">
              <button className="w-full sm:w-auto rounded-full bg-white/10 hover:bg-white/20 active:scale-95 text-white border border-white/20 font-medium px-7 py-3.5 text-sm sm:text-base backdrop-blur-md transition-all flex items-center justify-center gap-2">
                <Phone className="h-4 w-4" />
                <span>Hubungi: {wa}</span>
              </button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
