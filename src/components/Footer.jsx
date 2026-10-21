"use client";

import { Clock, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useClinic } from "@/context/ClinicContext";

const Footer = () => {
  const { clinic, kota, alamat, wa, queryStr } = useClinic();

  return (
    <footer className="bg-[#F5F5F7] text-[#1D1D1F] py-16 border-t border-black/[0.06] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="space-y-3 col-span-2 md:col-span-1">
            <div className="flex items-center space-x-2">
              <div className="w-7 h-7 flex items-center justify-center">
                <img src="/logo.svg" alt="Dental Logo" className="w-7 h-7 object-contain" />
              </div>
              <span className="text-sm font-semibold tracking-tight text-[#1D1D1F]">{clinic}</span>
            </div>
            <p className="text-[#86868B] text-xs leading-relaxed">
              Pelayanan dokter gigi spesialis terpercaya di {kota}. Prosedur modern, steril, dan ramah keluarga.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-3">
            <h4 className="font-semibold text-xs tracking-tight text-[#1D1D1F]">Halaman</h4>
            <div className="space-y-2 text-[#86868B]">
              <div>
                <Link href={`/${queryStr}`} className="hover:text-[#0071E3] transition-colors">
                  Beranda
                </Link>
              </div>
              <div>
                <Link href={`/services${queryStr}`} className="hover:text-[#0071E3] transition-colors">
                  Layanan & Biaya
                </Link>
              </div>
              <div>
                <Link href={`/about${queryStr}`} className="hover:text-[#0071E3] transition-colors">
                  Tim Dokter
                </Link>
              </div>
              <div>
                <Link href={`/contact${queryStr}`} className="hover:text-[#0071E3] transition-colors">
                  Kontak & Lokasi
                </Link>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-3">
            <h4 className="font-semibold text-xs tracking-tight text-[#1D1D1F]">Layanan Unggulan</h4>
            <div className="space-y-2 text-[#86868B]">
              <div>Pembersihan Karang (Scaling)</div>
              <div>Veneer & Pemutihan Gigi</div>
              <div>Behel & Ortodonti</div>
              <div>Implan & Saluran Akar</div>
              <div>Perawatan Gigi Anak</div>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-3 col-span-2 md:col-span-1">
            <h4 className="font-semibold text-xs tracking-tight text-[#1D1D1F]">Praktek & Alamat</h4>
            <div className="space-y-2 text-[#86868B]">
              <div className="flex items-center gap-1.5">
                <Phone className="h-3.5 w-3.5 text-[#0071E3] flex-shrink-0" />
                <span className="font-medium text-[#1D1D1F]">{wa}</span>
              </div>
              <div className="flex items-start gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-[#0071E3] flex-shrink-0 mt-0.5" />
                <span className="leading-snug">{alamat}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-[#0071E3] flex-shrink-0" />
                <span>Senin - Minggu: 09.00 - 21.00 WIB</span>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer / Apple Copyright */}
        <div className="pt-6 border-t border-black/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#86868B]">
          <p>&copy; 2026 {clinic} ({kota}). Hak Cipta Dilindungi.</p>
          <div className="flex items-center space-x-4">
            <span className="hover:text-[#1D1D1F] transition-colors cursor-pointer">Kebijakan Privasi</span>
            <span>•</span>
            <span className="hover:text-[#1D1D1F] transition-colors cursor-pointer">Syarat & Ketentuan</span>
            <span>•</span>
            <span className="hover:text-[#1D1D1F] transition-colors cursor-pointer">Peta Situs</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
