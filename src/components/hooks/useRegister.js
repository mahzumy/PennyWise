import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from 'react-hot-toast'

export const useRegister = () => {
  const router = useRouter();
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    retypePassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterData({ ...registerData, [name]: value });
  };

  const handleSubmitRegister = async () => {
    toast.loading("Registration");
    const { name, email, password, retypePassword } = registerData;

    if(password === retypePassword){
      const res = await fetch("http://localhost:3000/api/v1/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, password }),
        }
      );
      setRegisterData({ name: "", email: "", password: "", retypePassword: "" });
      toast.remove();
      toast.success("Registration Successful")
      router.push("/login")
    } else{
      toast.error("password not match")
      }
    
    };

  return { registerData, handleChange, handleSubmitRegister };
};