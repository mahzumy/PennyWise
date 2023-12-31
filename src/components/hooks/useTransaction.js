import React from 'react'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { API_URL } from '@/config/apiUrl';

export const useTransaction = ({userId}) => {
    const router = useRouter();

    const [trans, setTrans] = useState({
        title: "",
        type: "",
        category: "",
        dete:"",
        amount: 0,
        notes: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTrans({ ...trans, [name]: value });
      };

    const handleAddTransaction = async () => {
        const { title, type, category, date, amount, notes } = trans;
       
        const res = await fetch(`${API_URL}/transaction`, 
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ title, type, category, date, amount, notes, userId }),
            }
        );
        router.refresh();
        router.push('/dashboard')
      }


  return {trans, handleChange, handleAddTransaction}
}
