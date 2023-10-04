import { Typography } from "@mui/joy";
import Container from "@mui/joy/Container";
import Head from "next/head";

export default function ArticleListPage() {
  return (
    <Container sx={{ py: 2 }}>
      <Head>
        <title>My Journal</title>
      </Head>
      <Typography variant="h1">Article List Page</Typography>
    </Container>
  );
}
