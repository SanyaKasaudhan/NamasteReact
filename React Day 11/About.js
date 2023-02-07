import UserContext from "./UserContext";
import { useContext } from "react";
const About = ()=>{
    const {user, setUser} = useContext(UserContext);
    return(
        <>
        <h1>About us</h1>
             
  {user.email}
{
  user.name
}
<br/>
<input type="text" value={user.name}></input><br/>
<input type="text" onChange={
    e=> setUser({
        name:e.target.value,
        email:"Sudh@gmail.com"
    })
}></input>
        </>
    )
}

export default About;