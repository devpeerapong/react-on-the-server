import express from "express";
import path from "path";
import morgan from "morgan";

import { db } from "./db.js";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { renderToString } from "react-dom/server";
import { ArticleListPage } from "./js/pages/ArticleListPage.js";
import { ArticlePage } from "./js/pages/ArticlePage.js";

const app = express();
app.use(morgan("tiny"));
app.set("view engine", "ejs");
app.set("views", "./src/views/__solution__");
app.use("/public", express.static(path.resolve("public")));
app.use("/dist", express.static(path.resolve("dist")));
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

  const queryClient = new QueryClient();
  queryClient.setQueryData(["articles", req.params.id], data);

  const SSR = renderToString(
    <QueryClientProvider client={queryClient}>
      <ArticlePage />
    </QueryClientProvider>
  );

  res.render("articleId", { data, SSR });
});

app.get("/", async (req, res) => {
  const data = await db.listArticles();

  const SSR = renderToString(<ArticleListPage data={data} />);

  res.render("articles", { data, SSR });
});

export default app;
