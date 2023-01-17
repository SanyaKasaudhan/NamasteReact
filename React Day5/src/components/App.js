import React from "react";
import ReactDOM from "react-dom/client";
import { Content } from "./Content";
import { Navbar } from "./Navbar";

const Header = () => {
  return (
    <>
      <h1>
        <Navbar />
        <Content/>
        Hi
      </h1>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);

