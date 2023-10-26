import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

export const db = {
  listArticles() {
    return client.article.findMany({
      select: { id: true, title: true, createdAt: true },
    });
  },

  /**
   *
   * @param {string} id
   */
  getArticle(id) {
    return client.article.findUnique({ where: { id } });
  },

  /**
   *
   * @param {{ title: string; body: string }} data
   */
  createArticle(data) {
    return client.article.create({ data });
  },

  /**
   *
   * @param {string} id
   * @param {{ title: string; body: string; }} data
   */
  updateArticle(id, data) {
    return client.article.update({ where: { id }, data });
  },

  /**
   *
   * @param {string} id
   */
  deleteArticle(id) {
    return client.article.delete({ where: { id } });
  },
};
