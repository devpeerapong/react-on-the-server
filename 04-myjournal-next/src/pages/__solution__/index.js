import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Container from "@mui/joy/Container";
import Head from "next/head";
import Link from "next/link";
import { ArticleList } from "../components/ArticleList";
import { db } from "../db";

/**
 *
 * @param {import("next").InferGetServerSidePropsType<typeof getServerSideProps>} props
 * @returns
 */
export default function ArticleListPage({ data }) {
  return (
    <Container sx={{ py: 2 }}>
      <Head>
        <title>My Journal</title>
      </Head>
      <Box textAlign="right" mb={2}>
        <Button component={Link} href="/add">
          Add article
        </Button>
      </Box>
      <ArticleList data={data} />
    </Container>
  );
}

export const getServerSideProps = async () => {
  const data = await db.listArticles();

  return {
    props: {
      data: data.map((item) => ({
        ...item,
        createdAt: item.createdAt.toISOString(),
      })),
    },
  };
};
