import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Container from "@mui/joy/Container";
import Link from "next/link";
import { ArticleList } from "@/components/ArticleList";
import { db } from "@/db";

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
  title: "My Journal",
};

export default async function ArticleListPage() {
  const data = await db.listArticles();

  return (
    <Container sx={{ py: 2 }}>
      <Box textAlign="right" mb={2}>
        <Button component={Link} href="/add">
          Add article
        </Button>
      </Box>
      <ArticleList data={data} />
    </Container>
  );
}
