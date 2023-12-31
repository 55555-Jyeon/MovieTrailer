import { createBrowserRouter } from "react-router-dom";
import DetailPage from "../pages/detailPage";
import HomePage from "../pages/homePage";
import Layout from "../components/Layout/layout";
import SearchResultPage from "../pages/searchResultPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/:movie",
        element: <HomePage />,
      },
      {
        path: "/:movie/:movieId",
        element: <DetailPage />,
      },
      {
        path: "/searchPage/:keyWord",
        element: <SearchResultPage />,
      },
    ],
  },
]);

export default router;
