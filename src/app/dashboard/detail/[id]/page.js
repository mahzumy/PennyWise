import React from 'react'
import { Detail } from '@/components/dashboard/detail/detail';
import { API_URL } from '@/config/apiUrl';

async function getSingleTransaction(id){
  const res = await fetch(`${API_URL}/transaction?id=${id}`,{
    cache: "no-cache",
  });
  const data = await res.json();
  return data;
}

export default async function Page({params}) {
  const { id } = params;
  const { data } = await getSingleTransaction(id);
  
  return (
    <div>
      <Detail transaction={data[0]}/>
    </div>
  )
}
