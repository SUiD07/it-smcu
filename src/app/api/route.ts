import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET /api/users
export async function GET() {
  const users = await prisma.user.findMany({
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(users);
}

// POST /api/users
export async function POST(req: Request) {
  const { name, role, status } = await req.json();

  const user = await prisma.user.create({
    data: { name, role, status },
  });

  return NextResponse.json(user, { status: 201 });
}
