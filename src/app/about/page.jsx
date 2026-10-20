"use client";

import { Users, Award, Shield, Heart, Smile, MessageCircle, MapPin, Phone } from "lucide-react";
import { useClinic } from "@/context/ClinicContext";

export default function About() {
  const { clinic, kota, rating, ulasan, dr, wa, waBookingUrl } = useClinic();

  const teamMembers = [
    {
      name: dr,
      role: "Penanggung Jawab Medis & Spesialis",
      credentials: "drg., Sp.KG (Konservasi Gigi)",
      experience: "12+ Tahun Pengalaman",
      specialties: ["Estetika Gigi & Veneer", "Endodonti (Saluran Akar)", "Restorasi Estetik"],
      bio: `Berdedikasi memberikan perawatan gigi komprehensif dengan pendekatan minimal invasif. Memimpin tim medis ${clinic} untuk menghadirkan layanan bertaraf internasional di ${kota}.`,
      image:
        "https://images.pexels.com/photos/5207262/pexels-photo-5207262.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      name: "drg. Dimas Pratama, Sp.Ort",
      role: "Spesialis Ortodonti",
      credentials: "drg., Sp.Ort (Orthodontics)",
      experience: "10+ Tahun Pengalaman",
      specialties: [
        "Behel Sapphire & Keramik",
        "Clear Aligners Transparan",
        "Koreksi Gigitan Kompleks",
      ],
      bio: "Fokus mendalam pada penyelarasan susunan gigi dan profil wajah yang estetis, memastikan pasien mendapatkan senyum simetris dan fungsi kunyah yang prima.",
      image:
        "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      name: "drg. Nadia Anindita, Sp.KGA",
      role: "Spesialis Gigi Anak",
      credentials: "drg., Sp.KGA (Pediatric Dentistry)",
      experience: "8+ Tahun Pengalaman",
      specialties: ["Gigi Anak & Balita", "Fluoride & Sealant", "Perawatan Bebas Cemas"],
      bio: "Memiliki pendekatan yang sangat hangat dan ramah anak. Menjadikan kunjungan ke dokter gigi sebagai pengalaman yang menyenangkan tanpa rasa takut.",
      image:
        "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
  ];

  const values = [
    {
      icon: <Heart className="h-6 w-6 text-[#0071E3]" />,
      title: "Pelayanan Ramah & Empatik",
      description:
        "Kami mendengarkan setiap keluhan pasien secara mendalam dan memberikan tindakan dengan kelembutan tanpa rasa sakit.",
    },
    {
      icon: <Shield className="h-6 w-6 text-[#0071E3]" />,
      title: "Sterilisasi Standar Medis",
      description:
        "Seluruh instrumen melalui proses dekontaminasi dan autoclave suhu tinggi bersegel demi higienitas mutlak.",
    },
    {
      icon: <Users className="h-6 w-6 text-[#0071E3]" />,
      title: "Fokus Komunitas Keluarga",
      description:
        `Menjadi mitra kesehatan gigi terpercaya bagi ribuan keluarga di wilayah ${kota} dan sekitarnya.`,
    },
    {
      icon: <Award className="h-6 w-6 text-[#0071E3]" />,
      title: "Inovasi & Teknologi Terkini",
      description:
        "Terus memperbarui peralatan dan metode medis dental modern untuk diagnosa yang akurat dan hasil yang tahan lama.",
    },
  ];

  const milestones = [
    {
      year: "Pondasi",
      event: `Perintisan ${clinic}`,
      description:
        `Didirikan dengan komitmen memberikan solusi kesehatan gigi yang terjangkau, nyaman, dan berstandar medis tinggi di ${kota}.`,
    },
    {
      year: "Inovasi",
      event: "Digitalisasi Alat Diagnosa",
      description:
        "Pembaruan peralatan dengan digital X-ray intraoral dan alat pembersih karang gigi ultrasonik minim rasa sakit.",
    },
    {
      year: "Ekspansi",
      event: "Layanan Spesialis Lengkap",
      description:
        "Melengkapi unit spesialisasi ortodonti (behel), konservasi estetika gigi, hingga kedokteran gigi anak terpadu.",
    },
    {
      year: "Pencapaian",
      event: `${ulasan}+ Pasien Terverifikasi`,
      description:
        `Meraih reputasi bintang ${rating} dari ratusan ulasan pasien di Google Maps atas kepuasan dan kualitas perawatan.`,
    },
  ];

  return (
    <main className="min-h-screen bg-[#FBFBFD] text-[#1D1D1F]">
      {/* Header Section */}
      <section className="py-16 md:py-24 border-b border-black/[0.04]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-1.5 bg-white border border-black/[0.08] shadow-[0_2px_8px_rgba(0,0,0,0.04)] px-3.5 py-1.5 rounded-full text-xs font-medium text-[#1D1D1F]">
            <span>Tentang {clinic}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#1D1D1F]">
            Dedikasi Penuh untuk Senyum Sehat Anda
          </h1>
          <p className="text-lg text-[#86868B] leading-relaxed">
            Kami hadir untuk memberikan pengalaman perawatan gigi yang aman, ramah, dan bebas cemas bagi seluruh anggota keluarga di {kota}.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-white border-b border-black/[0.04]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#0071E3]">
                Filosofi Pelayanan
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1D1D1F]">
                Perawatan Berkualitas dengan Sentuhan Personal
              </h2>
              <p className="text-base text-[#86868B] leading-relaxed">
                Di {clinic}, kami percaya bahwa senyum yang sehat adalah pintu menuju kepercayaan diri dan kualitas hidup yang lebih baik. Setiap pasien memiliki kebutuhan unik, sehingga kami menyusun rencana perawatan yang disesuaikan secara transparan.
              </p>
              <p className="text-base text-[#86868B] leading-relaxed">
                Dengan mengintegrasikan ilmu kedokteran gigi mutakhir, peralatan berstandar tinggi, dan suasana klinik yang tenang, kami mengubah pandangan masyarakat bahwa periksa gigi itu menakutkan.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-black/[0.04]">
                <div className="p-4 rounded-2xl bg-[#F5F5F7]">
                  <div className="text-3xl font-bold text-[#1D1D1F]">{rating} ★</div>
                  <div className="text-xs text-[#86868B] mt-0.5">Rating Kepuasan Google</div>
                </div>
                <div className="p-4 rounded-2xl bg-[#F5F5F7]">
                  <div className="text-3xl font-bold text-[#1D1D1F]">{ulasan}+</div>
                  <div className="text-xs text-[#86868B] mt-0.5">Pasien di {kota}</div>
                </div>
              </div>
            </div>

            <div className="rounded-[32px] bg-gradient-to-br from-[#F5F5F7] to-[#E8E8ED] p-10 border border-black/[0.06] text-center space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-[#0071E3] flex items-center justify-center mx-auto text-white shadow-md">
                <Smile className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#1D1D1F]">
                Kenyamanan Pasien Prioritas Utama
              </h3>
              <p className="text-sm text-[#86868B] max-w-xs mx-auto leading-relaxed">
                Ruang tunggu sejuk, staf sigap, dan dokter yang mendampingi dengan teliti di setiap tindakan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-[#F5F5F7] border-b border-black/[0.04]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-16 max-w-xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0071E3]">
              Nilai & Prinsip
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1D1D1F]">
              Komitmen Medis yang Kami Junjung
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
                <h3 className="font-bold text-base text-[#1D1D1F]">
                  {v.title}
                </h3>
                <p className="text-xs text-[#86868B] leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Showcase */}
      <section className="py-20 bg-white border-b border-black/[0.04]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-16 max-w-xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0071E3]">
              Tim Dokter Spesialis
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1D1D1F]">
              Dokter Berlisensi & Berpengalaman
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((m, index) => (
              <div
                key={index}
                className="rounded-3xl bg-white border border-black/[0.06] p-6 shadow-apple hover:shadow-apple-hover transition-all duration-300 space-y-5 flex flex-col justify-between"
              >
                <div className="aspect-square rounded-2xl overflow-hidden bg-[#F5F5F7] border border-black/[0.04]">
                  <img
                    src={m.image}
                    alt={m.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-3">
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-[#1D1D1F]">
                      {m.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#0071E3]">{m.role}</p>
                    <p className="text-[11px] text-[#86868B]">{m.credentials} • {m.experience}</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {m.specialties.map((s, idx) => (
                      <span
                        key={idx}
                        className="rounded-full bg-[#F5F5F7] text-[#1D1D1F] text-[11px] px-2.5 py-0.5 font-medium"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-[#86868B] leading-relaxed">
                    {m.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apple Keynote CTA */}
      <section className="py-20 bg-[#161617] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-3">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Ingin Berkonsultasi dengan Tim Dokter {clinic}?
            </h2>
            <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto font-normal">
              Reservasi jadwal periksa Anda sekarang untuk mendapatkan evaluasi menyeluruh mengenai kesehatan gigi dan mulut Anda.
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
