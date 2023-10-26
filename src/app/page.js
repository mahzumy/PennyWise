import Image from 'next/image'

import { AnnouncementBar } from '@/components/landingpage/announcementbar'
import { NavBar } from '@/components/landingpage/navbar'
import { HeroImage1 } from '@/components/landingpage/heroimage1'
import { VideoSection } from '@/components/landingpage/videosection'

export default function Home() {
  return (
   <div className='bg-white'>
    <AnnouncementBar />
    <NavBar />
    <HeroImage1 />
    <VideoSection />
   </div> 
  )
}
