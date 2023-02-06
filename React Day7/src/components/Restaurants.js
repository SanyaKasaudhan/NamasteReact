import React, { useState, useEffect } from "react";
import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";

const FOOD_API="https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
const IMG_CDN_URL =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";
 const FETCH_MENU_URL =
"https://www.swiggy.com/dapi/menu/v4/full?lat=12.9351929&lng=77.62448069999999&menuId=";

const filterData = (searchText, allRestaurants) => {
  return allRestaurants.filter((restaurant) =>
    restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
    
  );
};

const Restaurants = () => {


  const [allRestaurant, setAllRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    // handle the error using try... catch
    try {
      const data = await fetch(FOOD_API);
      const json = await data.json();
      // updated state variable restaurants with Swiggy API data
      setAllRestaurant(json?.data?.cards[2]?.data?.data?.cards);
      console.log("set",json)
      setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    } catch (error) {
      console.log(error);
    }
  }

  const [searchText, setSearchText] = useState();
  const [restaurants, setRestaurants] = useState(restaurantList);
  const [allRestaurants, setAllRestaurants]=useState(restaurantList);
  const [errorMsg, setErrorMsg] = useState("");

 const searchData = (searchText, allRestaurants) => () => {
    if (searchText !== "") {
      const data = filterData(searchText, allRestaurants);
      setRestaurants(data);
      console.log("resss",restaurants)
      if (data.length === 0) {
        setErrorMsg("No matches found ");
      }
    } else {
      if (errorMsg) setErrorMsg("");
      setRestaurants(restaurantList);
    }
    
  console.log("re",filterData)
  };

  return (
    <div className="">
      <div className="search-container">
        <input
          type="text"
          placeholder=" Search for restaurant"
          value={searchText}
          className="search-input"
          key="input-text"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={searchData(searchText, allRestaurants)}
        >
          {" "}
          Search{" "}
        </button>
      </div>
      {errorMsg && (
        <div className="error-container" id="error">
          <span className="error-msg" id="error-msg">
            {errorMsg}
          </span>
        </div>
      )}

      <div className="box">
        {
          
        console.log("r",restaurants)
        }
        {restaurants.map((restaurant) => {
          return (

            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </div>
  );
};

export default Restaurants;
