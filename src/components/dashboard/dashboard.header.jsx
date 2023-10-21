'use client'
import React from 'react'
import Image from 'next/image'

export const DashboardHeader = () => {
  return (
    <div className='w-[450px] justify-center items-center m-auto'>
        <div className='my-5 flex justify-center bg-blue-100 rounded-lg py-16 w-full'>
          <img src="/asset/pennywise-dummy-logo.png" width={160} alt="logo-pennywise" />
        </div>
    </div>
    )
}