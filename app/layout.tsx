import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Roboto_Mono } from 'next/font/google'


export const metadata: Metadata = {
  title: "Levelife",
  description: "Gamification of life",
};

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={robotoMono.className}>
      <body className="">
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
