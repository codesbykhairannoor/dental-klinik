"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
import { Badge } from "@/components/ui/badge";
import {
  Phone,
  MapPin,
  Clock,
  Calendar,
  MessageCircle,
  HelpCircle,
  CheckCircle2,
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
    { day: "Minggu / Libur", hours: "10.00 - 16.00 WIB (Dengan Perjanjian)" },
  ];

  const contactMethods = [
    {
      icon: <MessageCircle className="h-6 w-6 text-emerald-600" />,
      title: "Chat WhatsApp Resmi",
      value: wa,
      description: "Respon cepat untuk tanya jadwal dan estimasi biaya",
      action: "Chat WhatsApp",
      url: waBookingUrl,
    },
    {
      icon: <Phone className="h-6 w-6 text-sky-600" />,
      title: "Panggilan Telepon",
      value: wa,
      description: "Hubungi resepsionis pada jam operasional klinik",
      action: "Panggil Sekarang",
      url: `tel:${wa.replace(/[^0-9]/g, "")}`,
    },
    {
      icon: <MapPin className="h-6 w-6 text-rose-600" />,
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
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-50 via-white to-cyan-50 py-16 md:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-4 max-w-3xl mx-auto">
            <Badge className="bg-sky-100 text-sky-700 hover:bg-sky-100 text-xs font-semibold px-3 py-1">
              Hubungi Kami
            </Badge>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
              Kontak & Lokasi Praktek {clinic}
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Tim kami siap melayani konsultasi dan reservasi jadwal perawatan gigi Anda di {kota}. Silakan hubungi kami melalui formulir atau kontak di bawah ini.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information & Hours */}
            <div className="space-y-8">
              <div className="space-y-3">
                <h2 className="text-2xl font-bold text-gray-900">
                  Informasi Klinik
                </h2>
                <p className="text-gray-600 text-sm">
                  Kami selalu siap menjawab pertanyaan seputar kesehatan gigi dan jadwal dokter.
                </p>
              </div>

              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <Card key={index} className="border-slate-200 hover:border-sky-300 transition-colors">
                    <CardContent className="p-5 flex items-start space-x-4">
                      <div className="p-3 bg-slate-50 rounded-xl flex-shrink-0">
                        {method.icon}
                      </div>
                      <div className="space-y-1 flex-1">
                        <div className="font-bold text-gray-900 text-sm">
                          {method.title}
                        </div>
                        <div className="text-sm font-semibold text-sky-600 break-words">
                          {method.value}
                        </div>
                        <div className="text-xs text-gray-500">
                          {method.description}
                        </div>
                        <div className="pt-2">
                          <a
                            href={method.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block text-xs font-bold text-sky-600 hover:text-sky-700 underline underline-offset-2"
                          >
                            {method.action} →
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Jam Praktek */}
              <Card className="border-slate-200 bg-sky-50/50">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-sky-600" />
                    <CardTitle className="text-base font-bold text-gray-900">
                      Jadwal Praktek Klinik
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3 pt-0">
                  {officeHours.map((schedule, idx) => (
                    <div key={idx} className="flex justify-between items-center text-xs py-1.5 border-b border-sky-100 last:border-b-0">
                      <span className="font-semibold text-gray-700">{schedule.day}</span>
                      <span className="text-gray-600 font-medium">{schedule.hours}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Direct WhatsApp Booking Form */}
            <div className="lg:col-span-2">
              <Card className="border-slate-200 shadow-xl">
                <CardHeader className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5 text-sky-600" />
                    <CardTitle className="text-2xl font-bold text-gray-900">
                      Formulir Reservasi Jadwal Periksa
                    </CardTitle>
                  </div>
                  <CardDescription className="text-sm text-gray-600">
                    Isi data di bawah ini untuk terhubung langsung ke WhatsApp Admin {clinic}. Slot periksa akan langsung dikonfirmasi.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleFormSubmit} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <Label htmlFor="nama" className="text-sm font-semibold text-gray-700">
                          Nama Pasien / Wali *
                        </Label>
                        <Input
                          id="nama"
                          placeholder="Contoh: Budi Santoso"
                          required
                          value={formData.nama}
                          onChange={(e) => handleInputChange("nama", e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="noHp" className="text-sm font-semibold text-gray-700">
                          Nomor WhatsApp *
                        </Label>
                        <Input
                          id="noHp"
                          placeholder="Contoh: 081234567890"
                          required
                          value={formData.noHp}
                          onChange={(e) => handleInputChange("noHp", e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <Label htmlFor="layanan" className="text-sm font-semibold text-gray-700">
                          Pilihan Layanan *
                        </Label>
                        <Select
                          value={formData.layanan}
                          onValueChange={(val) => handleInputChange("layanan", val)}
                        >
                          <SelectTrigger id="layanan">
                            <SelectValue placeholder="Pilih Jenis Perawatan" />
                          </SelectTrigger>
                          <SelectContent>
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
                        <Label htmlFor="tanggal" className="text-sm font-semibold text-gray-700">
                          Rencana Tanggal Kunjungan
                        </Label>
                        <Input
                          id="tanggal"
                          type="date"
                          value={formData.tanggal}
                          onChange={(e) => handleInputChange("tanggal", e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="keluhan" className="text-sm font-semibold text-gray-700">
                        Keluhan atau Catatan Tambahan (Opsional)
                      </Label>
                      <Textarea
                        id="keluhan"
                        rows={3}
                        placeholder="Contoh: Gigi belakang sering ngilu saat minum dingin, ingin diperiksa oleh dokter."
                        value={formData.keluhan}
                        onChange={(e) => handleInputChange("keluhan", e.target.value)}
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-6 text-base shadow-lg shadow-emerald-600/20"
                    >
                      <MessageCircle className="h-5 w-5 mr-2" />
                      Kirim Reservasi ke WhatsApp Klinik
                    </Button>
                    <p className="text-center text-xs text-gray-500">
                      Privasi Anda aman. Pesan langsung dikirimkan ke nomor WhatsApp resmi {clinic}.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16 border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-12">
            <Badge className="bg-sky-100 text-sky-700 hover:bg-sky-100 text-xs font-semibold px-3 py-1">
              Tanya Jawab Pasien
            </Badge>
            <h2 className="text-3xl font-extrabold text-gray-900">
              Pertanyaan yang Sering Diajukan
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, idx) => (
              <Card key={idx} className="border-slate-200 bg-white">
                <CardHeader className="pb-2">
                  <div className="flex items-start space-x-2">
                    <HelpCircle className="h-5 w-5 text-sky-500 flex-shrink-0 mt-0.5" />
                    <CardTitle className="text-base font-bold text-gray-900 leading-snug">
                      {faq.q}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 leading-relaxed pl-7">
                    {faq.a}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
