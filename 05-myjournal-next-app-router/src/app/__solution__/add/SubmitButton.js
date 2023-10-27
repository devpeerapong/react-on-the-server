"use client";

import { useFormStatus } from "react-dom";
import Button from "@mui/joy/Button";

export function SubmitButton() {
  const status = useFormStatus();

  return (
    <Button type="submit" disabled={status.pending}>
      {status.pending ? "Submitting" : "Submit"}
    </Button>
  );
}
