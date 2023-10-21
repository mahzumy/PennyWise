'use client';
import { useRouter } from 'next/navigation';
import React from 'react'

export const DashboardLastTransaction = ({transactionData}) => {
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
        <div className='w-full p-6 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700'>
          <div className='flex justify-between'>
            <div className='mb-2 text-2xl font-semibold tracking-tight  text-gray-900 dark:text-white'>Last Transaction</div>
            <div className='mb-2 text-md tracking-tight text-gray-400 dark:text-white'>More...</div>
          </div>
          <div>
          {transactionData.map(({id, title, type, category, date, amount}) => {
              if(type !== "income"){
                return(
                  <div key={id} className='p-2 my-2 rounded-md px-3'>
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
                <div key={id} className='p-2 my-2 rounded-md px-3'>
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

