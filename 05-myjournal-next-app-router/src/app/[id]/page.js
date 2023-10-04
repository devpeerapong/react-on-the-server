import Container from "@mui/joy/Container";
import Typography from "@mui/joy/Typography";

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
  title: "Title | My Journal",
};

export default async function ArticlePage() {
  return (
    <Container sx={{ py: 2 }}>
      <Typography variant="h1">Article Page</Typography>
    </Container>
  );
}
