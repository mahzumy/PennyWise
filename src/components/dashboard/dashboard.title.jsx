'use client';
import { useRouter } from 'next/navigation';
import React from 'react'
import Image from 'next/image';

export const DashboardTitle = () => {
  return (
    <div className='w-[450px] justify-center items-center m-auto h-screen'>
      <div className=' space-y-5'>
        <div className='my-5 flex justify-center bg-blue-100 rounded-lg py-16'>
          <img src="/asset/pennywise-dummy-logo.png" width={160} alt="logo-pennywise" />
        </div>
        <div className='flex justify-between my-2 items-center'>
          <div className=' py-4 mb-2 text-3xl text-center font-semibold tracking-tight text-gray-900 dark:text-white'>Dashboard</div>
          <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 h-fit dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' onClick={() => router.push('/dashboard/transaction')}>Tambah</button>
        </div>
      </div>
    </div>
  )
}

