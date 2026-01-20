import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: "Taman Ramah Lansia",
  description: "Yuk Mampir Bukit Merapin",
  keywords: [
    "lansia",
    "taman ramah lansia",
    "kesehatan lansia",
    "Pangkalpinang",
    "Bukit Merapin",
    "program sosial",
  ],
  authors: [{ name: "Taman Ramah Lansia Rumbia 504" }],
  openGraph: {
    title: "Taman Ramah Lansia",
    description: "Yuk Mampir Bukit Merapin",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} ${poppins.variable}`}>
      <body className="flex flex-col min-h-screen overflow-x-hidden">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
