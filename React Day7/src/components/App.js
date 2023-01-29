import React,{lazy, Suspense}from "react";
import ReactDOM from "react-dom/client";
import { Navbar } from "./Navbar";
import "../../App.css";
import Restaurants from "./Restaurants";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./About";
import Error from "./Error";
import Cart from "./Cart";
import RestaurantMenu from "./RestaurantMenu";
import Shimmer from "./Shimmer";

const Instamart = lazy(()=> import("./Instamart"))

const AppLayout = () => {
  return (
    <>
      <h1>
        <Navbar />
        <Outlet />
      </h1>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Restaurants />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path:"/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        )
       
      }
    ],
  },
  {
    path: "/about",
    element: <About />,
  },{
    path: "/restaurant/:id",
    element: <RestaurantMenu />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
