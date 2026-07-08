import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "GALLAB Barbearia | Sorocaba",
  description:
    "Corte, barba e serviços de barbearia em Sorocaba. Atendimento na barbearia ou em domicílio no Jardim Santa Marta e região.",
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full scroll-smooth antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
