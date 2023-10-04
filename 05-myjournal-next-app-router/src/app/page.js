import Container from "@mui/joy/Container";
import Typography from "@mui/joy/Typography";

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
  title: "My Journal",
};

export default async function ArticleListPage() {
  return (
    <Container sx={{ py: 2 }}>
      <Typography variant="h1">Article List Page</Typography>
    </Container>
  );
}
