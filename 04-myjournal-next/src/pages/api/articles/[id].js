import { db } from "@/db";

/**
 *
 * @param {import("next").NextApiRequest} req
 * @param {import("next").NextApiResponse} res
 */
export default async function handler(req, res) {
  if (req.method === "PUT") {
    res.json({ data: await db.updateArticle(req.query.id, req.body) });
  } else if (req.method === "GET") {
    res.json({ data: await db.getArticle(req.query.id) });
  } else {
    res.status(405);
    res.end();
  }
}
