import { useContext } from "react";
import UserContext from "./UserContext";

const Header = ()=>{
    const {user}= useContext(UserContext)
    return(
        <>
       <h1> Header</h1>
        {user.name}-{user.email}
        </>
    )
}

export default Header;