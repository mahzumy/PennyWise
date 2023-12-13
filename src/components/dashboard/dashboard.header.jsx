'use client'
import React from 'react'
import Image from 'next/image'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'

export const DashboardHeader = () => {
  const router = useRouter()

  const handleLogout = () => {
    Cookies.remove('token');
    router.refresh();
  }

  return (
    <div className='w-[450px] flex justify-between px-8 py-6 bg-blue-700'>
        <div className=''>
          <img src="/asset/pennywise-dummy-white.png" width={120} alt="logo-pennywise" />
        </div>
        <div className='flex space-x-2 cursor-pointer' onClick={handleLogout}>
          <div className=' text-white '>Logout</div>
          <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
      ></path>
    </svg>
        </div>
        
    </div>
    )
}