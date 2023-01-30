import { createBrowserRouter } from "react-router-dom";
import Layout from "components/Layout";
import PageNotFound from "pages/PageNotFound";
import Setup from "pages/Setup";
import Works from "pages/Works";
import Home from "./pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/works", element: <Works /> },
      { path: "/setup", element: <Setup /> },
      { path: "*", element: <PageNotFound /> },
    ],
  },
]);
