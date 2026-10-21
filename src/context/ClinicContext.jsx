"use client";

import React, { createContext, useContext, Suspense, useEffect, useState } from "react";
import { useSearchParams, useParams, usePathname } from "next/navigation";
import clinicsData from "@/data/clinics.json";

const ClinicContext = createContext();

const DEFAULT_MY_WA = "6285718203535"; // WhatsApp Pengembang / User (+62 857-1820-3535)

function ClinicContextProvider({ children }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const params = useParams();

  // Ambil parameter dari URL
  const pParam = searchParams.get("p") || searchParams.get("id") || searchParams.get("lead");
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
    myWa: DEFAULT_MY_WA,
    isPitch: false,
    queryStr: "",
  });

  useEffect(() => {
    // 1. Cek slug dari route /p/[slug] atau query ?p=[slug] / ?id=[id]
    const routeSlug = params?.slug || (pathname?.startsWith("/p/") ? pathname.split("/p/")[1]?.split("/")[0] : null);
    const lookupKey = routeSlug || pParam;

    let matchedClinic = null;
    if (lookupKey) {
      const decoded = decodeURIComponent(lookupKey).toLowerCase().trim();
      matchedClinic = clinicsData.find(
        (c) =>
          c.slug.toLowerCase() === decoded ||
          String(c.id) === decoded
      );
    }

    // 2. Cek sessionStorage jika ada data sebelumnya
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
      matchedClinic ||
      lookupKey ||
      clinicParam ||
      kotaParam ||
      searchParams.get("pitch") === "true" ||
      saved.isPitch
    );

    // Prioritas: query param spesifik > data matchedClinic dari database 100 leads > saved sessionStorage > default demo
    const updated = {
      clinic: clinicParam || matchedClinic?.name || saved.clinic || "BrightSmile Dental",
      kota: kotaParam || matchedClinic?.kota || saved.kota || "Jakarta Selatan",
      rating: ratingParam || matchedClinic?.rating || saved.rating || "4.9",
      ulasan: ulasanParam || matchedClinic?.ulasan || saved.ulasan || "420",
      alamat: alamatParam || matchedClinic?.alamat || saved.alamat || "Jl. Senopati No. 45, Kebayoran Baru, Jakarta Selatan",
      dr: drParam || matchedClinic?.dr || saved.dr || "drg. Amanda Putri, Sp.KG",
      wa: waParam || matchedClinic?.wa || saved.wa || "6281298765432",
      myWa: myWaParam || matchedClinic?.mywa || saved.myWa || DEFAULT_MY_WA,
      isPitch: isPitchActive,
      queryStr: searchParams.toString()
        ? `?${searchParams.toString()}`
        : routeSlug
        ? `?p=${encodeURIComponent(routeSlug)}`
        : (saved.queryStr || ""),
    };

    setClinicData(updated);

    if (typeof window !== "undefined" && isPitchActive) {
      sessionStorage.setItem("active_clinic_data", JSON.stringify(updated));
      document.title = `${updated.clinic} | Praktek Dokter Gigi Spesialis di ${updated.kota}`;
    }
  }, [
    pathname,
    params,
    pParam,
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

  // Link WhatsApp untuk Owner Klinik Klaim Website (Chat ke WA Pengembang / User)
  const cleanMyWa = (myWa || DEFAULT_MY_WA).replace(/[^0-9]/g, "");
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
      myWa: DEFAULT_MY_WA,
      isPitch: false,
      queryStr: "",
      waBookingUrl: "https://wa.me/6281298765432",
      waClaimUrl: `https://wa.me/${DEFAULT_MY_WA}`,
    };
  }
  return context;
}
