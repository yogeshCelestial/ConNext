import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

// retrive user specific posts
// GET http://localhost:3000/api/post/user/:userId?draft=1

export async function GET(req: NextRequest, { params }: { params: { userId: string } }) {
    const draft = !!req.nextUrl.searchParams.get('draft');
    const { userId } = params;
    const post = await prisma.post.findMany({
        where: {
            authorId: userId,
            published: draft,
        },
        // take: 3
    });
    return NextResponse.json({ post });
}
