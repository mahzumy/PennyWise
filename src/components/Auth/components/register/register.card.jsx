'use client'
import React from 'react'
import { RegisterInput } from '@/components/Auth/components/register/register.input'


export const RegisterCard = () => {

  return (
    <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
        <RegisterInput />
      </div>
  )
}
