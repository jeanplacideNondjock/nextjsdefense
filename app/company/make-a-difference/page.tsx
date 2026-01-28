
import HeroFoodAg from '@/app/components/heroimpacttime/HeroFoodAg'
import PlatformLiveSection from '@/app/components/section/PlatformLiveSection'
import React from 'react'
import ImpactStats from '@/app/components/heroimpacttime/ImpactStats'
import SolutionsCarousel from '@/app/solutions/SolutionsCarouselSection'

const page = () => {
  return (
    <div>
     <HeroFoodAg/>
      <SolutionsCarousel/>
    <PlatformLiveSection />
     <ImpactStats/>
   
    </div>
  )
}

export default page
