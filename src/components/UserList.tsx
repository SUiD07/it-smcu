import React from "react";
import { User } from "@/app/page";
import {
  Card,
  //   CardAction,
  CardContent,
  CardDescription,
  //   CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";

// const users = ["Alice", "Bob", "Charlie"];
export default function UserList({
  users,
  onSelect,
}: {
  users: User[];
  onSelect: (user: User) => void;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>สมาชิก</CardTitle>
        <CardDescription>สมาชิกทั้งหมดในฝ่าย</CardDescription>
        {/* <CardAction>Card Action</CardAction> */}
      </CardHeader>
      <CardContent>
        {users.map((user) => (
          <div key={user.id} className="flex justify-between items-center mb-2">
            <span>{user.name}</span>
            <Button size="xs" onClick={() => onSelect(user)}>
              See details
            </Button>
          </div>
        ))}
      </CardContent>
      {/* <CardFooter>
        <p>Card Footer</p>
      </CardFooter> */}
    </Card>
  );
}
