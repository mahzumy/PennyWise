import React from 'react'
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export const useTransaction = () => {
    const router = useRouter();

    const [trans, setTrans] = useState({
        title: "",
        type: "",
        category: "",
        dete:"",
        amount: 0,
        notes: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTrans({ ...trans, [name]: value });
      };

    const handleAddTransaction = async () => {
        const { title, type, category, date, amount, notes } = trans;
       
        const res = await fetch("http://localhost:3000/api/v1/transaction", 
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ title, type, category, date, amount, notes }),
            }
        );
        router.refresh();
        router.push('/dashboard')
      }


  return {trans, handleChange, handleAddTransaction}
}
