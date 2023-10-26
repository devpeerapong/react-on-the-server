import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { articles } from "./data.mjs";
const prisma = new PrismaClient();

const load = async () => {
  try {
    await prisma.article.deleteMany();
    console.info("Deleted records in articles table");

    await Promise.all(articles.map((data) => prisma.article.create({ data })));
    console.log("Added articles data");
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

load();
