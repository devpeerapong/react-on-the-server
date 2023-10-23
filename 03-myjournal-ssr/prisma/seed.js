import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { articles } from "./data.js";
const prisma = new PrismaClient();

const load = async () => {
  try {
    await prisma.article.deleteMany();
    console.info("Deleted records in articles table");

    await prisma.article.createMany({ data: articles });
    console.log("Added articles data");
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

load();
