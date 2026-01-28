import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    await prisma.user.createMany({
        data: [
            { id: 1, name: "Alice", role: "Developer", status: "core team" },
            { id: 2, name: "Bob", role: "Designer", status: "member" },
            { id: 3, name: "Charlie", role: "Manager", status: "alumni" },
        ],
    });
}

main()
    .then(() => prisma.$disconnect())
    .catch(e => {
        console.error(e);
        prisma.$disconnect();
        process.exit(1);
    });
