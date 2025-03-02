import { connectionStr } from "@/lib/db";
import { Product } from "@/lib/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(){
    await mongoose.connect(connectionStr)
    const data =await Product.find()
    return NextResponse.json({result:data, success:true})
}

export async function POST(request){
    await mongoose.connect(connectionStr)
    const payload = await request.json()
    let product = new Product(payload)
    const result = await product.save()
    return NextResponse.json({result ,success:true})
}