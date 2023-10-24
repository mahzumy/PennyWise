import React from 'react'
import { Dashboard } from '@/components/dashboard/dashboard';
import { API_URL } from '@/config/apiUrl';

async function getTransaction() {
  const res = await fetch(`${API_URL}/transaction`, {
      cache: "no-cache",
    });
  const data = await res.json();
  return data;
}

async function getLimit() {
  const res = await fetch(`${API_URL}/transaction?limit=3`, {
      cache: "no-cache",
    });
  const data = await res.json();
  return data;
}

export default async function Page() {
  const { data } = await getTransaction();
  const { limit } = await getLimit();
  
  return (
    <div> 
      <Dashboard transactionData={data} limit={limit}/>
    </div>  
  )
}
