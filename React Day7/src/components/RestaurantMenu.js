import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { restaurantList } from "../constants";

const RestaurantMenu =()=>{
    const {id}= useParams();
    console.log("da",restaurantList);
    useEffect(()=>{
        getRestrauantInfo();
    })
    function getRestrauantInfo() {
        
    }
    return(
        <>
        <h1>Restaurant Id : {id}
        </h1>
        <h3>{restaurantList[0].data.locality}</h3>
        <h3>{restaurantList[0].data.name}</h3>
        <h3>{Object.values(restaurantList[0].data.sla).join(",")}</h3>
        {console.log("v",Object.values(restaurantList[0].data.sla))}
        
        </>
    )
}
export default RestaurantMenu;