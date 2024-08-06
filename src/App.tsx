import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

import { ConfigProvider } from "antd";

const router = createRouter({ routeTree });

export default function App() {
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "	#005b96",
            fontFamily: "inter",
            colorBgContainer: "#d6e7f0",
          },
        }}
      >
        <RouterProvider router={router} />
      </ConfigProvider>
    </>
  );
}
