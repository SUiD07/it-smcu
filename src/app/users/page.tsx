"use client";

import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  // TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
import Link from "next/dist/client/link";
// import Link from "next/link";
type User = {
  id: number;
  name: string;
  role: string;
  status: string;
};

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("active");
  const [editingId, setEditingId] = useState<number | null>(null);

  useEffect(() => {
    const loadUsers = async () => {
      const res = await fetch("/api/users");
      const data = await res.json();
      setUsers(data);
    };

    loadUsers();
  }, []);

  //  เพิ่ม
  const createUser = async (e: React.FormEvent) => {
    e.preventDefault();

    await fetch("/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, role, status }),
    });

    setName("");
    setRole("");
    setStatus("active");

    const res = await fetch("/api/users");
    const data = await res.json();
    setUsers(data);
  };

  // แก้ไข
  const updateUser = async (id: number) => {
    const user = users.find((u) => u.id === id);
    if (!user) return;

    await fetch(`/api/users/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });

    setEditingId(null);

    const res = await fetch("/api/users");
    const data = await res.json();
    setUsers(data);
  };

  // ลบ
  const deleteUser = async (id: number) => {
    if (!confirm("ลบสมาชิกคนนี้?")) return;

    await fetch(`/api/users/${id}`, {
      method: "DELETE",
    });

    const res = await fetch("/api/users");
    const data = await res.json();
    setUsers(data);
  };

  return (
    <div className="space-y-4">
      {/* LIST */}
      <Card>
        <CardHeader>
          <CardTitle>สมาชิก</CardTitle>
          <CardDescription>สมาชิกทั้งหมดในฝ่าย</CardDescription>
        </CardHeader>

        <CardContent className="space-y-2">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  {/* NAME */}
                  <TableCell>
                    {editingId === user.id ? (
                      <Input
                        className="border px-2 py-1 rounded w-full"
                        value={user.name}
                        onChange={(e) =>
                          setUsers((prev) =>
                            prev.map((u) =>
                              u.id === user.id
                                ? { ...u, name: e.target.value }
                                : u,
                            ),
                          )
                        }
                      />
                    ) : (
                      user.name
                    )}
                  </TableCell>

                  {/* ROLE */}
                  <TableCell>
                    {editingId === user.id ? (
                      <Input
                        className="border px-2 py-1 rounded w-full"
                        value={user.role}
                        onChange={(e) =>
                          setUsers((prev) =>
                            prev.map((u) =>
                              u.id === user.id
                                ? { ...u, role: e.target.value }
                                : u,
                            ),
                          )
                        }
                      />
                    ) : (
                      user.role
                    )}
                  </TableCell>

                  {/* STATUS */}
                  <TableCell>
                    {editingId === user.id ? (
                      <select
                        className="border px-2 py-1 rounded w-full"
                        value={user.status}
                        onChange={(e) =>
                          setUsers((prev) =>
                            prev.map((u) =>
                              u.id === user.id
                                ? { ...u, status: e.target.value }
                                : u,
                            ),
                          )
                        }
                      >
                        <option value="active">active</option>
                        <option value="inactive">inactive</option>
                      </select>
                    ) : (
                      user.status
                    )}
                  </TableCell>

                  {/* ACTIONS */}
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      {editingId === user.id ? (
                        <Button size="xs" onClick={() => updateUser(user.id)}>
                          Save
                        </Button>
                      ) : (
                        <>
                          <Button
                            size="xs"
                            onClick={() => setEditingId(user.id)}
                          >
                            Edit
                          </Button>
                          <Button
                            size="xs"
                            variant="destructive"
                            onClick={() => deleteUser(user.id)}
                          >
                            Delete
                          </Button>
                          <Link href={`/users/${user.id}`}>
                            <Button size="xs" variant="outline">
                              See details
                            </Button>
                          </Link>
                        </>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* FORM */}
      <Card>
        <CardHeader>
          <CardTitle>จัดการสมาชิก</CardTitle>
          <CardDescription>เพิ่มสมาชิกใหม่</CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={createUser} className="space-y-3">
            <Input
              className="w-full border px-3 py-1 rounded"
              placeholder="ชื่อสมาชิก"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <Input
              className="w-full border px-3 py-1 rounded"
              placeholder="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            />
            <select
              className="w-full border px-3 py-1 rounded"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="active">active</option>
              <option value="inactive">inactive</option>
            </select>

            <Button size="xs" type="submit">
              เพิ่มสมาชิก
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
