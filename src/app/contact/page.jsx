"use client";

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
} from "lucide-react";
import { useState } from "react";
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
      icon: <MessageCircle className="h-5 w-5 text-[#0071E3]" />,
      title: "Chat WhatsApp Resmi",
      value: wa,
      description: "Respon cepat untuk tanya jadwal dan estimasi biaya",
      action: "Chat WhatsApp",
      url: waBookingUrl,
    },
    {
      icon: <Phone className="h-5 w-5 text-[#0071E3]" />,
      title: "Panggilan Telepon",
      value: wa,
      description: "Hubungi resepsionis pada jam operasional klinik",
      action: "Panggil Sekarang",
      url: `tel:${wa.replace(/[^0-9]/g, "")}`,
    },
    {
      icon: <MapPin className="h-5 w-5 text-[#0071E3]" />,
      title: "Lokasi Praktek",
      value: alamat,
      description: `Klinik dental modern di area strategis ${kota}`,
      action: "Buka Google Maps",
      url: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${clinic} ${alamat} ${kota}`)}`,
    },
  ];

  const faqs = [
    {
      q: "Apakah harus membuat janji terlebih dahulu sebelum datang?",
      a: "Sangat disarankan untuk reservasi jadwal via WhatsApp agar Anda mendapatkan kepastian jam temu dokter tanpa perlu menunggu antrean panjang di klinik.",
    },
    {
      q: "Apakah prosedur pembersihan karang gigi (scaling) sakit?",
      a: "Tidak. Kami menggunakan alat scaler ultrasonik berteknologi tinggi dengan getaran mikro dan air pendingin, sehingga proses pembersihan terasa nyaman dan minim ngilu.",
    },
    {
      q: "Metode pembayaran apa saja yang diterima?",
      a: "Kami menerima pembayaran tunai, transfer bank, QRIS, serta kartu debit/kredit. Kami juga menyediakan invoice resmi dan kuitansi medis untuk klaim reimbursement asuransi.",
    },
    {
      q: "Berapa lama waktu yang dibutuhkan untuk pemasangan behel atau veneer?",
      a: "Untuk behel, pemasangan memakan waktu sekitar 60-90 menit setelah rontgen dan pencetakan gigi. Untuk porcelain veneer membutuhkan 2 kali kunjungan, sedangkan composite veneer dapat selesai dalam 1 hari.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#FBFBFD] text-[#1D1D1F]">
      {/* Header Section */}
      <section className="py-16 md:py-24 border-b border-black/[0.04]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-1.5 bg-white border border-black/[0.08] shadow-[0_2px_8px_rgba(0,0,0,0.04)] px-3.5 py-1.5 rounded-full text-xs font-medium text-[#1D1D1F]">
            <span>Kontak & Lokasi</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#1D1D1F]">
            Hubungi {clinic}
          </h1>
          <p className="text-lg text-[#86868B] leading-relaxed">
            Tim kami siap melayani konsultasi dan reservasi jadwal perawatan gigi Anda di {kota}. Silakan gunakan kontak atau formulir di bawah ini.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-24 bg-[#F5F5F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Info Column */}
            <div className="space-y-6">
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <div
                    key={index}
                    className="rounded-3xl bg-white border border-black/[0.06] p-6 shadow-apple hover:shadow-apple-hover transition-all duration-300 flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-2xl bg-[#0071E3]/10 flex items-center justify-center flex-shrink-0 text-[#0071E3]">
                      {method.icon}
                    </div>
                    <div className="space-y-1 flex-1 min-w-0">
                      <div className="font-semibold text-[#1D1D1F] text-sm">
                        {method.title}
                      </div>
                      <div className="text-xs font-semibold text-[#0071E3] break-words">
                        {method.value}
                      </div>
                      <div className="text-[11px] text-[#86868B]">
                        {method.description}
                      </div>
                      <div className="pt-2">
                        <a
                          href={method.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-semibold text-[#0071E3] hover:text-[#0077ED]"
                        >
                          <span>{method.action}</span>
                          <ArrowRight className="h-3 w-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Hours Card */}
              <div className="rounded-3xl bg-white border border-black/[0.06] p-6 shadow-apple space-y-4">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-[#0071E3]" />
                  <h3 className="font-semibold text-sm text-[#1D1D1F]">
                    Jadwal Operasional Klinik
                  </h3>
                </div>
                <div className="space-y-2 pt-2 border-t border-black/[0.04]">
                  {officeHours.map((schedule, idx) => (
                    <div key={idx} className="flex justify-between items-center text-xs py-1.5 border-b border-black/[0.03] last:border-b-0">
                      <span className="font-medium text-[#1D1D1F]">{schedule.day}</span>
                      <span className="text-[#86868B]">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Booking Form (iOS Settings Card Style) */}
            <div className="lg:col-span-2">
              <div className="rounded-3xl bg-white border border-black/[0.06] p-8 sm:p-10 shadow-apple space-y-6">
                <div className="space-y-1.5">
                  <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#0071E3]">
                    <Calendar className="h-4 w-4" />
                    <span>Reservasi Langsung</span>
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight text-[#1D1D1F]">
                    Formulir Jadwal Periksa
                  </h2>
                  <p className="text-xs sm:text-sm text-[#86868B]">
                    Isi data di bawah ini untuk langsung terhubung ke WhatsApp Admin {clinic}.
                  </p>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="nama" className="text-xs font-medium text-[#1D1D1F]">
                        Nama Pasien / Wali *
                      </Label>
                      <Input
                        id="nama"
                        placeholder="Contoh: Budi Santoso"
                        required
                        className="rounded-xl bg-[#F5F5F7] border border-black/[0.04] focus:bg-white text-sm py-2.5"
                        value={formData.nama}
                        onChange={(e) => handleInputChange("nama", e.target.value)}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="noHp" className="text-xs font-medium text-[#1D1D1F]">
                        Nomor WhatsApp *
                      </Label>
                      <Input
                        id="noHp"
                        placeholder="Contoh: 081234567890"
                        required
                        className="rounded-xl bg-[#F5F5F7] border border-black/[0.04] focus:bg-white text-sm py-2.5"
                        value={formData.noHp}
                        onChange={(e) => handleInputChange("noHp", e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="layanan" className="text-xs font-medium text-[#1D1D1F]">
                        Pilihan Layanan *
                      </Label>
                      <Select
                        value={formData.layanan}
                        onValueChange={(val) => handleInputChange("layanan", val)}
                      >
                        <SelectTrigger id="layanan" className="rounded-xl bg-[#F5F5F7] border border-black/[0.04] text-sm py-2.5">
                          <SelectValue placeholder="Pilih Jenis Perawatan" />
                        </SelectTrigger>
                        <SelectContent className="rounded-2xl shadow-xl">
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

                    <div className="space-y-1.5">
                      <Label htmlFor="tanggal" className="text-xs font-medium text-[#1D1D1F]">
                        Rencana Tanggal Kunjungan
                      </Label>
                      <Input
                        id="tanggal"
                        type="date"
                        className="rounded-xl bg-[#F5F5F7] border border-black/[0.04] text-sm py-2.5"
                        value={formData.tanggal}
                        onChange={(e) => handleInputChange("tanggal", e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="keluhan" className="text-xs font-medium text-[#1D1D1F]">
                      Keluhan atau Catatan Tambahan (Opsional)
                    </Label>
                    <Textarea
                      id="keluhan"
                      rows={3}
                      placeholder="Contoh: Gigi belakang sering ngilu saat minum dingin..."
                      className="rounded-xl bg-[#F5F5F7] border border-black/[0.04] text-sm"
                      value={formData.keluhan}
                      onChange={(e) => handleInputChange("keluhan", e.target.value)}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-full bg-[#0071E3] hover:bg-[#0077ED] active:scale-[0.99] text-white font-medium py-3.5 text-sm sm:text-base shadow-[0_4px_14px_rgba(0,113,227,0.3)] transition-all flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>Kirim Reservasi ke WhatsApp Klinik</span>
                  </button>
                  <p className="text-center text-[11px] text-[#86868B]">
                    Data aman. Format langsung dibuat untuk nomor WhatsApp resmi {clinic}.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white border-t border-black/[0.04]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0071E3]">
              Tanya Jawab Pasien
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-[#1D1D1F]">
              Pertanyaan yang Sering Diajukan
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-3xl bg-[#F5F5F7] border border-black/[0.04] p-6 space-y-2.5"
              >
                <div className="flex items-start gap-2.5">
                  <HelpCircle className="h-4 w-4 text-[#0071E3] flex-shrink-0 mt-0.5" />
                  <h3 className="font-semibold text-sm text-[#1D1D1F] leading-snug">
                    {faq.q}
                  </h3>
                </div>
                <p className="text-xs text-[#86868B] leading-relaxed pl-6.5">
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
