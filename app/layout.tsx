import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CYSCOMP | Capacitando Profissionais e Organizações para a Segurança Digital",
  description: "A CYSCOMP é uma empresa de excelência no domínio da Cibersegurança e Gestão de Incidentes, dedicada à protecção e resiliência das infraestruturas digitais dos seus clientes.",
  keywords: [
    "Cibersegurança", "Gestão de Incidentes", "Segurança Digital", "Proteção de Infraestruturas", "Resiliência Digital", "CYSCOMP", "Pentest", "Cybersecurity", "security", "EC-COUNCIL"
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="PT-pt">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
