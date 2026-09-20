import { Analytics } from "@vercel/analytics/next"
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
  metadataBase: new URL("https://galab-five.vercel.app"),
  title: "GALLAB Barbearia | Sorocaba",
  description:
    "Corte, barba e serviços de barbearia em Sorocaba. Atendimento na barbearia ou em domicílio no Jardim Santa Marta e região.",
  openGraph: {
    title: "GALLAB Barbearia | Sorocaba",
    description:
      "Corte, barba e serviços de barbearia em Sorocaba. Atendimento na barbearia ou em domicílio.",
    url: "/",
    siteName: "GALLAB Barbearia",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/galab-open-graph.png",
        width: 1672,
        height: 941,
        alt: "GALLAB Barbearia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/galab-open-graph.png"],
  },
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
      <body>
        <Analytics/>
        {children}
      </body>
    </html>
  );
}
