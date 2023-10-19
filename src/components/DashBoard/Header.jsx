"use client"
import React from 'react'
import { useState } from 'react'
import { Sidebar } from './Sidebar'

export const Header = () => {

  const [isSidebarVisible,setSidebarVisible] = useState(false);

  const handleMouseEnter = () =>
  {
    setSidebarVisible(true)
  }
  
  const handleMouseLeave = () => {
    setSidebarVisible (false)
  }

  return (
    <div>
        <header className="flex align-middle bg-[#1d4ed8]">
          <div onMouseEnter={handleMouseEnter} onMouseLeave = {handleMouseLeave}>
            <button className='m-1 hover:bg-[#bfdbfe] rounded'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-8 h-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
            {isSidebarVisible && <Sidebar />}
            <h1 className="text-white">PennyWise</h1>
          <div>
            <button className='m-2 hover:bg-[#bfdbfe] rounded'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-8 h-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>
          </div>   
        </header>
    </div>
  )
}
