import * as db from "@/db";
import { redirect } from "next/navigation";
import Container from "@mui/joy/Container";
import { ArticleEditor } from "./ArticleEditor";

export const metadata = {
  title: "Add Post | My Journal",
};

export default function AddArticlePage() {
  /**
   *
   * @param {FormData} formData
   */
  async function onSubmit(formData) {
    "use server";

    const data = {
      title: formData.get("title"),
      body: formData.get("body"),
    };

    await db.createArticle(data);
    redirect("/");
  }
  return (
    <form action={onSubmit}>
      <Container sx={{ py: 2 }}>
        <ArticleEditor />
      </Container>
    </form>
  );
}
