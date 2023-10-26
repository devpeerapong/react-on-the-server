import { db } from "@/db";

/**
 *
 * @param {import("next").NextApiRequest} req
 * @param {import("next").NextApiResponse} res
 */
export default async function handler(req, res) {
  if (req.method === "POST") {
    res.json({ data: await db.createArticle(req.body) });
  } else if (req.method === "GET") {
    res.json({ data: await db.listArticles() });
  } else {
    res.status(405);
    res.end();
  }
}
