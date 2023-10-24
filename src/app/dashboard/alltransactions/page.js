import React from 'react'
import { Alltransactions } from '@/components/dashboard/all.transactions/all.transactions';
import { API_URL } from '@/config/apiUrl';

async function getTransaction() {
  const res = await fetch(`${API_URL}/transaction`, {
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
