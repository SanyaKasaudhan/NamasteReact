import React, { useState } from 'react'
import {IMG_CDN_URL, restaurantList} from '../constants'
import { Restaurants } from './Restaurants'
import {IMG_CDN_URL, restaurantList} from '../constants'
export const Content = () => {
  const[search,setSearch]=useState();
  const[filteredSearch, setFilteredSearch]=useState(restaurantList);
  const[allRestaurant,setAllRestaurant]=useState(restaurantList);
  const searchRestaurant = ()=>{

  }
  return (
    <>
    <input type="search" placeholder='Search your restaurant'/>
    <button type='button' onClick={searchRestaurant}>Search</button>
    <Restaurants restaurantList={restaurantList} />
    </>
  )
}
