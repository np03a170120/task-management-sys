import { createLazyFileRoute } from "@tanstack/react-router";
import Index from "../app/Index";

export const Route = createLazyFileRoute("/")({
  component: () => Index(),
});
