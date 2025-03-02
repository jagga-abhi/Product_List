import { user } from "@/util/db";
import { NextResponse } from "next/server";

export function GET(){
    const data = user
    return NextResponse.json(data,{status:200})
}

export async function POST(request){
    let payload = await request.json()
    if(!payload?.name || !payload?.age || !payload?.email){
        return NextResponse.json({result:"required field not found",success:false},{status:404})
    }
    return NextResponse.json({result:"New User created", success:true},{status:200})
}