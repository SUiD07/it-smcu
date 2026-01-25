'use client';

import { users } from "@/app/data/users";
import UserList from "@/components/UserList";

export default function Home() {
  return (
    <>
      <div className="font-bold text-lg mb-4">IT SMCU</div>
      <UserList users={users} />
    </>
  );
}
