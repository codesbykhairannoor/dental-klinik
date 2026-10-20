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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Phone,
  Clock,
  Shield,
  Heart,
  Zap,
  Star,
  CheckCircle,
  ArrowRight,
  Smile,
  Baby,
  Stethoscope,
  Activity,
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
      icon: <Stethoscope className="h-5 w-5" />,
      description: "Pemeriksaan dan tindakan pencegahan dasar untuk menjaga kebersihan rongga mulut",
      services: [
        {
          name: "Scaling Gigi (Pembersihan Karang)",
          description:
            "Membersihkan tumpukan karang gigi dan plak membandel menggunakan scaler ultrasonik minim ngilu.",
          features: [
            "Pembersihan plak & karang gigi",
            "Polishing pemoles noda",
            "Screening kesehatan gusi",
            "Konsultasi perawatan harian",
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
      icon: <Sparkles className="h-5 w-5" />,
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
      icon: <Smile className="h-5 w-5" />,
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
          name: "Behel Keramik Transparan / Sapphire",
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
      title: "Bedah Mulut & Implan",
      icon: <Shield className="h-5 w-5" />,
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
            "Titanium biocompatible standar Swiss/Korea",
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
      title: "Gigi Anak (Pediatrik)",
      icon: <Baby className="h-5 w-5" />,
      description: "Pendekatan ramah anak untuk membangun kebiasaan gigi sehat sejak usia dini",
      services: [
        {
          name: "Pemeriksaan & Pengenalan Klinik Anak",
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
          name: "Aplikasi Topikal Fluoride & Fissure Sealant",
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
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-50 via-white to-cyan-50 py-16 md:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-4 max-w-3xl mx-auto">
            <Badge className="bg-sky-100 text-sky-700 hover:bg-sky-100 text-xs font-semibold px-3 py-1">
              Daftar Layanan Medis
            </Badge>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
              Layanan Perawatan Gigi {clinic}
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Solusi lengkap mulai dari pembersihan karang gigi hingga tindakan estetika dan bedah mulut di {kota}, transparan dengan standar sterilisasi teruji.
            </p>
          </div>
        </div>
      </section>

      {/* Services Tabs Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="umum" className="space-y-12">
            <div className="flex justify-center">
              <TabsList className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 p-1 bg-slate-100 rounded-2xl h-auto">
                {serviceCategories.map((cat) => (
                  <TabsTrigger
                    key={cat.id}
                    value={cat.id}
                    className="flex items-center space-x-2 py-3 px-4 rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-sm font-semibold text-xs sm:text-sm text-gray-700"
                  >
                    {cat.icon}
                    <span>{cat.title}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {serviceCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="space-y-8">
                <div className="text-center max-w-2xl mx-auto space-y-2">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
                    {category.title}
                  </h2>
                  <p className="text-gray-600 text-sm md:text-base">
                    {category.description}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {category.services.map((service, index) => (
                    <Card
                      key={index}
                      className="hover:shadow-lg transition-all duration-300 border-slate-200 flex flex-col justify-between"
                    >
                      <CardHeader className="space-y-3">
                        <div className="flex justify-between items-start gap-4">
                          <CardTitle className="text-xl font-bold text-gray-900">
                            {service.name}
                          </CardTitle>
                          <Badge variant="outline" className="border-sky-500 text-sky-600 bg-sky-50 font-bold text-xs whitespace-nowrap">
                            {service.price}
                          </Badge>
                        </div>
                        <CardDescription className="text-gray-600 text-sm leading-relaxed">
                          {service.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-5">
                        <div className="space-y-2 pt-2 border-t border-slate-100">
                          <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                            Keunggulan Prosedur:
                          </p>
                          <ul className="grid grid-cols-1 gap-2">
                            {service.features.map((feat, idx) => (
                              <li key={idx} className="flex items-center space-x-2 text-sm text-gray-700">
                                <CheckCircle className="h-4 w-4 text-sky-500 flex-shrink-0" />
                                <span>{feat}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-xs text-gray-500">
                          <div className="flex items-center space-x-1.5">
                            <Clock className="h-4 w-4 text-sky-500" />
                            <span>Durasi: {service.duration}</span>
                          </div>
                          <a
                            href={`https://wa.me/${wa.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                              `Halo Admin ${clinic}, saya mau tanya jadwal dan konsultasi untuk layanan *${service.name}*.`
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button size="sm" className="bg-sky-500 hover:bg-sky-600 text-white font-bold text-xs">
                              <MessageCircle className="h-3.5 w-3.5 mr-1.5" />
                              Reservasi Layanan
                            </Button>
                          </a>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-sky-600 to-cyan-600 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-3">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Butuh Konsultasi Mengenai Keluhan Gigi Anda?
            </h2>
            <p className="text-lg text-sky-100 max-w-2xl mx-auto font-normal">
              Hubungi tim admin {clinic} di {kota}. Kami siap membantu memberikan estimasi tindakan dan memilih waktu temu dokter yang paling nyaman untuk Anda.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href={waBookingUrl} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-white text-sky-600 hover:bg-slate-50 font-bold py-6 px-8 text-base shadow-xl"
              >
                <MessageCircle className="h-5 w-5 mr-2 text-sky-600" />
                Chat WhatsApp Admin
              </Button>
            </a>
            <a href={`tel:${wa.replace(/[^0-9]/g, "")}`} className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="ghost"
                className="w-full sm:w-auto border-2 border-white bg-transparent text-white hover:bg-white hover:text-sky-600 font-bold py-6 px-8 text-base shadow-md transition-all"
              >
                <Phone className="h-5 w-5 mr-2" />
                Telepon: {wa}
              </Button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
