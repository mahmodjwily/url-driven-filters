import { StrictMode } from "react";

import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router";

import { createRoot } from "react-dom/client";

import "./index.css";
import { ReactLibs } from "./pages/ReactLibs.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ReactLibs />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
