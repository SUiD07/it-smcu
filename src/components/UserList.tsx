import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User } from "@/app/data/users";

export default function UserList({ users }: { users: User[] }) {
  return (
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
  );
}
