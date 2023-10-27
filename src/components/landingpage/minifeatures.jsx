import React from 'react'

export const MiniFeatures = () => {
  return (
    <div className='pt-20 pb-2'>
        <div className=' flex max-w-screen-xl px-4 py-8 gap lg:gap-8 xl:gap-0 lg:py-16 mx-auto'>
            <div className='sm:inline-block md:flex w-screen'>
                <div className=' items-center px-10 pb-24 sm:border-b border-blue-600 w-fit space-y-4'>
                    <h3 className='text-center text-black text-3xl'>
                    Track your <span className='text-blue-600'>Expenses</span>
                    </h3>
                    <p className='text-center text-lg tracking-tight'>The tools you need for a clear view of your spending, so you're well-informed when making financial decisions</p>
                </div>
                <div className=' items-center px-10 pb-24 sm:border-b md:border-l md:border-r md:border-b border-blue-600 w-dit space-y-4'>
                    <h3 className='text-center text-black0 text-3xl'>
                        Track your <span className='text-blue-600'>Income</span>
                    </h3>
                    <p className='text-center text-lg tracking-tight'>Monitoring your earnings becomes a breeze, giving you a clear picture of your financial inflow and empowering smarter money management</p>
                </div>
                <div className=' items-center px-10 pb-24 sm:border-b border-blue-600 w-fit space-y-4'>
                    <h3 className=' text-center text-black text-3xl'>
                        Track your <span className='text-blue-600'>Habit</span>
                    </h3>
                    <p className='text-center text-lg tracking-tight'>Gain full visibility into your spending habits, helping you make informed financial decisions with confidence.</p>
                </div>
                <hr className=' mx-auto md:hidden border-blue-600 w-1/3' />
            </div>
        </div>
    </div>
    
  )
}
