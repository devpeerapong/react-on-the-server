import { Box } from "@mui/joy";
import Button from "@mui/joy/Button";
import Container from "@mui/joy/Container";
import Input from "@mui/joy/Input";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { api } from "@/api";
import { Editor } from "@/components/Editor";

export default function AddArticlePage() {
  const [title, setTitle] = useState("");
  const [value, onChange] = useState("");
  const router = useRouter();

  async function onSubmit(event) {
    event.preventDefault();

    await api.createArticle({ title, body: value });

    router.push("/");
  }

  return (
    <form onSubmit={onSubmit}>
      <Container sx={{ py: 2 }}>
        <Head>Add Article | My Journal</Head>
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
