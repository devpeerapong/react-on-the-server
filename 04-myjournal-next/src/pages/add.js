import { Typography } from "@mui/joy";
import Container from "@mui/joy/Container";
import Head from "next/head";

export default function ArticleAddPage() {
  return (
    <Container sx={{ py: 2 }}>
      <Head>
        <title>Add Article | My Journal</title>
      </Head>
      <Typography variant="h1">Article Add Page</Typography>
    </Container>
  );
}
