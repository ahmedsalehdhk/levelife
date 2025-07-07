import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Roboto_Condensed } from 'next/font/google'


export const metadata: Metadata = {
  title: "Levelife",
  description: "Gamification of life",
};

const robotoCondensed = Roboto_Condensed({
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={robotoCondensed.className}>
      <body className="">
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
