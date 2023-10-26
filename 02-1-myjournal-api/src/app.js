import express from "express";
import cors from "cors";
import morgan from "morgan";

import { db } from "./db.js";

const app = express();
app.use(morgan("tiny"));
app.use(cors());
app.use(express.urlencoded());
app.use(express.json());

app.get("/:id", async (req, res) =>
  res.json({ data: await db.getArticle(req.params.id) })
);

app.post("/", async (req, res) => {
  res.json({ data: await db.createArticle(req.body) });
});

app.get("/", async (req, res) => res.json({ data: await db.listArticles() }));

export default app;
