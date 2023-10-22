"use client"
import React from 'react'
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export const useDetail = ({transaction}) => {
    const { id, title, type, category, date, amount, notes} = transaction;
    const router = useRouter();

    const [trans, setTrans] = useState({
        title: title,
        type: type,
        category: category,
        date: date,
        amount: amount,
        notes: notes,
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTrans({ ...trans, [name]: value });
      };

      const handleUpadteTransaction = async () => {
        const { title, type, category, date, amount, notes } = trans;
        
        const res = await fetch(`http://localhost:3000/api/v1/transaction?id=${id}`, 
            {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ title, type, category, date, amount, notes }),
            }
        );
        setTrans({ title:"", type:"", category:"",date:"", amount:0, notes:"" })
        router.refresh()
        router.push('/dashboard')
      }

      const handleDelete = async () => {
        await fetch(`http://localhost:3000/api/v1/transaction?id=${id}`,
            {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        )
        router.refresh()
        router.push('/dashboard')
      }
      
    return {trans, handleChange, handleUpadteTransaction, handleDelete}
}
