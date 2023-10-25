import Image from 'next/image'

import { AnnouncementBar } from '@/components/landingpage/announcementbar'
import { NavBar } from '@/components/landingpage/navbar'

export default function Home() {
  return (
   <div>
    <AnnouncementBar />
    <NavBar />
   </div> 
  )
}
