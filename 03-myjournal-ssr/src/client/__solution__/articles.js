import React from "react";
import ReactDOM from "react-dom/client";

import { ArticleListPage } from "../js/pages/ArticleListPage";

const articles = JSON.parse(document.getElementById("__DATA__").innerHTML);

ReactDOM.hydrateRoot(
  document.getElementById("root"),
  <React.StrictMode>
    <ArticleListPage data={articles} />
  </React.StrictMode>
);
