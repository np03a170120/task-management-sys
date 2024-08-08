import { createFileRoute } from "@tanstack/react-router";
import Register from "../../app/auth/Register";

export const Route = createFileRoute("/auth/register")({
  component: () => Register(),
});
