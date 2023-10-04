import { Typography } from "@mui/joy";
import Container from "@mui/joy/Container";
import Head from "next/head";

export default function ArticlePage() {
  return (
    <Container sx={{ py: 2 }}>
      <Head>
        <title>Title | My Journal</title>
      </Head>
      <Typography variant="h1">Article Page Page</Typography>
    </Container>
  );
}
