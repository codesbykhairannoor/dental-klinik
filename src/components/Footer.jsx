"use client";

import { Clock, MapPin, Phone, Smile } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useClinic } from "@/context/ClinicContext";

const Footer = () => {
  const { clinic, kota, alamat, wa, queryStr } = useClinic();

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-sky-500 rounded-lg flex items-center justify-center">
                <Smile className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold">{clinic}</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Layanan dokter gigi spesialis terpercaya di {kota}. Perawatan modern, steril, dan ramah keluarga.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Navigasi Halaman</h3>
            <div className="space-y-2 text-gray-400 text-sm">
              <div>
                <Link
                  href={`/${queryStr}`}
                  className="hover:text-white transition-colors"
                >
                  Beranda
                </Link>
              </div>
              <div>
                <Link
                  href={`/services${queryStr}`}
                  className="hover:text-white transition-colors"
                >
                  Daftar Layanan & Biaya
                </Link>
              </div>
              <div>
                <Link
                  href={`/about${queryStr}`}
                  className="hover:text-white transition-colors"
                >
                  Tentang Tim Dokter
                </Link>
              </div>
              <div>
                <Link
                  href={`/contact${queryStr}`}
                  className="hover:text-white transition-colors"
                >
                  Kontak & Reservasi
                </Link>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Layanan Unggulan</h3>
            <div className="space-y-2 text-gray-400 text-sm">
              <div>Pembersihan Karang (Scaling)</div>
              <div>Veneer & Pemutihan Gigi</div>
              <div>Pemasangan Behel (Kawat Gigi)</div>
              <div>Implan Gigi & Perawatan Saluran Akar</div>
              <div>Pemeriksaan Gigi Anak</div>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Kontak & Praktek</h3>
            <div className="space-y-2.5 text-gray-400 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-sky-400 flex-shrink-0" />
                <span>{wa}</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-sky-400 flex-shrink-0 mt-0.5" />
                <span className="leading-snug">{alamat}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-sky-400 flex-shrink-0" />
                <span>Senin - Minggu: 09.00 - 21.00 WIB</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-xs">
          <p>&copy; 2026 {clinic} ({kota}). Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
