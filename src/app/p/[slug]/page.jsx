import Home from "@/app/page";
import clinicsData from "@/data/clinics.json";

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

  if (clinic) {
    return {
      title: `${clinic.name} | Praktek Dokter Gigi Spesialis di ${clinic.kota}`,
      description: `Profil resmi & reservasi online ${clinic.name}. Rating ⭐ ${clinic.rating} (${clinic.ulasan} ulasan). Alamat: ${clinic.alamat}.`,
      openGraph: {
        title: `${clinic.name} - Praktek Dokter Gigi Modern`,
        description: `Preview website berstandar Apple UI dengan booking WhatsApp otomatis untuk ${clinic.name}.`,
        images: ["/logo.svg"],
      },
    };
  }

  return {
    title: "Klinik Spesialis Gigi Modern & Terpercaya",
    description: "Pelayanan dokter gigi spesialis dengan teknologi steril modern.",
  };
}

export default function LeadPitchPage() {
  return <Home />;
}
