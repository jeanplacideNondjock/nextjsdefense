//import type { Metadata } from "next";
import SolutionsCarouselSection from "./solutions/SolutionsCarouselSection";
import { ClerkProvider } from "@clerk/nextjs";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "./components/navigation/Header";
import "./globals.css";
import HeroPremium from "./components/hero/HeroPremium";
import ImpactStats from "./components/heroimpacttime/ImpactStats";
import UseCasesSection from "./components/section/UseCasesSection";
// import SolutionsSection from "./components/section/SolutionsSection";
import IndustriesRow from "./solutions/IndustriesRow";
import PlatformLiveSection from "./components/section/PlatformLiveSection";
import HowItWorksSection from "./components/section/HowItWorksSection";
import StatsWithCardsSection from "./components/StatsWithCardsSection";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AgriStack",
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
          <Navbar/>
          {/* <Header /> */}
          {/* <HeroPremium/> */}
          {/* <IndustriesRow/>
          <SolutionsCarouselSection/>
          <PlatformLiveSection/>
          <HowItWorksSection/>
           <StatsWithCardsSection/>
          <ImpactStats/>
          <UseCasesSection/> */}
          <main className="pt-16">{children}</main>
          <Footer/>
        </body>
      </html>
    </ClerkProvider>
  );
}
