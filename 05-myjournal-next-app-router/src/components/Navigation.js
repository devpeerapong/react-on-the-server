import Container from "@mui/joy/Container";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";
import Link from "next/link";

export function Navigation() {
  return (
    <Sheet component="nav">
      <Container sx={{ py: 1 }}>
        <Button variant="plain" component={Link} href="/">
          <Typography level="title-lg">
            My
            <Typography fontWeight={900} color="primary">
              Journal
            </Typography>
          </Typography>
        </Button>
      </Container>
    </Sheet>
  );
}
