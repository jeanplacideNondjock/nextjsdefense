import HeroPremium from "./components/hero/HeroPremium";
import ImpactStats from "./components/heroimpacttime/ImpactStats";
import UseCasesSection from "./components/section/UseCasesSection";
import SolutionsSection from "./components/section/SolutionsSection";
import IndustriesRow from "./solutions/IndustriesRow";
import PlatformLiveSection from "./components/section/PlatformLiveSection";
import HowItWorksSection from "./components/section/HowItWorksSection";
import StatsWithCardsSection from "./components/StatsWithCardsSection";
import VideoScrollSection from "./components/section/VideoDemoSection";
import PostVideoContent from "./components/section/TechnologySection";



//import SolutionsCarouselSection from "./solutions/SolutionsCarouselSection";

export default function HomePage() {
  return (
    <>
      
      <HeroPremium />
      <HowItWorksSection />
      <VideoScrollSection/>
     < PostVideoContent/>
  
      
        
        {/* <ApplicationsSection />
         <PartnersSection />
          <GetStartedSection /> */}
      {/* <SolutionsCarouselSection />
   
      <StatsWithCardsSection />
     
      <UseCasesSection />
      
      <IndustriesRow />
      <SolutionsSection /> */}
    </>
  );
}