import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof Route;
  }
}
export const Route = createRootRoute({
  component: () => (
    <>
      {/* <div>
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{" "}
        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>
        <Link to="/auth/login" className="[&.active]:font-bold">
          Login
        </Link>
        <Link to="/auth/register" className="[&.active]:font-bold">
          Register
        </Link>
      </div> */}
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
