import { createLazyFileRoute } from "@tanstack/react-router";
import Login from "../../app/auth/Login";

export const Route = createLazyFileRoute("/auth/login")({
  component: () => Login(),
});
