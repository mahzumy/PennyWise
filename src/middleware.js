import React from 'react'
import { NextResponse } from "next/server";
import * as jose from "jose";

export default async function middleware(request) {
    const token = request.cookies.get("token")?.value;
    const secretKey = new TextEncoder().encode(process.env.SECRET_KEY);

    try {
        const isValid = await jose.jwtVerify(token, secretKey);
    } catch (error) {
        return NextResponse.redirect(new URL("/login", request.url));
    }
    return NextResponse.next();
}

export const config = {
    matcher: "/dashboard",
  };
