import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Container from "@mui/joy/Container";
import { ArticleList } from "../components/ArticleList";

/**
 *
 * @param {object} props
 * @param {Array<import("../api").Article>} props.data
 * @returns
 */
export function ArticleListPage({ data }) {
  return (
    <Container sx={{ py: 2 }}>
      <Box textAlign="right" mb={2}>
        <Button component="a" href="/add">
          Add article
        </Button>
      </Box>
      <ArticleList data={data} />
    </Container>
  );
}
