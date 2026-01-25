import { users } from "@/app/data/users";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default async function UserDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const userId = Number(id);

  const user = users.find((u) => u.id === userId);

  return (
    <Card>
      <CardHeader>
        <CardTitle>User Detail</CardTitle>
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
    </Card>
  );
}
