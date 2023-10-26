import React from 'react'

export const VideoSection = () => {
  return (
    <div className='bg-blue-600 py-20'>
        <div className='m bg-blue-600 max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 space-y-20'>
            <div className=' text-white tracking-normal'>
                <h2 className=' text-5xl w-3/4'>Designed with the needs of individuals seeking fast transactions in mind.</h2>
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
            <div className='space-y-4'>
                <h3 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-400 from-blue-50">Spend, Record, Track</span></h3>
                <p className='text-xl text-white w-3/4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem expedita eligendi ipsa error adipisci, veniam id quasi iusto corporis earum nihil tenetur blanditiis laboriosam quibusdam molestias similique hic? Expedita, iste?</p>
            </div>
            <div>Explore Pricing Plan</div>
        </div>
    </div>
  )
}
