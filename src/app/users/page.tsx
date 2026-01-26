import Link from "next/link";
import { prisma } from "@/lib/prisma";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default async function UsersPage() {
  const users = await prisma.user.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="space-y-2">
      <Card>
        <CardHeader>
          <CardTitle>สมาชิก</CardTitle>
          <CardDescription>สมาชิกทั้งหมดในฝ่าย</CardDescription>
        </CardHeader>

        <CardContent className="space-y-2">
          {users.map((user) => (
            <div key={user.id} className="flex justify-between items-center">
              <span>{user.name}</span>

              <Link href={`/users/${user.id}`}>
                <Button size="xs">See details</Button>
              </Link>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
