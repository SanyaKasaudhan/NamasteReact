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

// import React from "react";
// import ReactDOM from "react-dom/client";

// const heading = (
//   <h1 id="h1" key="h1">
//     This is JSX
//   </h1>
// );

// const Title = () => {
//   return (
//     <h1 id="title" key="title">Namaste React</h1>
//   )
// }
// // Header component is functional component
// const HeaderComponent = function (){
//   return (
//     <div>
//       <Title/>
//       {/* we can also use <Title()> */}
//       {/* we can also use <Title></Title> */}
//       {console.log(10)}
//     <h1>Namaste React Functional component</h1>
//     <h2>This is h2 tag</h2>
//     </div>
//   )
// }
// // create root using createRoot
// const root = ReactDOM.createRoot(document.getElementById("root"));
// // passing react element inside root
// root.render(<HeaderComponent/>);
