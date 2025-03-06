import { NextResponse } from 'next/server';
import { prisma } from '../db';

export async function GET() {
  const users = await prisma.user.findMany({
    include: {
      posts: true,
    },
  });
  
  return NextResponse.json(users);
}

export async function POST(request: Request) {
  const body = await request.json();
  
  const user = await prisma.user.create({
    data: {
      email: body.email,
      name: body.name,
    },
  });
  
  return NextResponse.json(user);
}