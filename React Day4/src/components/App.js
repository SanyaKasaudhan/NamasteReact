import React from "react";
import ReactDOM from "react-dom/client";
import { Body } from "./Body";
import { Navbar } from "./Navbar";

const Header = () => {
  return (
    <>
      <h1>
        <Navbar />
        <Body />
      </h1>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);
