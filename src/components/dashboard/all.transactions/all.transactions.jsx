'use client'
import React from 'react'
import { useState } from 'react';
import { useRouter } from 'next/navigation';

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
     <div className='w-[450px] justify-center items-center m-auto h-screen'>
      <div className='text-xl my-4 text-center'>All Transactions</div>
      <div className='grid grid-cols-3 gap-2'>
        <select onChange={handleFilter}>
          <option value="all">All</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>
      
      <div>
          {data.map(({id, title, type, category, date, amount}) => {
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
  )
}
