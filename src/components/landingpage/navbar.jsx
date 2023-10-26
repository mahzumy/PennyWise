import React from 'react'

export const NavBar = () => {
  return (
        <nav className='bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600'>
            <div className='bg-blue-600 text-green-300 w-full flex m-auto justify-center pt-3 pb-2'>
                <div className=''>
                Join our Limited Beta Product ---<a href="#" className=' underline font-semibold'> See Now</a>
                </div>
            </div>
            <div className=' sm:max-w-lg md:max-w-screen-xl flex items-center justify-between mx-auto p-4'>
                <div>
                    <a href="/" className='flex items-center'>
                        <img src="/asset/pennywise-dummy-logo.png" className='h-6 md:h-8 mr-0' alt="Pennywise Logo" />
                    </a>
                </div>
                <div class="flex space-x-2 md:order-2">
                    <a className='invisible md:visible sm:w-0 md:w-fit' href="/login">
                        <button type="button" className='text-blue-600 hover:text-white border border-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Login</button>
                    </a>
                    <a href="/register">
                        <button type="button" className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Get started</button>
                    </a>
                </div>
                    <div className='items-center justify-between hidden w-full md:flex md:w-auto md:order-1' id="navbar-sticky">
                        <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium text-lg border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Features</a>
                        </li>
                        <li>
                            <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Resources</a>
                        </li>
                        <li>
                            <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Support</a>
                        </li>
                        </ul>
                    </div>
            </div>
        </nav>
  )
}
