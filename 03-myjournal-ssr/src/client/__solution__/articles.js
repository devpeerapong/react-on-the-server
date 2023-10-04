import React from "react";
import ReactDOM from "react-dom/client";

import { ArticleListPage } from "../js/pages/ArticleListPage";

const articles = JSON.parse(document.getElementById("__DATA__").innerHTML);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ArticleListPage data={articles} />
  </React.StrictMode>
);
