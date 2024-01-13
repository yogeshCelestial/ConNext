import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

// retrive user specific posts
// GET http://localhost:3000/api/post/user/:userId

export async function GET(req: Request, { params }: { params: { userId: string } }) {
    const { userId } = params;
    const post = await prisma.post.findMany({
        where: {
            authorId: userId,
        },
        // take: 3
    });
    return NextResponse.json({ post });
}
