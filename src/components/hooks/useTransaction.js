import React from 'react'
import { useState } from 'react';

export const useTransaction = () => {
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
        setTrans({ title:"", type:"", category:"", date, amount:0, notes:"" })
        const data = res.json()
        console.log(data)
      }


  return {trans, handleChange, handleAddTransaction}
}
