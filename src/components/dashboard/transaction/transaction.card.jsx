'use client'
import React from 'react'
import { TransactionInput } from '@/components/dashboard/transaction/transaction.input'


export const TransactionCard = () => {
  return (
    <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
        <TransactionInput />
      </div>
  )
}
