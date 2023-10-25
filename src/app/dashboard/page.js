import React from 'react'
import { Dashboard } from '@/components/dashboard/dashboard';
import { API_URL } from '@/config/apiUrl';

async function getTransaction() {
  try {
    const res = await fetch(`${API_URL}/transaction`,);
    const data = await res.json();
    return data;
  } catch (error) {
    return {messege: "error"}
  }
}

async function getLimit() {
  try {
    const res = await fetch(`${API_URL}/transaction?limit=3`,);
    const data = await res.json();
    return data;
  } catch (error) {
    return {messege: "error"}
  }
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
