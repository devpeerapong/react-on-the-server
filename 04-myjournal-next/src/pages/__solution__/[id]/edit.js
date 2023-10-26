import { api } from "@/api";
import { Editor } from "@/components/Editor";
import { db } from "@/db";
import { Box, Button, Input } from "@mui/joy";
import Container from "@mui/joy/Container";
import { QueryClient, dehydrate, useQuery } from "@tanstack/react-query";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";

export default function EditArticlePage({ id }) {
  const { data, isLoading } = useQuery({
    queryKey: ["articles", id],
    queryFn: () => api.getArticle(id),
  });
  const [title, setTitle] = useState(data.title);
  const [value, onChange] = useState(data.body);
  const router = useRouter();

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

  async function onSubmit(event) {
    event.preventDefault();
    await api.updateArticle(id, { title, body: value });

    router.push("/");
  }

  return (
    <form onSubmit={onSubmit}>
      <Container sx={{ py: 2 }}>
        <Head>
          <title>{`${data.title} | My Journal`}</title>
        </Head>
        <Input
          sx={{ mb: 2 }}
          size="lg"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <Editor initialValue={value} onChange={onChange} />
        <Box textAlign="end" sx={{ mt: 4 }}>
          <Button type="submit">Submit</Button>
        </Box>
      </Container>
    </form>
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
