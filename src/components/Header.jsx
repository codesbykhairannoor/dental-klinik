"use client";

import { Menu, Phone, Smile, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { useClinic } from "@/context/ClinicContext";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { clinic, wa, queryStr, waBookingUrl } = useClinic();

  const navLinks = [
    { label: "Beranda", href: `/${queryStr}` },
    { label: "Layanan Gigi", href: `/services${queryStr}` },
    { label: "Tentang Kami", href: `/about${queryStr}` },
    { label: "Kontak & Lokasi", href: `/contact${queryStr}` },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-2xl bg-white/80 border-b border-black/[0.06] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          <div className="flex items-center">
            <Link href={`/${queryStr}`} className="flex items-center space-x-2.5 group">
              <div className="w-9 h-9 bg-gradient-to-b from-[#0077ED] to-[#0071E3] rounded-xl flex items-center justify-center text-white shadow-sm transition-transform group-hover:scale-105">
                <Smile className="h-5 w-5 text-white" />
              </div>
              <span className="text-[17px] font-semibold text-[#1D1D1F] tracking-tight">
                {clinic}
              </span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-7">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[13px] text-[#1D1D1F]/80 hover:text-[#0071E3] font-normal tracking-tight transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center space-x-3.5">
            <div className="hidden sm:flex items-center space-x-1.5 text-xs text-[#86868B] font-normal">
              <Phone className="h-3.5 w-3.5 text-[#0071E3]" />
              <span>{wa}</span>
            </div>
            <a href={waBookingUrl} target="_blank" rel="noopener noreferrer">
              <button className="rounded-full bg-[#0071E3] hover:bg-[#0077ED] active:scale-95 text-white font-medium text-xs px-4 py-2 shadow-sm transition-all">
                Reservasi WhatsApp
              </button>
            </a>
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-[#1D1D1F] hover:text-[#0071E3] rounded-full hover:bg-black/5 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Buka navigasi"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-2xl border-b border-black/[0.06] px-6 py-5 space-y-4 shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="block text-[#1D1D1F] hover:text-[#0071E3] font-medium text-[15px] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-black/[0.06] flex items-center space-x-2 text-xs text-[#86868B]">
            <Phone className="h-3.5 w-3.5 text-[#0071E3]" />
            <span className="font-semibold text-[#1D1D1F]">{wa}</span>
          </div>
          <a
            href={waBookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <button className="w-full rounded-full bg-[#0071E3] hover:bg-[#0077ED] text-white font-medium text-sm py-2.5 shadow-sm">
              Reservasi Jadwal via WhatsApp
            </button>
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
