import React from "react";
import ReactDOM from "react-dom/client";
import { Navbar } from "./Navbar";
import '../../App.css'
import Restaurants from "./Restaurants";
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import About from "./About";


const AppLayout = () => {
  return (
    <>
      <h1>
        <Navbar />
        <Restaurants />
      </h1>
    </>
  );
};

const appRouter= createBrowserRouter(
  [
    {
      path:"/",
      element: <AppLayout />
    },
    {
      path:"/about",
      element:<About/>
    }
  ]
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

