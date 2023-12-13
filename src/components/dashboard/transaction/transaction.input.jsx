"use client"
import React from 'react'
import { useTransaction } from '@/components/hooks/useTransaction';
import { Option } from './option';

export const TransactionInput = ({userId}) => {
   //console.log(userId)
  const {trans, handleChange, handleAddTransaction} = useTransaction({userId});

  return (
    <div className='p-6 space-y-8 md:space-y-8 sm:p-8'>
          <h2>Add transaction</h2>
        <div className='flex justify-center items-center m-auto'>
            <div className='w-[450px] space-y-4'>
                <div >
                    <label className='w-full'>Title</label>
                    <input value={trans.title} name='title' type='text' placeholder='Title' className='w-full border-2' onChange={handleChange}/>
                </div>
                <div >
                    <label className='w-full'>Category</label>
                    <Option trans={trans} />
                </div>
                <div >
                    <label className='w-full'>Date</label>
                    <input value={trans.date} name='date' type='date' placeholder='Catatan' className='w-full border-2' onChange={handleChange}/>
                </div>
                <div >
                    <label className='w-full'>Amount</label>
                    <input value={trans.amount} name='amount' type='number' inputMode="numeric" pattern="[0-9]*" placeholder='Amount' className='w-full border-2' onChange={handleChange}/>
                </div>
                <div >
                    <label className='w-full'>Note</label>
                    <textarea value={trans.notes} name='notes' type='text' placeholder='Catatan' className='w-full border-2' onChange={handleChange}></textarea>
                </div>
                <button className='w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800' onClick={handleAddTransaction}>Add Transaction</button>
            </div>
        </div>
    </div>
  )
}
