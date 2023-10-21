import React from 'react'
import { Detail } from '@/components/dashboard/detail/detail';

async function getSingleTransaction(id){
  const res = await fetch(`http://localhost:3000/api/v1/transaction?id=${id}`,{
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
