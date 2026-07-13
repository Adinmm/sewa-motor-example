import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Bali Moto Rent — Sewa Motor Mudah & Terpercaya di Bali",
  description:
    "Sewa motor matic, sport, dan trail di Bali. Armada terawat, harga transparan, antar jemput gratis area Kuta, Seminyak & Canggu.",
  openGraph: {
    title: "Bali Moto Rent — Sewa Motor di Bali",
    description: "Sewa motor mudah, cepat, dan terpercaya di Bali.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={cn("font-sans", geist.variable)}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        />
      </head>
      <body>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppFloat />
        </div>
      </body>
    </html>
  );
}
