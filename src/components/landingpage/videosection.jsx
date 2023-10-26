import React from 'react'

export const VideoSection = () => {
  return (
    <div className='bg-blue-600 py-20'>
        <div className=' bg-blue-600 max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 space-y-20'>
            <div className=' text-white tracking-normal'>
                <h2 className=' text-3xl md:text-4xl xl:text-5xl w-3/4'>Designed with the needs of individuals seeking fast transactions in mind.</h2>
            </div>
            <div>
                <video
                    src="https://www.youtube.com/watch?v=MRQ69XeDxVk"
                    loop
                    muted
                    poster="/asset/pastedimage-v2.png"
                    autoPlay
                    className='w-full cursor-pointer overflow-hidden border-white border-2 rounded-md '
                />
            </div>
            <div className='space-y-10'>
                <h3 class="mb-4 text-4xl md:text-5xl xl:text-6xl font-extrabold text-gray-900 dark:text-white "><span className='text-transparent bg-clip-text bg-gradient-to-r to-emerald-400 from-blue-50'>Spend, Record, Track</span></h3>
                <p className='text-xl text-white w-3/4'>At Pennywise, we've made it incredibly simple for you to manage your finances. With our user-friendly features, you can effortlessly spend, easily record your expenses, and consistently track your financial journey. Take control of your money without the fuss."</p>
                <div className=' text-emerald-400 font-semibold text-lg'>
                    <a href="/register" className=' cursor-pointer pb-2 border-b-2 border-emerald-400'>Join Beta Product Now!</a>
                </div>
            </div>
        </div>
    </div>
  )
}
