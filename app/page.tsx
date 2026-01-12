
"use client";

import HeroPremium from "./components/hero/HeroPremium";
import HeroFoodAg from "./components/heroimpacttime/HeroFoodAg";
import TechnologySection from "./components/section/TechnologySection";
import UseCasesSection from "./components/section/UseCasesSection";
import ImpactStats from "./components/heroimpacttime/ImpactStats";
import Header from "./components/navigation/Header";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import PlatformLiveSection from "./components/section/PlatformLiveSection";
import SolutionsCarouselSection from "./components/section/SolutionsSection";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";

export default function HomePage() {
  return (
    <>
      {/* Header fixe */}
      {/* <Header /> */}

      {/* Affichage si connecté */}
      <SignedIn>
        {/* Bouton utilisateur en haut à droite */}
        <div className="fixed top-4 right-4 z-50">
          <UserButton />
        </div>

        {/* Contenu principal */}
        <main>
          <Navbar/>
          <HeroPremium />
          <ImpactStats />
          <UseCasesSection />
          <SolutionsCarouselSection />
          <PlatformLiveSection /> 
          
          {/* Section Contact avec Calendly - CORRIGÉ */}
         
          
          <TechnologySection />
          <HeroFoodAg />
         
        </main>
         <Footer/>
      </SignedIn>

      {/* Affichage si non connecté */}
      <SignedOut>
        <div className="h-screen flex flex-col items-center justify-center px-6 text-center">
          <p className="text-xl text-gray-700 mb-6">
            Vous devez vous connecter pour accéder au site.
          </p>
          <a
            href="/sign-in"
            className="px-6 py-3 rounded-lg bg-emerald-600 text-white font-medium hover:bg-emerald-700 transition"
          >
            Se connecter
          </a>
        </div>
      </SignedOut>
    </>
  );
}
