'use client'
import React from 'react'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { DashboardHeader } from '@/components/dashboard/dashboard.header';

export const Alltransactions = ({transactionData}) => {
  const [data, setData] = useState(transactionData)
  const router = useRouter();
 
  const handleFilter = (e) => {
    const filter = e.target.value

    if(filter !== "all"){
      const filteredData = transactionData.filter((item)=> item.type === filter) 
      setData(filteredData)
    }else{
      setData(transactionData)  
    }    
    
  }

  const newAmount = (amount) => {
    const numAmount = Intl.NumberFormat('ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits:0,
    }).format(amount)
    return numAmount;
  } 

  return (
     <div className='w-[450px] justify-center items-center m-auto space-y-2'>
      <DashboardHeader />
      <div className='w-full p-6 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 mb-4 space-y-5'>
        <div className='flex space-x-1 cursor-pointer' onClick={()=>router.push(`/dashboard`)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-7 h-7 stroke-blue-600">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
            <div className=' text-lg text-blue-600'>Back</div>
        </div>
        <hr />
        <div className='mb-2 text-2xl font-semibold tracking-tight  text-gray-900 dark:text-white'>All Transactions</div>
        <div className='flex justify-between my-2 items-center mx-2'>
          <div className='grid grid-cols-3 gap-2'>
            <select className=' min-w-max' onChange={handleFilter}>
              <option value="all">All</option>
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
          </div>
          <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 h-fit dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' onClick={() => router.push('/dashboard/transaction')}>Tambah</button>
        </div>
        
        <div>
            {data?.map(({id, title, type, category, date, amount}) => {
                if(type !== "income"){
                  return(
                    <div key={id} className='p-2 my-2 rounded-md px-3 cursor-pointer' onClick={()=>router.push(`/dashboard/detail/${id}`)}>
                      <hr className='py-2' />
                      <div className='flex justify-between'>
                        <div className='mb-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white'>{category}</div>
                        <div className='text-lg font-medium text-red-500'>- { newAmount(amount)}</div>
                      </div>
                      <div className='flex justify-between'> 
                        <div className='mb-2 text-md tracking-tight text-gray-500 dark:text-white'>{title}</div>
                        <div className='mb-2 text-md tracking-tight text-gray-500 dark:text-white'>{date}</div>
                      </div>
                    </div>
                  )
                }
                
                return(
                  <div key={id} className='p-2 my-2 rounded-md px-3 cursor-pointer' onClick={()=>router.push(`/dashboard/detail/${id}`)}>
                    <hr className='py-2' />
                    <div className='flex justify-between'>
                      <div className='mb-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white'>{category}</div>
                      <div className='text-lg font-medium text-green-500'>+{ newAmount(amount)}</div>
                    </div>
                    <div className='flex justify-between'> 
                      <div className='mb-2 text-md tracking-tight text-gray-500 dark:text-white'>{title}</div>
                      <div className='mb-2 text-md tracking-tight text-gray-500 dark:text-white'>{date}</div>
                    </div>
                  </div>
                ) 
              })}
          </div>
      </div>
    </div>
  )
}
