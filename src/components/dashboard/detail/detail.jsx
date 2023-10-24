"use client"
import React from 'react'
import { useDetail } from '@/components/hooks/useDetail';
import { Option } from './option';
import { useRouter } from 'next/navigation';
import { DashboardHeader } from '../dashboard.header';

export const Detail = ({transaction}) => {
    const {trans, handleChange, handleUpadteTransaction, handleDelete} = useDetail({transaction});
    const router = useRouter();

    return ( 
    //<div>Update</div>
    <div className='w-[450px] justify-center items-center m-auto h-screen space-y-2 mb-10'>
        <DashboardHeader />
        <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
            <div className='p-6 space-y-4 md:space-y-8 sm:p-8'>
                <div className='flex space-x-1 cursor-pointer' onClick={()=>router.push(`/dashboard`)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-7 h-7 stroke-blue-600">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                    <div className=' text-lg text-blue-600'>Back</div>
                </div>
                <hr />
                <h2>Detail transaction</h2>
            <div className='flex justify-center items-center m-auto'>
                <div className='w-[450px] space-y-4'>
                    <div>
                        <label className='w-full'>Title</label>
                        <input value={trans.title} name='title' type='text' placeholder='Title' className='w-full border-2' onChange={handleChange}/>
                    </div>
                    {/* <div >
                        <label className='w-full'>Type</label>
                        <input value={trans.type} name='type' type='text' placeholder='Type' className='w-full border-2' onChange={handleChange}/>
                    </div> */}
                    <div >
                        <label className='w-full'>Category</label>
                        {/* <input value={trans.category} name='category' type='text' placeholder='Category' className='w-full border-2' onChange={handleChange}/> */}
                        <Option trans={trans} />
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
                        <input value={trans.notes} name='notes' type='text' placeholder='Catatan' className='w-full border-2' onChange={handleChange}/>
                    </div>
                    <div className=' space-y-3'>
                        <button className='w-full flex items-center justify-center text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-[#F7BE38]/50' onClick={handleUpadteTransaction}>
                                <svg className='w-4 h-4 mr-2 -ml-1' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                                </svg>
                                Update
                            </button>
                        <button className='w-full flex items-center justify-center ocus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900' onClick={handleDelete} >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                            </svg>

                            Delete
                        </button>
                    </div>
                        
                </div>
            </div>
            </div>
        </div>
    </div>
        
      )
}
