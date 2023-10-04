import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Container from "@mui/joy/Container";
import { Link, useLoaderData } from "react-router-dom";
import { ArticleList } from "../components/ArticleList";

export function ArticleListPage() {
  /**
   * @type {Array<import("../api").Article>}
   */
  const data = useLoaderData();

  return (
    <Container sx={{ py: 2 }}>
      <Box textAlign="right" mb={2}>
        <Button component={Link} to="/add">
          Add article
        </Button>
      </Box>
      <ArticleList data={data ?? []} />
    </Container>
  );
}
