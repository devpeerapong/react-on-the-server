import { Box } from "@mui/joy";
import Button from "@mui/joy/Button";
import Container from "@mui/joy/Container";
import Input from "@mui/joy/Input";
import { useState } from "react";
import { api } from "../api";
import { Editor } from "../components/Editor";

export function AddArticlePage() {
  const [title, setTitle] = useState("");
  const [value, onChange] = useState("");
  const [pending, setPending] = useState(false);

  async function onSubmit(event) {
    event.preventDefault();
    setPending(true);
    await api.createArticle({ title, body: value });
    setPending(false);

    window.location.assign("/");
  }

  return (
    <form onSubmit={onSubmit}>
      <Container sx={{ py: 2 }}>
        <Input
          sx={{ mb: 2 }}
          size="lg"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <Editor initialValue={value} onChange={onChange} />
        <Box textAlign="end" sx={{ mt: 4 }}>
          <Button type="submit" disabled={pending}>
            {pending ? "Submitting" : "Submit"}
          </Button>
        </Box>
      </Container>
    </form>
  );
}
