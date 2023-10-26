import { Skeleton } from "@mui/joy";
import Container from "@mui/joy/Container";
import Typography from "@mui/joy/Typography";
import { useQuery } from "@tanstack/react-query";
import { parse } from "marked";
import { useParams } from "react-router-dom";
import { api } from "../api";

export function ArticlePage() {
  const { id } = useParams();
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
