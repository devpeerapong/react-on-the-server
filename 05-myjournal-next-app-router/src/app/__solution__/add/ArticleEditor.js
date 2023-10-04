"use client";

import { Box } from "@mui/joy";
import Input from "@mui/joy/Input";
import { Editor } from "../../components/Editor";
import { useState } from "react";
import { SubmitButton } from "./SubmitButton";

export function ArticleEditor() {
  const [title, setTitle] = useState("");
  const [value, onChange] = useState("");

  return (
    <>
      <Input
        sx={{ mb: 2 }}
        size="lg"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        id="title"
        name="title"
      />
      <Editor initialValue={value} onChange={onChange} />
      <input type="hidden" value={value} name="body" id="body" />
      <Box textAlign="end" sx={{ mt: 4 }}>
        <SubmitButton />
      </Box>
    </>
  );
}
