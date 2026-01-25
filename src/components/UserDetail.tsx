import React from "react";
import { User } from "@/app/page";
import {
  Card,
  //   CardAction,
  CardContent,
  //   CardDescription,
  //   CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function UserDetail({ user }: { user: User | null }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Detail</CardTitle>
        {/* <CardDescription>Card Description</CardDescription> */}
        {/* <CardAction>Card Action</CardAction> */}
      </CardHeader>
      <CardContent>
        <p>Name: {user?.name}</p>
        <p>Role: {user?.role}</p>
        <p>Status: {user?.status}</p>
      </CardContent>
      {/* <CardFooter>
        <p>Card Footer</p>
      </CardFooter> */}
    </Card>
  );
}
