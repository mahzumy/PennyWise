'use client'
import React from 'react'
import { useRegister } from '@/components/hooks/useRegister'

export const Register = () => {
    const { handleChange, handleSubmitRegister } = useRegister();

  return (
    <div className='flex justify-center items-center m-auto h-screen'>
    <div className='w-[400px] space-y-2'>
        <input className='w-full border-2 rounded-md border-black' type='text' name='name' placeholder='Full Name' onChange={handleChange}/>
        <input className='w-full border-2 rounded-md border-black ' type='email' name='email' placeholder='email@something.com' onChange={handleChange}/>
        <input className='w-full border-2 rounded-md border-black' type='password' name='password' placeholder='password' onChange={handleChange}/>
        <button className='bg-sky-500 border-2 rounded-md w-full border-black' onClick={handleSubmitRegister}>Register</button>
       
    </div>
    </div>
  )
}
