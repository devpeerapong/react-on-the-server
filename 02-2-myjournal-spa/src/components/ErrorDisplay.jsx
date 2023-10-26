import Container from "@mui/joy/Container";
import Typography from "@mui/joy/Typography";
import { useRouteError } from "react-router-dom";

export function ErrorDisplay() {
  const error = useRouteError();
  const isFetchError = error.message.includes("fetch");

  if (isFetchError) {
    return (
      <Container sx={{ py: 2, textAlign: "center" }}>
        <Typography level="h1" fontWeight={900}>
          API fetch error
        </Typography>
        <Typography variant="body">
          Make sure you start the server in <strong>02-1-myjournal-api</strong>{" "}
          folder with <strong>pnpm start</strong>
        </Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ py: 2 }}>
      <Typography variant="body">{error.message}</Typography>
    </Container>
  );
}
