export type User = {
    id: number;
    name: string;
    role: string;
    status: "alumni" | "core team" | "member";
};

export const users: User[] = [
    { id: 1, name: "Alice", role: "Developer", status: "core team" },
    { id: 2, name: "Bob", role: "Designer", status: "member" },
    { id: 3, name: "Charlie", role: "Manager", status: "alumni" },
];
