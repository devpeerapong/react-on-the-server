import express from "express";
import { parse } from "marked";
import path from "path";
import morgan from "morgan";

import { db } from "./db.js";

const app = express();
app.use(morgan("tiny"));
app.set("view engine", "ejs");
app.set("views", "./src/views");
app.use("/public", express.static(path.resolve("public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/add", (req, res) => {
  res.render("add");
});

app.post("/add", async (req, res) => {
  await db.createArticle(req.body);
  res.redirect("/");
});

app.get("/:id", async (req, res) => {
  const data = await db.getArticle(req.params.id);

  if (!data) {
    res.render("404");
    return;
  }

  data.body = parse(data.body);

  res.render("articleId", { data });
});

app.get("/", async (req, res) => {
  const data = await db.listArticles();

  res.render("articles", { data });
});

export default app;
