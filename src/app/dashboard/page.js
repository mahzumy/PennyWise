import React from 'react'
import { Dashboard } from '@/components/dashboard/dashboard';

async function getTransaction() {
  const res = await fetch("http://localhost:3000/api/v1/transaction", {
      cache: "no-cache",
    });
  const data = await res.json();
  return data;
}


export default async function Page() {
  const { data } = await getTransaction();
  return (
    <div> 
      <Dashboard transactionData={data}/>
    </div>  
  )
}
