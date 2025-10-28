import type { Metadata } from "next";

import './globals.css';

// Import Google Fonts
import { Inter, Montserrat } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400","500","600","700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400","500","600","700"],
});

export const metadata: Metadata = {
  title: "PineByte Digital",
  description: "Web Development for Business Owners",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${montserrat.variable} antialiased bg-gray-50 text-gray-900`}
      >
       
        {children}
      </body>
    </html>
  );
}
