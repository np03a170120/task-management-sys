import { createLazyFileRoute } from "@tanstack/react-router";
import About from "../app/about/About";

export const Route = createLazyFileRoute("/about")({
  component: () => About(),
});
