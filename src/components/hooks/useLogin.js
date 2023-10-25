import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'
import toast from 'react-hot-toast'
import { API_URL } from '@/config/apiUrl'

export const useLogin = () => {
    const router = useRouter();
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setLoginData({ ...loginData, [name]: value })
    }

    const handleSubmitLogin = async () => {
        toast.loading("try to log in...");
        const { email, password } = loginData
        const res = await fetch(`${API_URL}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
            
        })
        toast.remove();

        if(!res.ok){
            toast.error("Login Error")
            setLoginData({ email: "", password: "" });
        } else{
            toast.success("Login Successful");
            router.push("/dashboard");
        }

    }

  return { loginData, handleChange, handleSubmitLogin }
}
