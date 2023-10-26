import React from 'react'
import Link from 'next/link'

export const AnnouncementBar = () => {
  return (
    <div className='bg-blue-600 text-green-300 z-40 w-full flex m-auto justify-center pt-4 pb-3'>
        <div className=''>
        Join our Limited Beta Product ---<a href="#" className=' underline font-semibold'> See Now</a>
        </div>
    </div>
  )
}
