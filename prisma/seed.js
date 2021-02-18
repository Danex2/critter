const { PrismaClient } = require("@prisma/client");
const cities = require("./cities.json");
const prisma = new PrismaClient();

async function main() {
  await prisma.cities.createMany({
    data: cities.cities.map((city) => ({ name: city })),
  });
}
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
