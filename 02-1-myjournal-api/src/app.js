import express from "express";
import cors from "cors";
import morgan from "morgan";

import { createArticle, getArticle, listArticles } from "./db.js";

const app = express();
app.use(morgan("tiny"));
app.use(cors());
app.use(express.urlencoded());
app.use(express.json());

app.get("/:id", async (req, res) =>
  res.json({ data: await getArticle(req.params.id) })
);

app.post("/", async (req, res) => {
  res.json({ data: await createArticle(req.body) });
});

app.get("/", async (req, res) => res.json({ data: await listArticles() }));

export default app;
