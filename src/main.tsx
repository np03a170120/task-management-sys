import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="flex w-full justify-center items-center h-[100vh]">
      <App />
    </div>
  </React.StrictMode>
);
