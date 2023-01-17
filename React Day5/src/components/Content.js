import React, { useState } from "react";
import { IMG_CDN_URL, restaurantList } from "../constants";
// import { Restaurants } from "./Restaurants";
import { IMG_CDN_URL, restaurantList } from "../constants";
export const Content = () => {
  const [search, setSearch] = useState();
  const [filteredSearch, setFilteredSearch] = useState(restaurantList);
  const [allRestaurant, setAllRestaurant] = useState(restaurantList);
  const searchRestaurant = () => {};
  return (
    <>
      <input type="search" placeholder="Search your restaurant" />
      <button type="button" onClick={searchRestaurant}>
        Search
      </button>
    <Body />
      
      {restaurantList[0].data?.name}
      {/* <Restaurants restaurant={restaurantList[0]} /> */}
    </>
  );
};

const RestaurantCard = ({name,parentId,address}) => {
  return (
    <div className="card">
      <h2>{name}</h2>
      <h2>{parentId}</h2>
      <h2>{address}</h2>
    </div>
  );
};
const Body = () => {
  return (
    <div className="restaurant-list">
      {
        restaurantList.map( e=>
          <RestaurantCard key={e.data.id} {...e.data} />     
          )
      }
    </div>
  );
};