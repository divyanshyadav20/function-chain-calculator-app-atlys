import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const interFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "atlys",
  description: "Function chain calculator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interFont.variable} antialiased`}>
        {/* Dotted Background */}
        <div className="fixed inset-0 -z-10 h-full w-full bg-[#F8F8F8] bg-[radial-gradient(#CFCFCF_1.25px,transparent_1px)] [background-size:18px_18px]"></div>
        {children}
      </body>
    </html>
  );
}
