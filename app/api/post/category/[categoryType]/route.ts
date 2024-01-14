import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

// GET http://localhost:3000/api/post/category/:categoryType
// OR
// GET http://localhost:3000/api/post/category/:categoryType?take=5

export async function GET(req: NextRequest, { params }: { params: { categoryType: string } }) {
    const { categoryType } = params;
    const skip = req.nextUrl.searchParams.get('skip');
    const take = req.nextUrl.searchParams.get('take');
    const posts = await prisma.post.findMany({
        where: {
            category: categoryType,
        },
        skip: skip ? parseInt(skip, 10) : undefined,
        take: take ? parseInt(take, 10) : undefined,
    });
    return NextResponse.json({ posts });
}
