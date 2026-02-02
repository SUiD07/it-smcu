import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const users = await prisma.user.findMany({
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(users);
}

export async function POST(req: Request) {
  const body = await req.json();
  const { name, role, status } = body;

  const user = await prisma.user.create({
    data: {
      name,
      role,
      status,
    },
  });

  return NextResponse.json(user);
}
