import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import * as api from "./api";
import { AddArticlePage } from "./pages/AddArticlePage";
import { ArticleListPage } from "./pages/ArticleListPage";
import { ArticlePage } from "./pages/ArticlePage";
import { ErrorDisplay } from "./components/ErrorDisplay";

export const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    errorElement: <ErrorDisplay />,
    children: [
      { path: "/add", element: <AddArticlePage /> },
      { path: "/:id", element: <ArticlePage /> },
      {
        path: "/",
        element: <ArticleListPage />,
        loader: async () => {
          const articles = await api.listArticles();

          return articles;
        },
      },
    ],
  },
]);
