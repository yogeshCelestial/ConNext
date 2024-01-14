import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";


// GET http://localhost:3000/api/post/:postId

export async function GET(req: Request, { params }: { params: { postId: string } }) {
    const { postId } = params;
    const post = await prisma.post.findUnique({
        where: {
            id: postId,
        },
    })
    return NextResponse.json({ post });
}

// DELETE http://localhost:3000/api/post/:postId

export async function DELETE(req: Request, { params }: { params: { postId: string } }) {
    const { postId } = params;
    const deleted = await prisma.post.delete({
        where: {
            id: postId,
        },
    })
    return NextResponse.json({ deleted });
}

//to update
// PUT http://localhost:3000/api/post/:postId with body data

export async function PUT(req: Request, { params }: { params: { postId: string } }) {
    const { postId } = params;
    const body = await req.json();
    const deleted = await prisma.post.update({
        where: {
            id: postId,
        },
        data: body,
    })
    return NextResponse.json({ deleted });
}