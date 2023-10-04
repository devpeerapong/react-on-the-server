import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

export function listArticles() {
  return db.article.findMany({
    select: { id: true, title: true, createdAt: true },
  });
}

/**
 *
 * @param {string} id
 */
export function getArticle(id) {
  return db.article.findUnique({ where: { id } });
}

/**
 *
 * @param {{ title: string; body: string }} data
 */
export function createArticle(data) {
  return db.article.create({ data });
}

/**
 *
 * @param {string} id
 * @param {{ title: string; body: string; }} data
 */
export function updateArticle(id, data) {
  return db.article.update({ where: { id }, data });
}

/**
 *
 * @param {string} id
 */
export function deleteArticle(id) {
  return db.article.delete({ where: { id } });
}
