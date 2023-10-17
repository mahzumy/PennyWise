'use client'
import React from 'react'
import { useRegister } from '@/components/hooks/useRegister'

export const RegisterInput = () => {
  const { registerData, handleChange, handleSubmitRegister } = useRegister();

  return (
    <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
          <h2>Register new account</h2>
          <div className='w-[400px] space-y-2'>
              <div>
                <label>Full Name</label>
                <input value={registerData.name} type='text' name='name' placeholder='Full Name' onChange={handleChange}/>
              </div>
              <div>
                <label>Email</label>
                <input value={registerData.email} type='email' name='email' placeholder='email@something.com' onChange={handleChange}/>
              </div>
              <div>
                <label>Password</label>
                <input value={registerData.password} type='password' name='password' placeholder='password' onChange={handleChange}/>
              </div>          
              <div>
                <label>Re-type Password</label>
                <input value={registerData.retypePassword} type='password' name='retypePassword' placeholder='password' onChange={handleChange}/>
              </div>          
            </div>
            <button className='w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800' onClick={handleSubmitRegister}>Register</button>
        </div>
  )
}
