import React from 'react'
import { useParams } from 'react-router-dom'

const RestaurantList = () => {
    const {id} =useParams();
  return (
    <div>
      <h1>RestaurantList {id}  </h1>
    </div>
  )
}

export default RestaurantList
