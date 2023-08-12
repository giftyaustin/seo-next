import { newsData } from "@/data"
import { NextResponse } from "next/server"

interface Params {
    params:{id: 'string' }
     
}

export async function GET(req:Request, {params}:Params){
    const news = newsData.news.find((news)=>news.id===params.id)
    if(news){
        return NextResponse.json(news)
    }
}