import React from "react";
import ReactDOM from "react-dom/client";
import { Navbar } from "./Navbar";
import '../../App.css'
import Restaurants from "./Restaurants";
const Header = () => {
  return (
    <>
      <h1>
        <Navbar />
        <Restaurants />
      </h1>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);

