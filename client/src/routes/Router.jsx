import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../Layouts/MainLayOut";
import Home from "../Pages/Home";
import ProjectDetails from "../Pages/ProjectDetails";
import NotFound from "../Pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "project/:id",
        element: <ProjectDetails />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;