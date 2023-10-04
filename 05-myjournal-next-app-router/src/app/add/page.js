import Container from "@mui/joy/Container";
import Typography from "@mui/joy/Typography";

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
  title: "Add Article | My Journal",
};

export default async function ArticleAddPage() {
  return (
    <Container sx={{ py: 2 }}>
      <Typography variant="h1">Article Add Page</Typography>
    </Container>
  );
}
