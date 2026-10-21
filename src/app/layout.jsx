import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";
import { ClinicProvider } from "@/context/ClinicContext";
import VIPBanner from "@/components/VIPBanner";
import PitchControlBar from "@/components/PitchControlBar";

export const metadata = {
  title: "Klinik Spesialis Gigi Modern & Terpercaya",
  description:
    "Pelayanan dokter gigi spesialis dengan teknologi steril modern, reservasi praktis, dan perawatan nyaman.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.cdnfonts.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://fonts.cdnfonts.com/css/sf-pro-display" />
      </head>
      <body className="font-sans antialiased bg-[#FBFBFD] text-[#1D1D1F] selection:bg-[#0071E3]/15 selection:text-[#0071E3]">
        <ClinicProvider>
          <VIPBanner />
          <Header />
          {children}
          <Footer />
          <PitchControlBar />
        </ClinicProvider>
      </body>
    </html>
  );
}
