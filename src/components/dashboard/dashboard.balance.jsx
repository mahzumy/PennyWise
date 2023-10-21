'use client';
import { useRouter } from 'next/navigation';
import React from 'react'
import Image from 'next/image';

export const DashboardBalance = ({transactionData}) => {
    const { data } = await getTransaction();

    const router = useRouter();
    let balance=0;
    
    transactionData.map(({amount, type}) => {
      if(type === "income"){
      
        balance += amount;
      } else {
        
        balance -= amount;
      }    
    })

    const numBalance = new Intl.NumberFormat('ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits:0,
    }).format(balance);

    const newAmount = (amount) => {
      const numAmount = Intl.NumberFormat('ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits:0,
      }).format(amount)
      return numAmount;
    } 

    
  return (
    <div className='w-[450px] justify-center items-center m-auto h-screen'>
      <div className=' space-y-5'>
        <div className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
          <div className='flex justify-between'>
            <div className='mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white'>Balance :</div>
            <div className='mb-2 text-md tracking-tight text-gray-400 dark:text-white'>More...</div>
          </div>
          <hr className='p-2' />
          <div className='className= mb-2 text-l tracking-tight text-gray-400 dark:text-white'>
            TODAY
          </div>
          <div className='mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white'>
            {numBalance}
          </div>
        </div>
        <div className='w-full p-6 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700'>
          <div className='flex justify-between'>
            <div className='mb-2 text-2xl font-semibold tracking-tight  text-gray-900 dark:text-white'>Last Transaction</div>
            <div className='mb-2 text-md tracking-tight text-gray-400 dark:text-white'>More...</div>
          </div>
        </div>
      </div>
    </div>
  )
}

