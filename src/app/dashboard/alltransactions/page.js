import React from 'react'
import { Alltransactions } from '@/components/dashboard/all.transactions/all.transactions';
import { API_URL } from '@/config/apiUrl';

async function getTransaction() {
  const res = await fetch(`${API_URL}/data`, {
      cache: 'force-cache',
    });
  const data = await res.json();
  console.log(data)
  return data;
}

export default async function page() {
    const { data } = await getTransaction();
    // console.log(data)
  return (
    <div></div>
    // <Alltransactions transactionData={data}/>
  )
}
