import React, { useState , useContext} from "react";
import ReactDOM from "react-dom/client";
import About from "./About";
import "./index.css"
import Header from "./Header"
import UserContext from "./UserContext";
const Section = ({title, description ,isVisible,setIsVisible})=>{
  const {user}= useContext(UserContext)
  
  return(
    <>
    <div className="container">
      <h1>{title}</h1> 
      {isVisible ? <><button onClick={()=>setIsVisible(true)}>Hide</button> <p>{description}</p></> : 
      <button onClick={()=>setIsVisible(false)}>Show</button>}   
      </div>
      <h3>{user.name}</h3>
 
    </>
  )
}

const App = () => { 
  const [visibleSection, setIsVisbleSection]=useState("about12345");
 
  const[user, setUser]= useState({
    name:"ranjana",
    email:"ran@gmail.com"
  })
  // const {user, setUser} = useContext(UserContext); 
  return (
   <>
   <Header />
   <UserContext.Provider value={{user:user, setUser:setUser}}>
    
    <About />
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
   setIsVisible={()=>setIsVisbleSection("panel")} />  
  </UserContext.Provider>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
