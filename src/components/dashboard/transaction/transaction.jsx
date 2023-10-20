"use client"
import React from 'react'
import { useTransaction } from '@/components/hooks/useTransaction';

export const Transaction = () => {
  const {trans, handleChange, handleAddTransaction} = useTransaction();

  return (
    <div className='flex justify-center items-center m-auto h-screen'>
    <div className='w-[450px] space-y-2'>
        <div >
            <label className='w-full'>Title</label>
            <input value={trans.title} name='title' type='text' placeholder='Title' className='w-full border-2' onChange={handleChange}/>
        </div>
        <div >
            <label className='w-full'>Type</label>
            <input value={trans.type} name='type' type='text' placeholder='Type' className='w-full border-2' onChange={handleChange}/>
        </div>
        <div >
            <label className='w-full'>Category</label>
            <input value={trans.category} name='category' type='text' placeholder='Category' className='w-full border-2' onChange={handleChange}/>
        </div>
        <div >
            <label className='w-full'>Date</label>
            <input value={trans.date} name='date' type='date' placeholder='Catatan' className='w-full border-2' onChange={handleChange}/>
        </div>
        <div >
            <label className='w-full'>Amount</label>
            <input value={trans.amount} name='amount' type='number' placeholder='Amount' className='w-full border-2' onChange={handleChange}/>
        </div>
        <div >
            <label className='w-full'>Note</label>
            <textarea value={trans.notes} name='notes' type='text' placeholder='Catatan' className='w-full border-2' onChange={handleChange}></textarea>
            {/* <input /> */}
        </div>
        <button className='bg-sky-500 border-2 rounded-md w-full border-black' onClick={handleAddTransaction}>Add Transaction</button>
    </div>
    </div>
  )
}