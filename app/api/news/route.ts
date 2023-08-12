import { NextResponse } from "next/server";
import { newsData } from "@/data";

export async function GET (){
    return NextResponse.json({news:newsData.news})
}