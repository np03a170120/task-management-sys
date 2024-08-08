import { createFileRoute } from "@tanstack/react-router";
import Login from "../../app/auth/Login";

export const Route = createFileRoute("/auth/Login")({
  component: () => Login(),
});
