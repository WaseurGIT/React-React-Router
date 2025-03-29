import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Root from "./components/Root/Root.jsx";
import GadgetDetails from "./components/GadgetDetails/GadgetDetails.jsx";
import Cart from "./components/Cart/Cart.jsx";
import Wish from "./components/Wish/Wish.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/gadgets/:product_id",
        loader: () => fetch("/gadgets.json"),
        element: <GadgetDetails></GadgetDetails>,
      },
      {
        path: "cart",
        loader: () => fetch("/gadgets.json"),
        element: <Cart></Cart>,
      },
      {
        path: "wish",
        loader: () => fetch("/gadgets.json"),
        element: <Wish></Wish>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
