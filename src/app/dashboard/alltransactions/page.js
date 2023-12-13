import React from 'react'
import { Alltransactions } from '@/components/dashboard/all.transactions/all.transactions';
import { API_URL } from '@/config/apiUrl';
import { cookies } from "next/headers";
import { decode } from 'jsonwebtoken';

async function getTransaction(userId) {
  try {
    const res = await fetch(`${API_URL}/transaction?userId=${userId}`,{
      cache: "no-store",
    });
    const data = await res.json();
    return data;
  } catch (error) {
    return {message: "Error"}
  }
}

export default async function page() {
    const token = cookies().get("token").value
    const {id: userId} = decode(token)
    const { data } = await getTransaction(userId);
  return (
    <Alltransactions transactionData={data}/>
  )
}
