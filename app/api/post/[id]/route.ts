import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";

export async function DELETE(request: any, {params}: any){
    const id = params.id;
    
    const post = await prisma.post.delete({
        where: {id}
    })

    return NextResponse.json(post)
}