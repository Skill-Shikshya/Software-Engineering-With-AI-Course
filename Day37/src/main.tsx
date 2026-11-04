import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Apples from "./pages/Apple.tsx";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import AddPosts from "./pages/AddPosts.tsx";
import Dashboard from "./pages/Dashboard.tsx";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/apple",
    element: <Apples />,
  },
  {
    path: "/addposts",
    element: <AddPosts />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
);
