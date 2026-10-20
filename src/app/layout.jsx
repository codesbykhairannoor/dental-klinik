import Header from "@/components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import { ClinicProvider } from "@/context/ClinicContext";
import VIPBanner from "@/components/VIPBanner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Klinik Spesialis Gigi Modern & Terpercaya",
  description:
    "Pelayanan dokter gigi spesialis dengan teknologi steril modern, reservasi praktis, dan perawatan nyaman.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <ClinicProvider>
          <VIPBanner />
          <Header />
          {children}
          <Footer />
        </ClinicProvider>
      </body>
    </html>
  );
}
