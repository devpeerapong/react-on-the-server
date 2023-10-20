import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { ArticlePage } from "../js/pages/ArticlePage";

const article = JSON.parse(document.getElementById("__DATA__").innerHTML);

const queryClient = new QueryClient();
queryClient.setQueryData(["articles", article.id], article);

ReactDOM.hydrateRoot(
  document.getElementById("root"),
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ArticlePage id={article.id} />
    </QueryClientProvider>
  </React.StrictMode>
);
