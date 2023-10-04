import * as db from "@/db";
import Container from "@mui/joy/Container";
import Typography from "@mui/joy/Typography";
import { QueryClient, dehydrate, useQuery } from "@tanstack/react-query";
import { parse } from "marked";
import Head from "next/head";

export default function ArticlePage({ id }) {
  const { data, isLoading } = useQuery({
    queryKey: ["articles", id],
    queryFn: () => api.getArticle(id),
  });

  if (isLoading) {
    return (
      <Container sx={{ py: 2 }}>
        <Skeleton variant="text" level="h1" width={300} />
        <Skeleton variant="text" level="body-sm" width={120} sx={{ mb: 2 }} />
        <Skeleton variant="rectangular" height={300} sx={{ mb: 2 }} />
        <Skeleton variant="rectangular" height={100} sx={{ mb: 2 }} />
        <Skeleton variant="rectangular" height={200} />
      </Container>
    );
  }

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

/**
 *
 * @param {import("next").GetServerSidePropsContext} ctx
 * @returns
 */
export const getServerSideProps = async ({ params }) => {
  const data = await db.getArticle(params.id);

  const queryClient = new QueryClient();
  queryClient.setQueryData(["articles", params.id], {
    ...data,
    createdAt: data.createdAt.toISOString(),
  });

  return {
    props: {
      id: params.id,
      dehydratedState: dehydrate(queryClient),
    },
  };
};
