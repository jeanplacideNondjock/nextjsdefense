import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "./components/navigation/Header";
import Footer from "./components/footer/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sustainable agriculture & food security",
  description: "Sustainable agriculture & food security platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {/* SEULEMENT les éléments communs à toutes les pages */}
          <Header/>
          
          {/* Le contenu spécifique à chaque page ira ici */}
          <main className="min-h-screen">{children}</main>
          
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}