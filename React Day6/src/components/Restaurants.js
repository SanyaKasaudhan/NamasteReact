import React, { useState } from "react";
import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";

const filterData = (searchText, allRestaurants) => {
  return allRestaurants.filter((restaurant) =>
    restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
    
  );
};

const Restaurants = () => {
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
