import { NextResponse } from 'next/server';
import { prisma } from '../db';

export async function GET() {
  const posts = await prisma.post.findMany({
    include: {
      author: true,
    },
  });
  
  return NextResponse.json(posts);
}

export async function POST(request: Request) {
  const body = await request.json();
  
  const post = await prisma.post.create({
    data: {
      title: body.title,
      content: body.content,
      published: body.published || false,
      authorId: body.authorId,
    },
  });
  
  return NextResponse.json(post);
}