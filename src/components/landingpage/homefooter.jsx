import React from 'react'

export const HomeFooter = () => {
  return (
    <footer className="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800 mt-28 md:mt-2">
        <div className="mx-auto max-w-screen-xl text-center">
            <a href="/" className="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white">
                <img src="/asset/pennywise-dummy-blue.png" alt="" className='h-10 brightness-0' />
            </a>
            <p className="my-6 text-gray-500 dark:text-gray-400">A collaborative project by Infinitum team on Devscale.id</p>
            <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6 ">Mahzumy</a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6">Nuha F</a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6 ">Ahmad Adam</a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6">Indra Permana</a>
                </li>
            </ul>
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://devscale.id" className="hover:underline">Infinitum - Devscale.id</a>. All Rights Reserved.</span>
        </div>
    </footer>
  )
}
