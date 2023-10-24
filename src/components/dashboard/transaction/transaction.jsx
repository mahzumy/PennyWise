'use client'
import React from 'react'
import Image from 'next/image'
import { TransactionCard } from '@/components/dashboard/transaction/transaction.card'
import { DashboardHeader } from '@/components/dashboard/dashboard.header'

export const Transaction = () => {
  return (
    <div className='w-[450px] justify-center items-center m-auto h-screen space-y-2 mb-4'>
        <DashboardHeader />
        <TransactionCard />
    </div>
  )
}
