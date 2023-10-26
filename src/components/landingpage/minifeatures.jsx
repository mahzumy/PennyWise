import React from 'react'

export const MiniFeatures = () => {
  return (
    <div className='py-20'>
        <div className=' max-w-screen-xl px-4 py-8 lg:gap-8 xl:gap-0 lg:py-16 mx-auto'>
            <div className=' flex col-span-3 w-full'>
                <div className=' items-center px-10 pb-24 border-r border-b border-blue-600 w-full space-y-4'>
                    <h3 className='text-center text-black text-3xl'>
                    Track your <span className='text-blue-600'>Expenses</span>
                    </h3>
                    <p className='text-center text-lg tracking-tight'>The tools you need for a clear view of your spending, so you're well-informed when making financial decisions</p>
                </div>
                <div className=' items-center px-10 pb-24 border-b border-blue-600 w-full space-y-4'>
                    <h3 className='text-center text-black0 text-3xl'>
                        Track your <span className='text-blue-600'>Income</span>
                    </h3>
                    <p className='text-center text-lg tracking-tight'>Monitoring your earnings becomes a breeze, giving you a clear picture of your financial inflow and empowering smarter money management</p>
                </div>
                <div className=' items-center px-10 pb-24 border-l border-b border-blue-600 w-full space-y-4'>
                    <h3 className=' text-center text-black text-3xl'>
                        Track your <span className='text-blue-600'>Habit</span>
                    </h3>
                    <p className='text-center text-lg tracking-tight'>Gain full visibility into your spending habits, helping you make informed financial decisions with confidence.</p>
                </div>
            </div>
        </div>
    </div>
    
  )
}
