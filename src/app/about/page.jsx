"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Award, Shield, Heart, Smile, MessageCircle, MapPin } from "lucide-react";
import { useClinic } from "@/context/ClinicContext";

export default function About() {
  const { clinic, kota, rating, ulasan, dr, wa, waBookingUrl } = useClinic();

  const teamMembers = [
    {
      name: dr,
      role: "Penanggung Jawab Medis & Dokter Spesialis",
      credentials: "drg., Sp.KG (Konservasi Gigi)",
      experience: "12+ Tahun Pengalaman",
      specialties: ["Estetika Gigi & Veneer", "Endodonti (Saluran Akar)", "Tambal Estetik"],
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
      icon: <Heart className="h-8 w-8 text-rose-500" />,
      title: "Pelayanan Ramah & Empatik",
      description:
        "Kami mendengarkan setiap keluhan pasien secara mendalam dan memberikan tindakan dengan kelembutan tanpa rasa sakit.",
    },
    {
      icon: <Shield className="h-8 w-8 text-sky-500" />,
      title: "Sterilisasi Standar Medis",
      description:
        "Seluruh instrumen melalui proses dekontaminasi dan autoclave suhu tinggi bersegel demi keamanan dan higienitas mutlak.",
    },
    {
      icon: <Users className="h-8 w-8 text-emerald-500" />,
      title: "Fokus Komunitas Keluarga",
      description:
        `Menjadi mitra kesehatan gigi terpercaya bagi ribuan keluarga di wilayah ${kota} dan sekitarnya.`,
    },
    {
      icon: <Award className="h-8 w-8 text-amber-500" />,
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
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-50 via-white to-cyan-50 py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6 max-w-3xl mx-auto">
            <Badge className="bg-sky-100 text-sky-700 hover:bg-sky-100 text-xs font-semibold px-3 py-1">
              Tentang {clinic}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
              Dedikasi Penuh untuk Kesehatan Senyum Anda
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Kami hadir untuk memberikan pengalaman perawatan gigi yang aman, ramah, dan bebas cemas bagi seluruh anggota keluarga di {kota}.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-sky-100 text-sky-700 hover:bg-sky-100 text-xs font-semibold px-3 py-1">
                  Filosofi Klinik
                </Badge>
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
                  Perawatan Berkualitas dengan Sentuhan Personal
                </h2>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  Di {clinic}, kami percaya bahwa senyum yang sehat adalah pintu menuju kepercayaan diri dan kualitas hidup yang lebih baik. Setiap pasien memiliki kebutuhan unik, sehingga kami menyusun rencana perawatan yang disesuaikan secara transparan.
                </p>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  Dengan mengintegrasikan ilmu kedokteran gigi mutakhir, peralatan berstandar tinggi, dan suasana klinik yang tenang, kami mengubah pandangan masyarakat bahwa periksa gigi itu menakutkan.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6 pt-4 border-t border-slate-100">
                <div className="space-y-1">
                  <div className="text-3xl md:text-4xl font-extrabold text-sky-600">{rating} ★</div>
                  <div className="text-gray-600 text-sm font-medium">Rating Kepuasan Pasien</div>
                </div>
                <div className="space-y-1">
                  <div className="text-3xl md:text-4xl font-extrabold text-sky-600">{ulasan}+</div>
                  <div className="text-gray-600 text-sm font-medium">Pasien Terlayani di {kota}</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-sky-100 via-cyan-50 to-emerald-50 rounded-3xl p-10 flex items-center justify-center border border-sky-100 shadow-xl">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-sky-500 rounded-2xl flex items-center justify-center mx-auto shadow-md">
                  <Smile className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Kenyamanan Pasien Prioritas Utama
                </h3>
                <p className="text-gray-600 text-sm max-w-xs mx-auto leading-relaxed">
                  Ruang tunggu yang sejuk, staf yang sigap, dan dokter yang mendampingi dengan teliti di setiap tindakan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="bg-gray-50 py-20 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100 text-xs font-semibold px-3 py-1">
              Nilai & Komitmen Kami
            </Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
              Prinsip Pelayanan yang Kami Junjung
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Empat pilar utama yang mendasari setiap prosedur dan interaksi medis di {clinic}.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300 group border-slate-200 bg-white"
              >
                <CardContent className="p-7 space-y-4">
                  <div className="group-hover:scale-110 transition-transform duration-300 flex justify-center">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 text-xs font-semibold px-3 py-1">
              Tim Medis
            </Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
              Dokter Gigi Berpengalaman & Spesialis
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Ditangani langsung oleh dokter berizin resmi dengan keahlian spesifik di bidang konservasi, ortodonti, dan perawatan anak.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-shadow duration-300 border-slate-200 overflow-hidden"
              >
                <CardContent className="p-6 space-y-6">
                  <div className="aspect-square bg-slate-100 rounded-2xl overflow-hidden shadow-inner">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-4">
                    <div className="text-center space-y-1">
                      <h3 className="text-xl font-bold text-gray-900">
                        {member.name}
                      </h3>
                      <p className="text-sky-600 font-semibold text-sm">{member.role}</p>
                      <p className="text-xs text-gray-500">
                        {member.credentials} • {member.experience}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-1.5 justify-center">
                      {member.specialties.map((specialty, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="text-xs font-normal bg-sky-50 text-sky-700"
                        >
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                    <p className="text-xs md:text-sm text-gray-600 text-center leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-gray-50 py-20 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100 text-xs font-semibold px-3 py-1">
              Perjalanan Kami
            </Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
              Jejak Langkah & Standar Kualitas
            </h2>
          </div>
          <div className="space-y-6 max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-sky-500 rounded-2xl flex items-center justify-center shadow-md">
                    <span className="text-white font-bold text-xs uppercase text-center px-1">
                      {milestone.year}
                    </span>
                  </div>
                </div>
                <div className="flex-1 space-y-1">
                  <h3 className="text-lg font-bold text-gray-900">
                    {milestone.event}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-sky-600 to-cyan-600 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-3">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Ingin Berkonsultasi dengan Tim Dokter {clinic}?
            </h2>
            <p className="text-lg text-sky-100 max-w-2xl mx-auto font-normal">
              Reservasi jadwal periksa Anda sekarang untuk mendapatkan evaluasi menyeluruh mengenai kesehatan gigi dan mulut Anda.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href={waBookingUrl} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-white text-sky-600 hover:bg-slate-50 font-bold py-6 px-8 text-base shadow-xl"
              >
                <MessageCircle className="h-5 w-5 mr-2 text-sky-600" />
                Reservasi Jadwal via WhatsApp
              </Button>
            </a>
            <a href={`tel:${wa.replace(/[^0-9]/g, "")}`}>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 font-bold py-6 px-8 text-base"
              >
                Hubungi: {wa}
              </Button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
