import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import NoiseBg from "@/components/NoiseBg/NoiseBg";


const inter = Inter({ subsets: ["latin"] });

const messina = localFont({
  src: "../public/fonts/Messina.ttf",
  variable: "--messina",
  display: "swap",
});

const messinaCondensed = localFont({
  src: "../public/fonts/MessinaCondensed.ttf",
  variable: "--messinaCondensed",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={`${inter.className} ${messinaCondensed.variable} ${messina.variable}`}
      >
          <NoiseBg>{children}</NoiseBg>
      </body>
    </html>
  );
}
