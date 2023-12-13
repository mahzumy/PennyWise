'use client'
import React from 'react'
import Image from 'next/image'
import { TransactionCard } from '@/components/dashboard/transaction/transaction.card'
import { DashboardHeader } from '@/components/dashboard/dashboard.header'

export const Transaction = ({userId}) => {
  //console.log(userId)
  return (
    <div className='w-[450px] justify-center items-center m-auto h-screen mb-4'>
        <DashboardHeader />
        <TransactionCard userId={userId}/>
    </div>
  )
}
