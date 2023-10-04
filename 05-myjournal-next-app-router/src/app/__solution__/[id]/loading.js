import { Skeleton } from "@mui/joy";
import Container from "@mui/joy/Container";

export default function Loading() {
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
