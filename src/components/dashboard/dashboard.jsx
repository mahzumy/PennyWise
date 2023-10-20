'use client';
import { useRouter } from 'next/navigation';
import React from 'react'

export const Dashboard = ({transactionData}) => {
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
      <div className='text-xl my-4 text-center'>Dashboard</div>
      <div>
        <button className='border-2 border-black rounded-md' onClick={() => router.push('/dashboard/transaction')}>Tambah</button>
      </div>
      <div>
        <div>Balance : {numBalance}</div>
        
      </div>
      <div>
          {transactionData.map(({id, title, type, category, date, amount}) => {
            if(type !== "income"){
              return(
                <div key={id} className='flex justify-between p-2 my-2 border-2 border-gray-300 rounded-md'>
                  <div>
                    <div>{category}</div>
                    <div>{title}</div>
                  </div>
                  <div className='text-right'> 
                    <div className='text-red-500'>- { newAmount(amount)}</div>
                    <div>{date}</div>
                  </div>
                </div>
              )
            }

            return(
              <div key={id} className='flex justify-between p-2 my-2 border-2 border-gray-300 rounded-md'>
                <div>
                  <div>{category}</div>
                  <div>{title}</div>
                </div>
                <div className='text-right'> 
                  <div className='text-green-500'>+{ newAmount(amount)}</div>
                  <div>{date}</div>
                </div>
              </div>
            )
            
          })}
      </div>
    </div>
  )
}

