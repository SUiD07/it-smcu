import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function UserDetailPage({ params }: Props) {
  const { id } = await params; // ✅ สำคัญมาก
  const userId = Number(id);

  if (Number.isNaN(userId)) {
    notFound();
  }

  const user = await prisma.user.findUnique({
    where: { id: userId },
  });

  if (!user) {
    notFound();
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Member Detail</CardTitle>
      </CardHeader>

      <CardContent className="space-y-1">
        {!user && <p className="text-muted-foreground">User not found</p>}

        {user && (
          <>
            <p>
              <b>Name:</b> {user.name}
            </p>
            <p>
              <b>Role:</b> {user.role}
            </p>
            <p>
              <b>Status:</b> {user.status}
            </p>
          </>
        )}
      </CardContent>
      <Link href="/users">
        <Button size="xs">Go to User List</Button>
      </Link>
    </Card>
    // <div className="space-y-2">
    //   <h1 className="text-xl font-bold">{user.name}</h1>
    //   <p>Role: {user.role}</p>
    //   <p>Status: {user.status}</p>
    // </div>
  );
}
