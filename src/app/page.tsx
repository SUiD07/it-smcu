// import { Button } from "@/components/ui/button";
'use client';
import UserDetail from "@/components/UserDetail";
import UserList from "@/components/UserList";
import { useState } from "react";

export type User = {
  id: number;
  name: string;
  role: string;
  status: "alumni" | "core team" | "member";
};

const users: User[] = [
  { id: 1, name: "Alice", role: "Developer", status: "core team" },
  { id: 2, name: "Bob", role: "Designer", status: "member" },
  { id: 3, name: "Charlie", role: "Manager", status: "alumni" },
];

export default function Home() {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  return (
    <>
      <div className="font-bold">IT SMCU</div>
      <UserList users={users} onSelect={setSelectedUser} />
      <UserDetail user={selectedUser} />

    {/* <Button size="xs">Click Me</Button> */}
    </>
  );
}
