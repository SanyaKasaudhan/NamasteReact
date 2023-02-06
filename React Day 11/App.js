import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css"

const Section = ({title, description ,isVisible,setIsVisible})=>{
  
  return(
    <>
    <div className="container">
      <h1>{title}</h1> 
      {isVisible ? <><button onClick={()=>setIsVisible(true)}>Hide</button> <p>{description}</p></> : 
      <button onClick={()=>setIsVisible(false)}>Show</button>}   
      </div>
    </>
  )
}

const App = () => { 
  const [visibleSection, setIsVisbleSection]=useState("about12345");
 
  return (
   <>
   <Section description={"Career Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}
   title={"About"}
   isVisible={visibleSection==="about12345"}
   setIsVisible={()=> setIsVisbleSection("about12345")}/>
   <Section description={"About Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}
   title={"Career"} 
   isVisible={visibleSection==="career"}
   setIsVisible={()=>setIsVisbleSection("career")}/>
   <Section description={"Panel Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}
   title={"Panel"}
   isVisible={visibleSection==="panel"}
   setIsVisible={(eve)=> 
    {
   if(eve)
   {setIsVisbleSection("panel")
   }else{
    setIsVisbleSection(" ")
   }}
  }/>      
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
