// import React, { useState } from "react";
// import { restaurantList, IMG_CDN_URL } from "../constants";
// import RestaurantCard from "./RestaurantCard";

// const filterData = (searchText, restaurant) => {
//   return restaurant.filter((res) =>
//     res.data.name.toLowerCase().includes(searchText.toLowerCase())
//   );
// };
// const Restaurants = () => {
//   // console.log(restaurantList);
//   const [searchText, setSearchText] = useState("");
//   const [restaurant, setRestaurant] = useState(restaurantList);

//   const searchData = (searchText, restaurant) => {
//     if (searchText !== "")
//      {
//       const data = filterData(searchText, restaurant);
//       setRestaurant(data);
//     }
//   };
// return (
//   <>
//     <h1 className="food">Food Court</h1>
//     <input
//       type="text"
//       placeholder="searchText your food"
//       value={searchText}
//       onChange={(e) => setSearchText(e.target.value)}
//     ></input>
//     <button onClick={searchData(searchText, restaurant)}>
//       searchText
//     </button>
//     {searchText}
//     <div className="box">
//       {restaurant.map((restaurant) => {
//         // <RestaurantCard {...restaurant.data} key={restaurant.data.id}/>
//         return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />;
//       })}
//     </div>
//   </>
// );
//     }
// const RestaurantCard = ({
//   cloudinaryImageId,
//   name,
//   cuisines,
//   area,
//   lastMileTravelString,
//   costForTwoString,
//   avgRating,
// }) => {
//   return (<>
//   <h1>{name}</h1>
//   {cuisines}
//   {area}
//   </>
//     );
//   };

// export default Restaurants;

// import { RestaurantCard } from './RestaurantCard'; /* Import using Named Import */
// import { restaurantList } from '../config'; /* Named Import*/
// import { useState } from 'react';

import React, { useState } from "react";
import { restaurantList, IMG_CDN_URL } from "../constants";
import RestaurantCard from "./RestaurantCard";

const filterData = (searchText, restaurants) => {
  return restaurants.filter((restaurant) =>
    restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
  );
};

const Restaurants = () => {
  const [searchText, setSearchText] = useState();
  const [restaurants, setRestaurants] = useState(restaurantList);
  const [errorMsg, setErrorMsg] = useState("");

  const searchData = (searchText, restaurants) => () => {
    if (searchText !== "") {
      const data = filterData(searchText, restaurants);
      setRestaurants(data);
      if (data.length === 0) {
        setErrorMsg("No matches found ");
      }
    } else {
      if (errorMsg) setErrorMsg("");
      setRestaurants(restaurantList);
    }
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
          onClick={searchData(searchText, restaurants)}
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
