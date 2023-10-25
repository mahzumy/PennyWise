import React from 'react'
import { Alltransactions } from '@/components/dashboard/all.transactions/all.transactions';
import { API_URL } from '@/config/apiUrl';

async function getTransaction() {
  try {
    const res = await fetch(`${API_URL}/transaction`,);
    const data = await res.json();
    return data;
  } catch (error) {
    return {message: "Error"}
  }
}

export default async function page() {
    const { data } = await getTransaction();

  return (
    <Alltransactions transactionData={data}/>
  )
}
