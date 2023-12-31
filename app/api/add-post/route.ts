import {NextResponse} from "next/server";
import prisma from "../../lib/prisma";

export async function POST(request: any) {
    const response = await request.json();

    const {title, content} = response;
    console.log(response);

    const result = await prisma.post.create({
        data: {
            title,
            content,
            author: {create: {
                name: "Dwight"
            }}
        }
    })

    return NextResponse.json({result})
}