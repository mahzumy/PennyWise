import React from 'react'

export const HeroImage2 = () => {
  return (
    <div>
        <section className='bg-white dark:bg-gray-900'>
            <div className='gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6'>
                <img className=' sm:h-4 md:h-1/2' src="asset/pennywise-iphone-mockup.png" alt="dashboard image" />
                <div className='mt-4 md:mt-0'>
                    <h2 className='max-w-xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white text-center md:text-left '>Everything you get with <span className='text-transparent bg-clip-text bg-gradient-to-r to-emerald-400 from-blue-600'>Pennywise</span></h2>
                    <p className='max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 text-center md:text-left'>Cultivate financial wisdom with Pennywise: Track, save, and budget wisely – every penny counts on your path to prosperity!</p>
                    <div className='grid justify-items-center'>
                        <a href="/register" className='inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900'>
                            Get started
                            <svg className='ml-2 -mr-1 w-5 h-5' fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
