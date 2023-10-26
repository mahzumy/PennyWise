'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import Image from 'next/image';

import {
  AreaChart,
  Card,
  Metric,
  TabList,
  Tab,
  TabGroup,
  TabPanels,
  TabPanel,
} from "@tremor/react";

const numberFormatter = (value) => Intl.NumberFormat("us").format(value).toString();
    
function sumArray(array, metric) {
  return array.reduce((accumulator, currentValue) => accumulator + currentValue[metric], 0);
}

import { DashboardHeader } from './dashboard.header';

export const Dashboard = ({transactionData, limit}) => {
    const router = useRouter();
    let balance=0, i=0;
    
    transactionData?.map(({amount, type}) => {
      if(type === "income"){
        balance += amount;
      } else {
        balance -= amount;
      }    
    })

    const numBalance = new Intl.NumberFormat('ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits:0,
    }).format(balance);

    const newAmount = (amount) => {
      const numAmount = Intl.NumberFormat('ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits:0,
      }).format(amount)
      return numAmount;
    };

    const incomeGraph = transactionData?.filter((item)=> item.type === "income")?.map(item => ({
      date: item.date,
      Income: item.amount
    }))

    const expenseGraph = transactionData?.filter((item)=> item.type === "expense")?.map(item => ({
      date: item.date,
      Expense: item.amount
    }))
    
    
    // const graph = transactionData.map(item => ({
    //   date: item.createdAt,
    //   amount: item.amount
    // }))
    
  return (
    <div className='w-[450px] justify-center items-center m-auto mb-5 space-y-2'>
      <DashboardHeader />
      <div className=' w-full p-6 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 mb-4 space-y-5'>
        <div className='flex justify-between my-2 items-center mx-2'>
          <div className=' py-4 mb-2 text-3xl text-center font-semibold tracking-tight text-gray-900 dark:text-white'>Dashboard</div>
          <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 h-fit dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' onClick={() => router.push('/dashboard/transaction')}>Tambah</button>
        </div>
        <div className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
          <div className='flex justify-between'>
            <div className='mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white'>Balance :</div>
            <div className='mb-2 text-md tracking-tight text-gray-400 dark:text-white'>More...</div>
          </div>
          <hr className='p-2' />
          <div className='className= mb-2 text-l tracking-tight text-gray-400 dark:text-white'>
            TODAY
          </div>
          <div className='mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white'>
            {numBalance}
          </div>
        </div>
        <div className='w-full p-6 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700'>
          <div className='flex justify-between'>
            <div className='mb-2 text-2xl font-semibold tracking-tight  text-gray-900 dark:text-white'>Last Transaction</div>
            <div className='mb-2 text-md tracking-tight text-gray-400 dark:text-white cursor-pointer' onClick={()=>router.push('/dashboard/alltransactions')}>More...</div>
          </div>
          <div>
          {limit?.map(({id, title, type, category, date, amount}) => {
              if(type !== "income"){
                return(
                  <div key={id} className='p-2 my-2 rounded-md px-3 cursor-pointer' onClick={()=>router.push(`/dashboard/detail/${id}`)}>
                    <hr className='py-2' />
                    <div className='flex justify-between'>
                      <div className='mb-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white'>{category}</div>
                      <div className='text-lg font-medium text-red-500'>- { newAmount(amount)}</div>
                    </div>
                    <div className='flex justify-between'> 
                      <div className='mb-2 text-md tracking-tight text-gray-500 dark:text-white'>{title}</div>
                      <div className='mb-2 text-md tracking-tight text-gray-500 dark:text-white'>{date}</div>
                    </div>
                  </div>
                )
              }
              
              return(
                <div key={id} className='p-2 my-2 rounded-md px-3 cursor-pointer' onClick={()=>router.push(`/dashboard/detail/${id}`)}>
                  <hr className='py-2' />
                  <div className='flex justify-between'>
                    <div className='mb-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white'>{category}</div>
                    <div className='text-lg font-medium text-green-500'>+{ newAmount(amount)}</div>
                  </div>
                  <div className='flex justify-between'> 
                    <div className='mb-2 text-md tracking-tight text-gray-500 dark:text-white'>{title}</div>
                    <div className='mb-2 text-md tracking-tight text-gray-500 dark:text-white'>{date}</div>
                  </div>
                </div>
              ) 
            })}
          </div>
        </div>
        <div className='w-full p-6 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700'>
        <Card className="p-0">
            <TabGroup>
              <TabList>
                <Tab className="p-4 sm:p-6 text-left">
                  <p className="text-md sm:text-base  text-gray-900 dark:text-white">Income</p>
                  <Metric className="mt-2 text-inherit text-red-500 dark:text-red-400">
                    {numberFormatter(sumArray(incomeGraph, "Income"))}
                  </Metric>
                </Tab>
              </TabList>
              <TabPanels>
                <TabPanel className="p-6">
                  <AreaChart
                    className="h-80 mt-10"
                    data={incomeGraph}
                    index="date"
                    categories={["Income"]}
                    colors={["green"]}
                    valueFormatter={numberFormatter}
                    showLegend={false}
                    yAxisWidth={50}
                  />
                </TabPanel>
              </TabPanels>
            </TabGroup>
          </Card>

          <Card className="p-0">
            <TabGroup>
              <TabList>
                <Tab className="p-4 sm:p-6 text-left">
                  <p className="text-md sm:text-base  text-gray-900 dark:text-white">Expense</p>
                  <Metric className="mt-2 text-inherit text-red-500 dark:text-red-400">
                    {numberFormatter(sumArray(expenseGraph, "Expense"))}
                  </Metric>
                </Tab>
              </TabList>
              <TabPanels>
                <TabPanel className="p-6">
                  <AreaChart
                    className="h-80 mt-10"
                    data={expenseGraph}
                    index="date"
                    categories={["Expense"]}
                    colors={["red"]}
                    valueFormatter={numberFormatter}
                    showLegend={false}
                    yAxisWidth={50}
                  />
                </TabPanel>
              </TabPanels>
            </TabGroup>
          </Card>
          </div>
      </div>
    </div>
  )
}

