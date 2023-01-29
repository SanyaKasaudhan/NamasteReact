import React, { useState } from "react";
import "../../App.css";
import { Link } from "react-router-dom";
export const Navbar = () => {
  const[isLogin,setIsLogin]=useState(true);
  const login=()=>{
    if(isLogin){
      setIsLogin(false);
    }
    else{
      setIsLogin(true);
    }
  }
  return (
    <>
      <div className="nav_head">
        <img className="logo_img" src="data:image/jpeg;base64,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" />

        <ul>
          <Link to="/"> Home </Link>
          <Link to="/about"> About Us </Link>
          <Link to="/cart"> Cart </Link>
          <Link to="/instamart">Instamart</Link>
        </ul>
        {isLogin ? 
        <button onClick={login}>Login</button> : 
        <button onClick={login}>Logout</button>
        }
      </div>
    </>
  );
};
