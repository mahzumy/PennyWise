import React from 'react'
import { Alltransactions } from '@/components/dashboard/all.transactions/all.transactions';

async function getTransaction() {
  const res = await fetch("http://localhost:3000/api/v1/transaction", {
      cache: "no-cache",
    });
  const data = await res.json();
  return data;
}

export default async function page() {
    const { data } = await getTransaction();
  return (
    <Alltransactions transactionData={data}/>
  )
}
