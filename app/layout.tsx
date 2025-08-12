import type { Metadata } from "next";

import { Urbanist } from "next/font/google";

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import './globals.css'

import "./globals.css";

import Navbar from "@/components/navbar";
import Header from "@/components/header";

const urbanist = Urbanist({
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "MateoDev",
  description: "Landing page made by MateoDev",
  icons:{
    icon: '/favicon.ico'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${urbanist.className} antialiased`}>
        <Header />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
