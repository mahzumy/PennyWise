import { useState } from "react";

export const useRegister = () => {
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterData({ ...registerData, [name]: value });
  };

  const handleSubmitRegister = async () => {
    const { name, email, password } = registerData;
    const res = await fetch("http://localhost:3000/api/v1/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      }
    );
    setRegisterData({ name: "", email: "", password: "" });
    };

  return { handleChange, handleSubmitRegister };
};