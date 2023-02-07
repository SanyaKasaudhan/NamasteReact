import { useContext } from "react";
import UserContext from "./UserContext";
import  {fruitContext} from "./FruitContext"
const Header = ()=>{
    const {user}= useContext(UserContext)
    const {fruits}=useContext(fruitContext)
    return(
        <>
       <h1> Header</h1>
        {user.name}-{user.email}<br/>
        {fruits.qty}<br/>
        {fruits.fruit.join(",")}
        </>
    )
}

export default Header;