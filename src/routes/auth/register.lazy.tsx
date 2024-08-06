import { createLazyFileRoute } from "@tanstack/react-router";
import Register from "../../app/auth/Register";

export const Route = createLazyFileRoute("/auth/register")({
  component: () => Register(),
});
