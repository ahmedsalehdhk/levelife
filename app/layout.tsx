import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Roboto_Condensed, VT323 } from 'next/font/google'


export const metadata: Metadata = {
  title: "Levelife",
  description: "Gamification of life",
};

const robotoCondensed = Roboto_Condensed({ subsets: ['latin'], variable: '--font-robotoCondensed' });
const vt323 = VT323({ subsets: ['latin'], weight: '400', variable: '--font-vt323' });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={vt323.className}>
      <body className="">
        <Navbar />
        <main className=''>
          {children}
        </main>
      </body>
    </html>
  );
}
