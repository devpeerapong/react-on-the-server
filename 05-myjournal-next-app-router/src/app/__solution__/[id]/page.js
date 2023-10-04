import * as db from "@/db";
import Container from "@mui/joy/Container";
import Typography from "@mui/joy/Typography";
import { parse } from "marked";
import Head from "next/head";

/**
 * @type {import("next").ResolvingMetadata}
 */
export async function generateMetadata({ params }) {
  const data = await db.getArticle(params.id);

  return {
    title: `${data.title} | My Journal`,
  };
}

export default async function ArticlePage({ params }) {
  const data = await db.getArticle(params.id);

  return (
    <Container sx={{ py: 2 }}>
      <Head>
        <title>{`${data.title} | My Journal`}</title>
      </Head>
      <Typography level="h1" fontWeight={900} color="primary">
        {data.title}
      </Typography>
      <Typography level="body-sm">
        {new Date(data.createdAt).toDateString()}
      </Typography>
      <div dangerouslySetInnerHTML={{ __html: parse(data.body) }} />
    </Container>
  );
}
