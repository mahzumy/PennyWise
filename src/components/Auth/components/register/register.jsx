'use client'
import React from 'react'
import { useRegister } from '@/components/hooks/useRegister'
import Image from 'next/image'

export const Register = () => {
    const { handleChange, handleSubmitRegister } = useRegister();

  return (
    <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto space-y-5 md:h-screen lg:py-0'>
      <a href="#" className='flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white'>
        <img 
          src="/asset/pennywise-dummy-logo.png"
          width={240}
          alt="logo-pennywise"
          />
      </a>
      <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
        <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
          <h2>Register new account</h2>
          <div className='w-[400px] space-y-2'>
              <div>
                <label>Full Name</label>
                <input type='text' name='name' placeholder='Full Name' onChange={handleChange}/>
              </div>
              <div>
                <label>Email</label>
                <input type='email' name='email' placeholder='email@something.com' onChange={handleChange}/>
              </div>
              <div>
                <label>Password</label>
                <input type='password' name='password' placeholder='password' onChange={handleChange}/>
              </div>
              <div>
                <label>Re-type Password</label>
                <input type='password' name='password' placeholder='Re-type password'/>
              </div>
              <button className='w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800' onClick={handleSubmitRegister}>Register</button>
            
          </div>
      </div>
    </div>
    </div>
  )
}
