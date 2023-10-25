import { prisma } from "@/utils/prisma";
import { NextResponse } from "next/server";

export async function GET() {
    const allTrans = await prisma.transactionData.findMany({
    });
    return NextResponse.json({data: allTrans ,message:"All Transactions"},{status: 200})
}
