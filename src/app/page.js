import Image from 'next/image'

import { NavBar } from '@/components/landingpage/navbar'
import { HeroImage1 } from '@/components/landingpage/heroimage1'
import { VideoSection } from '@/components/landingpage/videosection'

export default function Home() {
  return (
   <div className='bg-white'>
    <NavBar />
    <HeroImage1 />
    <VideoSection />
   </div> 
  )
}
