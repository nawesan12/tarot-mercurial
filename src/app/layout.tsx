import InstagramBanner from "@/components/Banners";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import MainMenu from "@/components/Menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tarot Mercurial",
  description: "Tarot mercurial. Try even with fear",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <InstagramBanner />
        <section className="lg:grid lg:grid-cols-9 lg:grid-rows-3 min-h-screen pt-10">
          <MainMenu />
          <main className="lg:col-span-7 p-4">{children}</main>
        </section>
      </body>
    </html>
  );
}
