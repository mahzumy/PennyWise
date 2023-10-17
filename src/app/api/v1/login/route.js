import { NextResponse } from "next/server";
import { prisma } from "@/utils/prisma";
import bcrypt from "bcrypt";
import { sign } from "jsonwebtoken";

export async function POST(req){
    const { email, password } = await req.json();

    try {
        const findUser = await prisma.user.findUnique({
            where: {
                email
            }
        })

        //check if user exist
        if(!findUser){
            return NextResponse.json({message:"User not found"},{status:401})
        }

        //compare password
        const hashedPass = findUser.password;
        const isPasswordValid = await bcrypt.compare(password, hashedPass);

        if(!isPasswordValid){
            return NextResponse.json({message:"Invalid Password"},{status:401});
        }
       
        const payLoad = {
            id: findUser.id,
            name: findUser.name,
            email: findUser.email
        }
        const token = sign(payLoad, process.env.SECRET_KEY, {expiresIn: "7d"});
        return NextResponse.json({data:payLoad, token, message:"User Login Succesfully"},{status:200})
       
    } catch (error) {
        console.log(error)
        return NextResponse.json({message:"Error"},{status:500})
    }
}