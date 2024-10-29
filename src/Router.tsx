import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Layout } from "./pages/Layout";
import { NotFound } from "./pages/NotFound";
import { Projects } from "./pages/Projects";

export const router = createBrowserRouter([
  {
    path: "/portfolio/",
    element: <Layout />,
    children: [
      {
        path: "/portfolio/",
        element: <Home />,
      },
      {
        path: "/portfolio/projects",
        element: <Projects />,
      },
    ],
    errorElement: <NotFound />,
  },
]);
