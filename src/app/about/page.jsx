"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  Award,
  Shield,
  Heart,
  Smile,
  MessageCircle,
  MapPin,
  Phone,
  Sparkles,
  CheckCircle2,
  Calendar,
} from "lucide-react";
import { useClinic } from "@/context/ClinicContext";

export default function About() {
  const { clinic, kota, rating, ulasan, dr, wa, waBookingUrl } = useClinic();

  const teamMembers = [
    {
      name: dr,
      role: "Penanggung Jawab Medis & Spesialis Konservasi",
      credentials: "drg., Sp.KG (Konservasi Gigi)",
      experience: "12+ Tahun Pengalaman",
      specialties: ["Estetika Gigi & Veneer", "Perawatan Saluran Akar", "Restorasi Presisi 3D"],
      bio: `Berdedikasi memberikan perawatan komprehensif dengan pendekatan minimal invasif. Memimpin tim medis ${clinic} untuk menghadirkan layanan dental berstandar internasional di ${kota}.`,
      image: "/doctor_female_dentist.jpg",
    },
    {
      name: "drg. Dimas Pratama, Sp.Ort",
      role: "Spesialis Ortodonti & Aligner",
      credentials: "drg., Sp.Ort (Orthodontics)",
      experience: "10+ Tahun Pengalaman",
      specialties: ["Clear Aligners Transparan", "Behel Sapphire Estetik", "Koreksi Gigitan Kompleks"],
      bio: "Fokus mendalam pada penyelarasan susunan gigi dan estetika profil wajah, memastikan senyum simetris natural serta kenyamanan kunyah yang maksimal.",
      image: "/doctor_male_ortho.jpg",
    },
    {
      name: "drg. Nadia Anindita, Sp.KGA",
      role: "Spesialis Kedokteran Gigi Anak",
      credentials: "drg., Sp.KGA (Pediatric Dentistry)",
      experience: "8+ Tahun Pengalaman",
      specialties: ["Pemeriksaan Ramah Balita", "Aplikasi Fluoride & Fissure", "Perawatan Bebas Trauma"],
      bio: "Memiliki pendekatan komunikasi hangat dan bersahabat dengan anak-anak. Mengubah paradigma klinik gigi menjadi tempat bermain yang aman dan menyenangkan.",
      image: "/doctor_pediatric.jpg",
    },
  ];

  const values = [
    {
      icon: <Heart className="h-6 w-6 text-[#0071E3]" />,
      title: "Pelayanan Empatik & Lembut",
      description:
        "Kami mendengarkan setiap keluhan pasien secara mendalam dan melakukan tindakan dengan teknik lembut minim rasa ngilu.",
    },
    {
      icon: <Shield className="h-6 w-6 text-[#0071E3]" />,
      title: "Sterilisasi Medis Mutlak",
      description:
        "Seluruh instrumen melalui proses dekontaminasi dan autoclave suhu tinggi bersegel demi higienitas tanpa kompromi.",
    },
    {
      icon: <Users className="h-6 w-6 text-[#0071E3]" />,
      title: "Praktek Ramah Keluarga",
      description:
        `Menjadi mitra kesehatan gigi terpercaya bagi ribuan keluarga lintas generasi di wilayah ${kota} dan sekitarnya.`,
    },
    {
      icon: <Award className="h-6 w-6 text-[#0071E3]" />,
      title: "Teknologi Diagnosa Presisi",
      description:
        "Mengadopsi scanner intraoral 3D dan digital X-ray modern untuk evaluasi struktur gigi yang cepat, akurat, dan transparan.",
    },
  ];

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
            <span>Tentang {clinic}</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-bold tracking-tight text-[#1D1D1F] leading-[1.08]"
          >
            Dedikasi Penuh untuk Senyum Sehat Anda.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-[#6E6E73] leading-relaxed"
          >
            Kami hadir untuk memberikan standar perawatan gigi berkelas dunia yang aman, transparan, dan bebas cemas bagi seluruh anggota keluarga di {kota}.
          </motion.p>
        </div>
      </section>

      {/* Philosophy Section with Clinic Operatory Image */}
      <section className="py-20 bg-white border-b border-black/[0.04]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#0071E3]">
                Filosofi Pelayanan
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#1D1D1F] leading-tight">
                Perawatan Berkualitas dengan Sentuhan Personal.
              </h2>
              <p className="text-base sm:text-lg text-[#6E6E73] leading-relaxed">
                Di {clinic}, kami percaya bahwa senyum yang sehat adalah pintu menuju kepercayaan diri dan kualitas hidup yang lebih baik. Setiap pasien memiliki kebutuhan unik, sehingga kami menyusun rencana perawatan yang disesuaikan secara transparan.
              </p>
              <p className="text-base sm:text-lg text-[#6E6E73] leading-relaxed">
                Dengan mengintegrasikan ilmu kedokteran gigi mutakhir, peralatan berstandar tinggi, dan suasana klinik yang tenang, kami mengubah pandangan masyarakat bahwa periksa gigi itu menakutkan.
              </p>
              <div className="grid grid-cols-2 gap-5 pt-4 border-t border-black/[0.06]">
                <div className="p-5 rounded-2xl bg-[#F5F5F7] border border-black/[0.04]">
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#1D1D1F]">{rating} ★</div>
                  <div className="text-xs sm:text-sm text-[#6E6E73] mt-1 font-medium">Rating Kepuasan Google</div>
                </div>
                <div className="p-5 rounded-2xl bg-[#F5F5F7] border border-black/[0.04]">
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#1D1D1F]">{ulasan}+</div>
                  <div className="text-xs sm:text-sm text-[#6E6E73] mt-1 font-medium">Pasien Terlayani di {kota}</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="rounded-[36px] overflow-hidden border border-black/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.1)] relative">
                <img
                  src="/hero_dental_operatory.jpg"
                  alt={`Fasilitas ${clinic}`}
                  className="w-full aspect-[4/4.5] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-xl p-4 rounded-2xl border border-white/60 shadow-lg">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#0071E3]">
                    <Shield className="h-4 w-4" />
                    <span>Higienitas Standar Rumah Sakit</span>
                  </div>
                  <p className="text-xs text-[#6E6E73] mt-0.5">
                    Ruang tindakan steril berpendingin udara hepa-filter di {kota}.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-[#F5F5F7] border-b border-black/[0.04]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-16 max-w-2xl mx-auto">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#0071E3]">
              Nilai & Prinsip
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1D1D1F]">
              Komitmen Medis yang Kami Junjung.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div
                key={i}
                className="rounded-3xl bg-white border border-black/[0.06] p-7 shadow-apple hover:shadow-apple-hover transition-all duration-300 space-y-4 text-center group"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#0071E3]/10 flex items-center justify-center mx-auto transition-transform group-hover:scale-105">
                  {v.icon}
                </div>
                <h3 className="font-bold text-lg text-[#1D1D1F]">
                  {v.title}
                </h3>
                <p className="text-sm text-[#6E6E73] leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Showcase */}
      <section className="py-20 md:py-28 bg-white border-b border-black/[0.04]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-16 max-w-2xl mx-auto">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#0071E3]">
              Tim Dokter Spesialis
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1D1D1F]">
              Dokter Berlisensi & Berpengalaman.
            </h2>
            <p className="text-base sm:text-lg text-[#6E6E73]">
              Dipimpin oleh dokter gigi spesialis lulusan universitas ternama dengan sertifikasi keahlian klinis teruji.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((m, index) => (
              <div
                key={index}
                className="rounded-[32px] bg-[#F5F5F7] border border-black/[0.06] p-6 shadow-apple hover:shadow-apple-hover transition-all duration-300 space-y-5 flex flex-col justify-between"
              >
                <div className="aspect-[3/3.8] rounded-2xl overflow-hidden bg-white border border-black/[0.06] shadow-inner relative">
                  <img
                    src={m.image}
                    alt={m.name}
                    className="w-full h-full object-cover filter brightness-[0.98] hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {m.experience}
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-[#1D1D1F]">
                      {m.name}
                    </h3>
                    <p className="text-sm font-semibold text-[#0071E3]">{m.role}</p>
                    <p className="text-xs text-[#86868B] font-medium">{m.credentials}</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {m.specialties.map((s, idx) => (
                      <span
                        key={idx}
                        className="rounded-full bg-white text-[#1D1D1F] text-xs px-3 py-1 font-medium border border-black/[0.06]"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-[#6E6E73] leading-relaxed pt-1">
                    {m.bio}
                  </p>
                </div>
              </div>
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
              <span>Konsultasi Dokter Ahli {kota}</span>
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
              Ingin Berkonsultasi dengan Tim Dokter {clinic}?
            </h2>
            <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto font-normal leading-relaxed">
              Reservasi jadwal periksa Anda sekarang untuk mendapatkan evaluasi menyeluruh mengenai kesehatan gigi dan mulut Anda bersama {dr}.
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
