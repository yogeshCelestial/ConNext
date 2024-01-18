import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";

// GET http://localhost:3000/api/post
// OR
// GET http://localhost:3000/api/post?take=5

export async function GET(req: NextRequest) {
    const skip = req.nextUrl.searchParams.get('skip');
    const take = req.nextUrl.searchParams.get('take');
    const posts = await prisma.post.findMany({
        where: {
            published: true,
        },
        skip: skip ? parseInt(skip, 10) : undefined,
        take: take ? parseInt(take, 10) : undefined,
    });
    return NextResponse.json({ posts });
}

// POST // http://localhost:3000/api/post
// body data structure 
//   {
//     "title": "Title is here",
//     "image": "tisisimageurl",
//     "content": "content is here",
//     "authorId": "clrbjyttd00086tpthkosdr4e"
//   }

export async function POST(req: Request) {
    const session = await getServerSession(authOptions);
    if (!session) {
        return new NextResponse(null, { status: 401 });
    }
    const email: string = session?.user?.email || '';
    const json = await req.json();
    const createPost = await prisma.post.create({
        data: {
            title: json.title,
            image: json.image,
            content: json.content,
            author: { connect: { email: email } },
        },
    });
    return NextResponse.json({ status: 200, res: createPost.title });
}