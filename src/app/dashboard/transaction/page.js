import React from 'react'
import { Transaction } from '../../../components/dashboard/transaction/transaction'
import { cookies } from "next/headers"
import { decode } from 'jsonwebtoken';

export default function Page() {
  const token = cookies().get("token").value
  const {id: userId} = decode(token)
  //console.log(userId)
  return (
    <Transaction userId={userId} />
  )
}
