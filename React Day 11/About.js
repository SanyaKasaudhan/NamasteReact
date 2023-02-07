import UserContext from "./UserContext";
import { useContext } from "react";
const About = ()=>{
    const {user, setUser} = useContext(UserContext);
    return(
        <>
        <h1>About us</h1>
             
  {user.email}<br/>
{
  user.name
}
<br/>
<input type="text" value={user.name}></input><br/>
<input type="text" onChange={
    e=> setUser({
        ...user,
        name:e.target.value
    })
}></input><br/>
<input type="text" onChange={
    e=> setUser({
        ...user,
        email:e.target.value
    })
}></input><br/>
        </>
    )
}

export default About;