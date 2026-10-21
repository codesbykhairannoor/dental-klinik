"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Phone,
  MapPin,
  Clock,
  Calendar,
  MessageCircle,
  HelpCircle,
  ArrowRight,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import { useClinic } from "@/context/ClinicContext";

export default function Contact() {
  const { clinic, kota, alamat, wa, waBookingUrl } = useClinic();

  const [formData, setFormData] = useState({
    nama: "",
    noHp: "",
    layanan: "Pembersihan Karang Gigi (Scaling)",
    tanggal: "",
    keluhan: "",
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const cleanNumber = wa.replace(/[^0-9]/g, "");
    const textMsg = `Halo Admin ${clinic},\n\nSaya ingin reservasi jadwal periksa gigi:\n• Nama: ${formData.nama || "-"}\n• No. WhatsApp: ${formData.noHp || "-"}\n• Layanan: ${formData.layanan}\n• Rencana Tanggal: ${formData.tanggal || "Segera"}\n• Keluhan: ${formData.keluhan || "Konsultasi umum"}\n\nMohon info ketersediaan slot dokter. Terima kasih!`;
    const targetUrl = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(textMsg)}`;
    window.open(targetUrl, "_blank");
  };

  const officeHours = [
    { day: "Senin - Jumat", hours: "09.00 - 21.00 WIB" },
    { day: "Sabtu", hours: "09.00 - 18.00 WIB" },
    { day: "Minggu / Libur", hours: "10.00 - 16.00 WIB (Dengan Janji)" },
  ];

  const contactMethods = [
    {
      icon: <MessageCircle className="h-6 w-6 text-[#0071E3]" />,
      title: "Chat WhatsApp Resmi",
      value: wa,
      description: "Respon cepat untuk tanya jadwal dan estimasi biaya tindakan",
      action: "Chat WhatsApp",
      url: waBookingUrl,
    },
    {
      icon: <Phone className="h-6 w-6 text-[#0071E3]" />,
      title: "Panggilan Telepon",
      value: wa,
      description: "Hubungi resepsionis pada jam operasional klinik",
      action: "Panggil Sekarang",
      url: `tel:${wa.replace(/[^0-9]/g, "")}`,
    },
    {
      icon: <MapPin className="h-6 w-6 text-[#0071E3]" />,
      title: "Lokasi Praktek",
      value: alamat,
      description: `Klinik dental modern di area strategis ${kota}`,
      action: "Buka Google Maps",
      url: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${clinic} ${alamat} ${kota}`)}`,
    },
  ];

  const faqs = [
    {
      q: "Apakah harus membuat janji temu terlebih dahulu sebelum datang?",
      a: "Sangat disarankan untuk reservasi jadwal via WhatsApp agar Anda mendapatkan kepastian jam temu dokter tanpa perlu antre lama di ruang tunggu.",
    },
    {
      q: "Apakah prosedur pembersihan karang gigi (scaling) terasa ngilu?",
      a: "Tidak. Kami menggunakan scaler ultrasonik berteknologi getaran mikro berpendingin air steril, sehingga proses pembersihan terasa nyaman dan minim rasa ngilu.",
    },
    {
      q: "Metode pembayaran apa saja yang diterima?",
      a: "Kami menerima pembayaran tunai, transfer bank, QRIS, serta kartu debit/kredit. Kami juga menyediakan kuitansi medis resmi untuk klaim reimbursement asuransi.",
    },
    {
      q: "Berapa lama waktu yang dibutuhkan untuk pemasangan behel atau veneer?",
      a: "Pemasangan behel awal memakan waktu sekitar 60 menit setelah rontgen. Untuk porcelain veneer membutuhkan 2 kunjungan, sedangkan composite veneer dapat selesai dalam 1 hari.",
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
            <span>Kontak & Lokasi Praktek</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-bold tracking-tight text-[#1D1D1F] leading-[1.08]"
          >
            Hubungi {clinic}.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-[#6E6E73] leading-relaxed"
          >
            Tim resepsionis kami siap melayani konsultasi dan reservasi jadwal temu dokter di {kota}. Silakan gunakan kontak langsung atau formulir di bawah ini.
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-24 bg-[#F5F5F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10">
            {/* Left Info Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <div
                    key={index}
                    className="rounded-[28px] bg-white border border-black/[0.06] p-7 shadow-apple hover:shadow-apple-hover transition-all duration-300 flex items-start gap-4"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-[#0071E3]/10 flex items-center justify-center flex-shrink-0 text-[#0071E3]">
                      {method.icon}
                    </div>
                    <div className="space-y-1.5 flex-1 min-w-0">
                      <div className="font-bold text-[#1D1D1F] text-base">
                        {method.title}
                      </div>
                      <div className="text-sm font-bold text-[#0071E3] break-words">
                        {method.value}
                      </div>
                      <div className="text-xs sm:text-sm text-[#6E6E73] leading-relaxed">
                        {method.description}
                      </div>
                      <div className="pt-2">
                        <a
                          href={method.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#0071E3] hover:text-[#0077ED]"
                        >
                          <span>{method.action}</span>
                          <ArrowRight className="h-3.5 w-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Hours Card */}
              <div className="rounded-[28px] bg-white border border-black/[0.06] p-7 shadow-apple space-y-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-[#0071E3]/10 flex items-center justify-center text-[#0071E3]">
                    <Clock className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold text-base text-[#1D1D1F]">
                    Jadwal Operasional Klinik
                  </h3>
                </div>
                <div className="space-y-2.5 pt-2 border-t border-black/[0.04]">
                  {officeHours.map((schedule, idx) => (
                    <div key={idx} className="flex justify-between items-center text-xs sm:text-sm py-2 border-b border-black/[0.03] last:border-b-0">
                      <span className="font-semibold text-[#1D1D1F]">{schedule.day}</span>
                      <span className="text-[#6E6E73] font-medium">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Booking Form (Apple iOS Settings Card Style) */}
            <div className="lg:col-span-7">
              <div className="rounded-[36px] bg-white border border-black/[0.06] p-8 sm:p-12 shadow-apple space-y-8">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#0071E3]">
                    <Calendar className="h-4 w-4" />
                    <span>Reservasi Langsung Tanpa Antre</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1D1D1F]">
                    Formulir Jadwal Periksa Gigi
                  </h2>
                  <p className="text-sm sm:text-base text-[#6E6E73]">
                    Lengkapi data singkat di bawah ini. Format pesan akan otomatis terisi dan siap dikirimkan ke WhatsApp resmi {clinic}.
                  </p>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="nama" className="text-xs sm:text-sm font-semibold text-[#1D1D1F]">
                        Nama Lengkap Pasien *
                      </Label>
                      <Input
                        id="nama"
                        placeholder="Contoh: Budi Santoso"
                        required
                        className="rounded-2xl bg-[#F5F5F7] border border-black/[0.06] focus:bg-white text-sm sm:text-base py-3 h-auto"
                        value={formData.nama}
                        onChange={(e) => handleInputChange("nama", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="noHp" className="text-xs sm:text-sm font-semibold text-[#1D1D1F]">
                        Nomor WhatsApp Aktif *
                      </Label>
                      <Input
                        id="noHp"
                        placeholder="Contoh: 081234567890"
                        required
                        className="rounded-2xl bg-[#F5F5F7] border border-black/[0.06] focus:bg-white text-sm sm:text-base py-3 h-auto"
                        value={formData.noHp}
                        onChange={(e) => handleInputChange("noHp", e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="layanan" className="text-xs sm:text-sm font-semibold text-[#1D1D1F]">
                        Pilihan Perawatan *
                      </Label>
                      <Select
                        value={formData.layanan}
                        onValueChange={(val) => handleInputChange("layanan", val)}
                      >
                        <SelectTrigger id="layanan" className="rounded-2xl bg-[#F5F5F7] border border-black/[0.06] text-sm sm:text-base py-3 h-auto">
                          <SelectValue placeholder="Pilih Jenis Perawatan" />
                        </SelectTrigger>
                        <SelectContent className="rounded-2xl shadow-2xl">
                          <SelectItem value="Pembersihan Karang Gigi (Scaling)">
                            Pembersihan Karang Gigi (Scaling)
                          </SelectItem>
                          <SelectItem value="Tambal Gigi Estetik Komposit">
                            Tambal Gigi Estetik Komposit
                          </SelectItem>
                          <SelectItem value="Teeth Whitening / Bleaching">
                            Teeth Whitening / Bleaching
                          </SelectItem>
                          <SelectItem value="Behel / Ortodonti">
                            Konsultasi Pasang Behel Gigi
                          </SelectItem>
                          <SelectItem value="Implan Gigi / Gigi Tiruan">
                            Implan Gigi / Gigi Tiruan
                          </SelectItem>
                          <SelectItem value="Pemeriksaan Gigi Anak">
                            Pemeriksaan Gigi Anak
                          </SelectItem>
                          <SelectItem value="Konsultasi Keluhan Lainnya">
                            Konsultasi Keluhan Lainnya
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="tanggal" className="text-xs sm:text-sm font-semibold text-[#1D1D1F]">
                        Rencana Tanggal Kunjungan
                      </Label>
                      <Input
                        id="tanggal"
                        type="date"
                        className="rounded-2xl bg-[#F5F5F7] border border-black/[0.06] text-sm sm:text-base py-3 h-auto"
                        value={formData.tanggal}
                        onChange={(e) => handleInputChange("tanggal", e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="keluhan" className="text-xs sm:text-sm font-semibold text-[#1D1D1F]">
                      Keluhan atau Keterangan Tambahan (Opsional)
                    </Label>
                    <Textarea
                      id="keluhan"
                      rows={3}
                      placeholder="Contoh: Gigi belakang sering ngilu saat makan manis atau minum dingin..."
                      className="rounded-2xl bg-[#F5F5F7] border border-black/[0.06] text-sm sm:text-base p-3.5"
                      value={formData.keluhan}
                      onChange={(e) => handleInputChange("keluhan", e.target.value)}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-full bg-[#0071E3] hover:bg-[#0077ED] active:scale-[0.99] text-white font-semibold py-4 text-base sm:text-lg shadow-[0_4px_20px_rgba(0,113,227,0.35)] transition-all flex items-center justify-center gap-2.5"
                  >
                    <MessageCircle className="h-5 w-5" />
                    <span>Kirim Reservasi ke WhatsApp Klinik</span>
                  </button>
                  <p className="text-center text-xs text-[#86868B]">
                    Privasi terjamin. Data langsung diarahkan ke nomor WhatsApp resmi {clinic}.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-28 bg-white border-t border-black/[0.04]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#0071E3]">
              Tanya Jawab Pasien
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1D1D1F]">
              Pertanyaan yang Sering Diajukan.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-3xl bg-[#F5F5F7] border border-black/[0.04] p-7 space-y-3"
              >
                <div className="flex items-start gap-3">
                  <HelpCircle className="h-5 w-5 text-[#0071E3] flex-shrink-0 mt-0.5" />
                  <h3 className="font-bold text-base sm:text-lg text-[#1D1D1F] leading-snug">
                    {faq.q}
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-[#6E6E73] leading-relaxed pl-8">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
