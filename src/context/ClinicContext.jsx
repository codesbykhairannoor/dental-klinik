"use client";

import React, { createContext, useContext, Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

const ClinicContext = createContext();

function ClinicContextProvider({ children }) {
  const searchParams = useSearchParams();

  // Ambil parameter dari URL
  const clinicParam = searchParams.get("clinic") || searchParams.get("name");
  const kotaParam = searchParams.get("kota") || searchParams.get("city");
  const ratingParam = searchParams.get("rating");
  const ulasanParam = searchParams.get("ulasan") || searchParams.get("reviews");
  const alamatParam = searchParams.get("alamat") || searchParams.get("address");
  const drParam = searchParams.get("dr") || searchParams.get("dokter");
  const waParam = searchParams.get("wa") || searchParams.get("phone");
  const myWaParam = searchParams.get("mywa");

  // State untuk menyimpan data klinik agar konsisten antar navigasi subpage
  const [clinicData, setClinicData] = useState({
    clinic: "BrightSmile Dental",
    kota: "Jakarta Selatan",
    rating: "4.9",
    ulasan: "420",
    alamat: "Jl. Senopati No. 45, Kebayoran Baru, Jakarta Selatan",
    dr: "drg. Amanda Putri, Sp.KG",
    wa: "6281298765432",
    myWa: "6281234567890",
    isPitch: false,
    queryStr: "",
  });

  useEffect(() => {
    // Cek sessionStorage terlebih dahulu
    let saved = {};
    if (typeof window !== "undefined") {
      try {
        const stored = sessionStorage.getItem("active_clinic_data");
        if (stored) saved = JSON.parse(stored);
      } catch (e) {
        console.error(e);
      }
    }

    const isPitchActive = Boolean(
      clinicParam ||
      kotaParam ||
      searchParams.get("pitch") === "true" ||
      saved.isPitch
    );

    const updated = {
      clinic: clinicParam || saved.clinic || "BrightSmile Dental",
      kota: kotaParam || saved.kota || "Jakarta Selatan",
      rating: ratingParam || saved.rating || "4.9",
      ulasan: ulasanParam || saved.ulasan || "420",
      alamat: alamatParam || saved.alamat || "Jl. Senopati No. 45, Kebayoran Baru, Jakarta Selatan",
      dr: drParam || saved.dr || "drg. Amanda Putri, Sp.KG",
      wa: waParam || saved.wa || "6281298765432",
      myWa: myWaParam || saved.myWa || "6281234567890",
      isPitch: isPitchActive,
      queryStr: searchParams.toString() ? `?${searchParams.toString()}` : (saved.queryStr || ""),
    };

    setClinicData(updated);

    if (typeof window !== "undefined" && isPitchActive) {
      sessionStorage.setItem("active_clinic_data", JSON.stringify(updated));
      document.title = `${updated.clinic} | Praktek Dokter Gigi Spesialis di ${updated.kota}`;
    }
  }, [
    clinicParam,
    kotaParam,
    ratingParam,
    ulasanParam,
    alamatParam,
    drParam,
    waParam,
    myWaParam,
    searchParams,
  ]);

  const { clinic, kota, rating, ulasan, alamat, dr, wa, myWa, isPitch, queryStr } = clinicData;

  // Link WhatsApp untuk Booking Pasien
  const cleanWa = wa.replace(/[^0-9]/g, "");
  const waBookingUrl = `https://wa.me/${cleanWa}?text=${encodeURIComponent(
    `Halo Admin ${clinic}, saya ingin konsultasi dan reservasi jadwal periksa gigi di ${clinic} (${kota}).`
  )}`;

  // Link WhatsApp untuk Owner Klinik Klaim Website (Chat ke WA Pengembang/User)
  const cleanMyWa = myWa.replace(/[^0-9]/g, "");
  const waClaimUrl = `https://wa.me/${cleanMyWa}?text=${encodeURIComponent(
    `Halo Mas, saya pemilik/manajemen dari *${clinic}* (${kota}). Saya sudah lihat preview website yang dibuatkan. Saya tertarik untuk pasang website ini ke domain resmi kami.`
  )}`;

  return (
    <ClinicContext.Provider
      value={{
        clinic,
        kota,
        rating,
        ulasan,
        alamat,
        dr,
        wa,
        myWa,
        isPitch,
        queryStr,
        waBookingUrl,
        waClaimUrl,
      }}
    >
      {children}
    </ClinicContext.Provider>
  );
}

export function ClinicProvider({ children }) {
  return (
    <Suspense fallback={<>{children}</>}>
      <ClinicContextProvider>{children}</ClinicContextProvider>
    </Suspense>
  );
}

export function useClinic() {
  const context = useContext(ClinicContext);
  if (!context) {
    return {
      clinic: "BrightSmile Dental",
      kota: "Jakarta Selatan",
      rating: "4.9",
      ulasan: "420",
      alamat: "Jl. Senopati No. 45, Kebayoran Baru, Jakarta Selatan",
      dr: "drg. Amanda Putri, Sp.KG",
      wa: "6281298765432",
      myWa: "6281234567890",
      isPitch: false,
      queryStr: "",
      waBookingUrl: "https://wa.me/6281298765432",
      waClaimUrl: "https://wa.me/6281234567890",
    };
  }
  return context;
}
