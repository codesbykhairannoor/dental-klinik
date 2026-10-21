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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,600&display=swap"
          rel="stylesheet"
        />
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
