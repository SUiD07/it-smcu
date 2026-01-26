'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";

// import { users } from "@/app/data/users";
// import UserList from "@/components/UserList";

export default function Home() {
  return (
    <>
      <div className="font-bold text-lg mb-4">IT SMCU</div>
      <Link href="/users">
        <Button size="xs">Go to User List</Button>
      </Link>
      {/* <UserList users={users} /> */}
    </>
  );
}
