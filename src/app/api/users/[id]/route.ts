import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

type Params = {
  params: { id: string };
};

export async function GET(_req: Request, { params }: Params) {
  const userId = Number(params.id);

  if (Number.isNaN(userId)) {
    return NextResponse.json(
      { message: "Invalid user id" },
      { status: 400 }
    );
  }

  const user = await prisma.user.findUnique({
    where: { id: userId },
  });

  if (!user) {
    return NextResponse.json(
      { message: "User not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(user);
}
