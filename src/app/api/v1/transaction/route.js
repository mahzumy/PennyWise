import { prisma } from "@/utils/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const data = await prisma.TransactionData.findMany();
    return NextResponse.json({data: data ,message:"API berjalan sukses"},{status: 200})
  } catch (error) {
    return NextResponse.json({message:"Error"},{status:500})
  }
}

export async function POST(req){
  const {title, type, category, date, amount, notes} = await req.json();
  try {
    const tData = await prisma.transactionData.create({
      data:{
        title,
        type,
        category,
        date,
        amount : Number(amount),
        notes,
        userId: "clnt4qxby0000ty8sd46xwf8g",
      }
    })
    return NextResponse.json({Transaction: tData ,message:"API berjalan sukses"},{status: 200})
  } catch (error) {
    return NextResponse.json({message:"Error"},{status:500})
  }
}