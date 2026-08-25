import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {createBrowserRouter,RouterProvider} from "react-router-dom";

import "./index.css";

import Home from "./pages/Home.jsx";
import App from "./App.jsx";
import MovieDetails from "./pages/MovieDetails.jsx";
import Favourite from "./pages/Favorite.jsx";
import Search from "./pages/Search.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "movie/:id",
        element: <MovieDetails />,
      },
      {
        path: "favorites",
        element: <Favourite />,
      },
      {
        path: "/Search",
        element: <Search />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);