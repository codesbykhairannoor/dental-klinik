"use client";

import { Menu, Phone, Smile, X, MessageSquare } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./ui/button";
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
    <header className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href={`/${queryStr}`} className="flex items-center space-x-2.5">
              <div className="w-10 h-10 bg-sky-500 rounded-xl flex items-center justify-center text-white shadow-md shadow-sky-500/20">
                <Smile className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900 tracking-tight">
                {clinic}
              </span>
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-gray-700 hover:text-sky-500 font-medium transition-colors text-sm"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-2 text-sm text-gray-600 font-medium">
              <Phone className="h-4 w-4 text-sky-500" />
              <span>{wa}</span>
            </div>
            <a href={waBookingUrl} target="_blank" rel="noopener noreferrer">
              <Button className="bg-sky-500 hover:bg-sky-600 shadow-sm font-semibold text-sm">
                Reservasi WhatsApp
              </Button>
            </a>
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              className="md:hidden p-2 text-gray-700 hover:text-sky-500"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Buka navigasi"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 px-6 py-5 space-y-4 shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="block text-gray-800 hover:text-sky-500 font-medium transition-colors text-base"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 border-t border-slate-100 flex items-center space-x-2 text-sm text-gray-600">
            <Phone className="h-4 w-4 text-sky-500" />
            <span className="font-semibold">{wa}</span>
          </div>
          <a
            href={waBookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Button className="w-full bg-sky-500 hover:bg-sky-600 font-bold">
              Reservasi Jadwal via WhatsApp
            </Button>
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
