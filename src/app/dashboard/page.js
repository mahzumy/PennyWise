import React from 'react'
import { Dashboard } from '@/components/dashboard/dashboard';
import { API_URL } from '@/config/apiUrl';
import { cookies } from "next/headers"
import { decode } from 'jsonwebtoken';

async function getTransaction(userId) {
  try {
    const res = await fetch(`${API_URL}/transaction?userId=${userId}`,{
      cache: "no-store",
    });
    const data = await res.json();
    return data;
  } catch (error) {
    return {messege: "error"}
  }
}

// async function getLimit() {
//   try {
//     const res = await fetch(`${API_URL}/transaction?limit=3`,);
//     const data = await res.json();
//     return data;
//   } catch (error) {
//     return {messege: "error"}
//   }
// }

export default async function Page() {
  const token = cookies().get("token").value
  const {id: userId} = decode(token)
  
  const {data} = await getTransaction(userId);
  //const { limit } = await getLimit();
  //console.log(data)

  return (
    <div> 
      <Dashboard transactionData={data}/>
    </div>  
  )
}
