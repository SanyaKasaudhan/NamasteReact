import React from "react";
import ReactDOM from "react-dom/client";
import { Content } from "./Content";
import { Navbar } from "./Navbar";
import { Restaurants } from "./Restaurants";

const Header = () => {
  return (
    <>
      <h1>
        <Navbar />
        <Content />
        <Restaurants />
      </h1>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);
