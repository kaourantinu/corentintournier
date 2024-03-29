import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";

const evolventa = localFont({
  src: [
    {
      path: './evolventa/bold.woff',
      weight: 'bold',
      style: 'normal',
    },
    {
      path: './evolventa/boldoblique.woff',
      weight: 'bold',
      style: 'italic',
    },
    {
      path: './evolventa/regular.woff',
      weight: 'normal',
      style: 'normal',
    },
    {
      path: './evolventa/oblique.woff',
      weight: 'normal',
      style: 'italic',
    },
  ],
  variable: "--font-primary",
})

const geist = localFont({
  src: './geist/GeistVariableVF.woff2',
  variable: "--font-second",
})

export const metadata: Metadata = {
  title: "Corentin Tournier - Développeur web React/Next.js - Besançon",
  description: "Ouvert à de nouvelles opportunités professionnelles, contactez-moi par mail à corentin.tournier@outlook.fr ou par téléphone au 07 61 41 30 61.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${evolventa.variable} ${geist.variable}`}>
      {children}
    </html>
  );
}
