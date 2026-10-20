"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Star,
  Clock,
  Users,
  Award,
  Shield,
  Heart,
  Smile,
  Zap,
  MapPin,
  MessageCircle,
  CheckCircle2,
  Sparkles,
  Phone,
} from "lucide-react";
import Link from "next/link";
import { useClinic } from "@/context/ClinicContext";

export default function Home() {
  const { clinic, kota, rating, ulasan, dr, wa, queryStr, waBookingUrl } = useClinic();

  const services = [
    {
      icon: <Smile className="h-8 w-8 text-sky-500" />,
      title: "Perawatan Gigi Umum & Scaling",
      description:
        "Pemeriksaan kesehatan rongga mulut menyeluruh, pembersihan karang gigi (scaling), dan penambalan gigi estetik sewarna gigi asli.",
      features: [
        "Scaling Ultrasonik Steril",
        "Penambalan Estetik Komposit",
        "Pemeriksaan Rongga Mulut",
        "Pencabutan Gigi Tanpa Sakit",
      ],
    },
    {
      icon: <Sparkles className="h-8 w-8 text-sky-500" />,
      title: "Estetika, Veneer & Bleaching",
      description:
        "Wujudkan senyum putih cerah, bersih, dan simetris dengan prosedur pemutihan gigi modern dan veneer porselen berpresisi tinggi.",
      features: [
        "Bleaching Gigi Instan",
        "Porcelain & Ceramic Veneer",
        "Composite Bonding Estetis",
        "Penataan Smile Line Ideal",
      ],
    },
    {
      icon: <Shield className="h-8 w-8 text-sky-500" />,
      title: "Orthodonti & Behel Gigi",
      description:
        "Perbaiki struktur gigitan dan susunan gigi yang bertumpuk dengan pilihan behel logam, keramik transparan, maupun clear aligner.",
      features: [
        "Behel Konvensional & Sapphire",
        "Clear Aligners Transparan",
        "Retainer Gigi Pasca Perawatan",
        "Perawatan Gigi Gingsul & Renggang",
      ],
    },
    {
      icon: <Heart className="h-8 w-8 text-sky-500" />,
      title: "Implan Gigi & Gigi Tiruan",
      description:
        "Gantikan gigi yang tanggal dengan implan gigi permanen berdaya kunyah kuat atau gigi tiruan lepasan yang nyaman dan natural.",
      features: [
        "Implan Titanium Presisi Tinggi",
        "Crown & Bridge Porselen",
        "Gigi Tiruan Fleksibel Tanpa Logam",
        "Perawatan Saluran Akar (Endodonti)",
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
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-50 via-white to-cyan-50 py-16 md:py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-sky-100 text-sky-700 hover:bg-sky-100 font-semibold text-xs py-1.5 px-3 rounded-full">
                  <MapPin className="h-3.5 w-3.5 mr-1.5 text-sky-600 inline" />
                  Klinik Dokter Gigi Terpercaya di {kota}
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
                  Senyum Sehat & Percaya Diri Bersama{" "}
                  <span className="text-sky-600 underline decoration-sky-300 underline-offset-8">
                    {clinic}
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-normal">
                  Layanan perawatan gigi dan mulut terpadu untuk Anda dan keluarga. Ditangani langsung oleh tim dokter spesialis berpengalaman dengan peralatan modern, prosedur nyaman minim rasa sakit, dan jadwal fleksibel.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={waBookingUrl} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="w-full sm:w-auto bg-sky-500 hover:bg-sky-600 shadow-lg shadow-sky-500/25 font-bold py-6 px-7 text-base">
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Reservasi Jadwal via WhatsApp
                  </Button>
                </a>
                <Link href={`/services${queryStr}`}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto border-sky-500 text-sky-600 hover:bg-sky-50 font-semibold py-6 px-7 text-base"
                  >
                    Lihat Daftar Layanan
                  </Button>
                </Link>
              </div>
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 pt-2">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-sky-500" />
                  <span>Jadwal Praktek Setiap Hari</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4 text-sky-500" />
                  <span>Sterilisasi Medis Terverifikasi</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl p-8 transform rotate-1 hover:rotate-0 transition-transform duration-500 border border-slate-100">
                <div className="bg-gradient-to-br from-sky-500 via-sky-600 to-cyan-600 rounded-2xl h-84 flex items-center justify-center text-white p-8 shadow-inner">
                  <div className="text-center space-y-5">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto border border-white/30 shadow-lg">
                      <Smile className="h-10 w-10 text-white" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                        {clinic}
                      </h3>
                      <p className="text-sky-100 text-sm font-medium">
                        Pusat Perawatan Kesehatan Gigi & Estetika {kota}
                      </p>
                    </div>
                    <div className="pt-2 border-t border-white/20">
                      <p className="text-sky-100 text-xs">Penanggung Jawab Medis:</p>
                      <strong className="text-white font-bold text-base block mt-0.5">
                        {dr}
                      </strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-14 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="text-3xl md:text-4xl font-extrabold text-sky-600">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-sky-100 text-sky-700 hover:bg-sky-100 text-xs font-semibold px-3 py-1">
              Layanan Utama
            </Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
              Solusi Lengkap Kesehatan & Estetika Gigi
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Mulai dari perawatan dasar rutin hingga tindakan rekonstruksi kompleks, kami siap memberikan kenyamanan maksimal bagi senyum Anda.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 group border-slate-200/80 bg-white"
              >
                <CardHeader className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="group-hover:scale-110 transition-transform duration-300 p-2.5 bg-sky-50 rounded-xl">
                      {service.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold text-gray-900">
                        {service.title}
                      </CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 border-t border-slate-100">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center space-x-2 text-sm text-gray-700"
                      >
                        <CheckCircle2 className="h-4 w-4 text-sky-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href={`/services${queryStr}`}>
              <Button
                size="lg"
                variant="outline"
                className="border-sky-500 text-sky-600 hover:bg-sky-50 font-semibold px-8"
              >
                Lihat Semua Daftar Layanan & Biaya
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100 text-xs font-semibold px-3 py-1">
                  Kenapa Memilih Kami
                </Badge>
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
                  Standar Pelayanan Terbaik untuk Senyum Anda
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Kami mengutamakan keselamatan, ketelitian, dan kenyamanan emosional pasien. Tak perlu lagi merasa cemas saat mengunjungi dokter gigi.
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Award className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">
                      Dokter Gigi Berlisensi & Spesialis
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">
                      Didukung oleh {dr} dan tim medis yang berdedikasi tinggi serta terdaftar resmi di KKI.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Zap className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">
                      Teknologi Medis Digital Terkini
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">
                      Menggunakan diagnosa digital dental imaging dan teknik minimal invasif untuk perawatan yang presisi dan cepat pulih.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Heart className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">
                      Pendekatan Ramah & Bebas Trauma
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">
                      Setiap tindakan dijelaskan secara transparan terlebih dahulu agar pasien merasa tenang dan tenang selama prosedur.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-emerald-50 via-teal-50 to-sky-50 rounded-3xl p-10 flex items-center justify-center border border-emerald-100 shadow-lg">
              <div className="text-center space-y-5">
                <div className="w-24 h-24 bg-gradient-to-br from-sky-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto shadow-md">
                  <Users className="h-12 w-12 text-white" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-3xl font-extrabold text-gray-900">
                    {ulasan}+ Pasien Puas di {kota}
                  </h3>
                  <p className="text-gray-600 max-w-sm mx-auto text-sm leading-relaxed">
                    Telah mempercayakan kesehatan gigi dan senyum cerah keluarga mereka bersama {clinic}.
                  </p>
                </div>
                <div className="pt-2">
                  <a href={waBookingUrl} target="_blank" rel="noopener noreferrer">
                    <Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold">
                      Jadwalkan Konsultasi Anda
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-20 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100 text-xs font-semibold px-3 py-1">
              Ulasan Pasien
            </Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
              Pengalaman Pasien di {clinic}
            </h2>
            <p className="text-gray-600 text-base max-w-xl mx-auto">
              Simak testimoni nyata dari pasien yang telah merasakan kenyamanan dan hasil perawatan kami.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-white hover:shadow-xl transition-shadow duration-300 border-slate-200"
              >
                <CardContent className="p-7 space-y-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 italic text-sm leading-relaxed">
                    &quot;{testimonial.text}&quot;
                  </p>
                  <div className="border-t border-slate-100 pt-4">
                    <div className="font-bold text-gray-900 text-base">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-sky-600 font-semibold mt-0.5">
                      {testimonial.treatment}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-sky-600 via-sky-500 to-cyan-600 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="space-y-3">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
                Siap Mewujudkan Senyum Sehat & Percaya Diri?
              </h2>
              <p className="text-lg md:text-xl text-sky-100 max-w-2xl mx-auto font-normal">
                Konsultasikan keluhan gigi Anda bersama dokter spesialis {clinic} ({kota}) hari ini. Dapatkan jadwal periksa yang fleksibel tanpa antre lama.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href={waBookingUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-white text-sky-600 hover:bg-slate-50 font-bold py-6 px-8 text-base shadow-xl"
                >
                  <MessageCircle className="h-5 w-5 mr-2 text-sky-600" />
                  Reservasi Jadwal via WhatsApp
                </Button>
              </a>
              <a href={`tel:${wa.replace(/[^0-9]/g, "")}`} className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="ghost"
                  className="w-full sm:w-auto border-2 border-white bg-transparent text-white hover:bg-white hover:text-sky-600 font-bold py-6 px-8 text-base shadow-md transition-all"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Hubungi: {wa}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
