'use client'
import React from 'react'
import { TransactionInput } from '@/components/dashboard/transaction/transaction.input'
import { useRouter } from 'next/navigation';


export const TransactionCard = () => {
  const router = useRouter();

  return (
    <div className='w-full p-6 bg-white dark:bg-gray-800 dark:border-gray-700 mb-4 space-y-5 px-5'>
          <div className='flex space-x-1 cursor-pointer' onClick={()=>router.push(`/dashboard`)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-7 h-7 stroke-blue-600">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
              <div className=' text-lg text-blue-600'>Back</div>
          </div>
          <hr />
        <TransactionInput />
      </div>
  )
}
