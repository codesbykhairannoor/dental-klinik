import clinicsData from "@/data/clinics.json";
import WaClientView from "./WaClientView";

const USER_WA_DISPLAY = "+62 857-1820-3535";

export async function generateStaticParams() {
  return clinicsData.map((c) => ({
    slug: c.slug,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;
  const clinic = clinicsData.find(
    (c) =>
      c.slug.toLowerCase() === slug?.toLowerCase() ||
      String(c.id) === String(slug)
  );

  return {
    title: clinic
      ? `Chat WhatsApp ${clinic.name} - Demo Website`
      : "Menghubungkan ke WhatsApp",
    description: "Kirim pesan penawaran website eksklusif langsung ke WhatsApp klinik.",
  };
}

export default async function WaPage({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;

  const clinic = clinicsData.find(
    (c) =>
      c.slug.toLowerCase() === slug?.toLowerCase() ||
      String(c.id) === String(slug)
  ) || {
    name: "Klinik Gigi Prospek",
    kota: "Jakarta",
    rating: "5.0",
    ulasan: "500",
    wa: "6285718203535",
    wa_display: "0857-1820-3535",
    slug: slug || "demo",
    dr: "drg. Penanggung Jawab, Sp.KG",
    alamat: "Praktek Dokter Gigi",
  };

  const demoUrl = `https://dental-klinik-demo-eta.vercel.app/p/${clinic.slug}`;
  const cleanDomain = clinic.slug.replace(/[^a-z0-9]/g, "") + ".com";

  const pitchMessage = 
`Halo Dok / Tim Manajemen ${clinic.name},

Salam kenal! Saya perhatikan ${clinic.name} memiliki reputasi sangat luar biasa di Google Maps (${clinic.rating} ⭐ dari ${clinic.ulasan} ulasan pasien di ${clinic.kota}).

Melihat antusiasme pasien yang begitu tinggi, kami berinisiatif membuatkan preview website profil modern berstandar Apple UI khusus untuk ${clinic.name}, lengkap dengan sistem booking WhatsApp terintegrasi:

👉 Akses Website Demo Klinik Anda di sini:
${demoUrl}

Keunggulan sistem website ini:
• Desain Mewah & Responsif Cepat di smartphone pasien
• Reservasi WhatsApp otomatis langsung terarah ke nomor klinik Anda (${clinic.wa_display})
• Kalkulator Biaya Perawatan & Slider Interaktif Before-After hasil senyum
• Sistem 100% Fleksibel: Siap di-custom penuh, integrasi Booking Kalender Dokter, POS / Kasir Klinik & Rekam Medis Pasien
• Siap dihubungkan ke domain resmi (contoh: www.${cleanDomain})

Website ini sudah siap kami serahkan dan tayangkan. Jika dokter atau tim manajemen tertarik untuk mengaktifkannya, bisa langsung hubungi WhatsApp saya di ${USER_WA_DISPLAY} atau klik tombol 'Klaim Website Ini' di bagian atas halaman demo.

Terima kasih banyak Dok, sukses selalu untuk pelayanan ${clinic.name}! 🙏✨`;

  const cleanWa = (clinic.wa || "").replace(/[^0-9]/g, "");
  const waDirectUrl = `https://wa.me/${cleanWa}?text=${encodeURIComponent(pitchMessage)}`;

  return (
    <WaClientView
      clinic={clinic}
      pitchMessage={pitchMessage}
      waDirectUrl={waDirectUrl}
    />
  );
}
