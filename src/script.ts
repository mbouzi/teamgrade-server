import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {

    const newPlayer = await prisma.player.create({
        data: {
            name: 'www.howtographql.com',
        },
    })

    const allPlayers = await prisma.player.findMany();
    console.log(allPlayers);
}

main()
    .catch((e) => {
        throw e;
    })
    // 5
    .finally(async () => {
        await prisma.$disconnect();
    });