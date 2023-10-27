import Image from 'next/image'

import { AnnouncementBar } from '@/components/landingpage/announcementbar'
import { NavBar } from '@/components/landingpage/navbar'
import { HeroImage1 } from '@/components/landingpage/heroimage1'
import { VideoSection } from '@/components/landingpage/videosection'
import { MiniFeatures } from '@/components/landingpage/minifeatures'
import { HeroImage2 } from '@/components/landingpage/heroimage2'
import { HomeFooter } from '@/components/landingpage/homefooter'

export default function Home() {
  return (
   <div className=' bg-white'>
    <AnnouncementBar />
    <NavBar />
    <HeroImage1 />
    <VideoSection />
    <MiniFeatures />
    <HeroImage2 />
    <HomeFooter />

   </div> 
  )
}
