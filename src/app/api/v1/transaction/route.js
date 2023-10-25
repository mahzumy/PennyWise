import { prisma } from "@/utils/prisma";
import { NextResponse } from "next/server";

export async function GET(req) {
  const searchParams = req.nextUrl.searchParams;
  const id = searchParams.get("id");
  const limit = searchParams.get("limit");
    
  try {
    if(id){
      const singleTras = await prisma.transactionData.findMany({
        where:{
          id
        }
      })
      return NextResponse.json({data: singleTras ,message:"Single Transaction"},{status: 200})
     } 
    else if(limit){
      const limitTrans = await prisma.transactionData.findMany({
        take: Number(limit),
        orderBy:[
          {
            date: 'desc'
          }
        ] 
      })
      return NextResponse.json({limit: limitTrans ,message:"Limited Transaction"},{status: 200})
    }

    const allTrans = await prisma.transactionData.findMany({
      orderBy:[
        {
          date: 'desc'
        }
      ] 
    });
    return NextResponse.json({data: allTrans ,message:"All Transactions"},{status: 200})
  } 
  catch (error) {
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

export async function PATCH(req){
  const searchParams = req.nextUrl.searchParams;
  const id = searchParams.get("id");
  const { title, type, category, date, amount, notes} = await req.json();
  
   try {
    const tData = await prisma.transactionData.update({
      where:{
        id
      },data:{
        title,
        type,
        category,
        date,
        amount : Number(amount),
        notes,
        userId: "clnt4qxby0000ty8sd46xwf8g",
      }
    })
    return NextResponse.json({data: tData ,message:"Transaction Updated succesfully"},{status: 200})
  } catch (error) {
    return NextResponse.json({message:"Error"},{status:500})
  }
}

export async function DELETE(req){
  const searchParams = req.nextUrl.searchParams;
  const id = searchParams.get("id");

  try {
    const deleteTransaction = await prisma.transactionData.delete({
      where:{
        id
      }
    })
    return NextResponse.json({data: deleteTransaction ,message:"Transaction Deleted succesfully"},{status: 200})
  } catch (error) {
    return NextResponse.json({message:"Error"},{status:500})
  }
}