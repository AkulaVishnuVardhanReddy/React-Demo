import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useRestaurant from '../utils/useRestaurant';
import { CDN_IMG_LINK } from '../Config';
import useRestaurant from '../utils/useRestaurant';

const RestaurantList = () => {
  const { id } = useParams();
  
  const restaurant = useRestaurant(id);
  

  return (
    <div>
      <div className='restaurant-cards'>
        {restaurant.map((restaurantCard, index) => (
          <Types key={index} {...restaurantCard?.card?.card} />
        ))}
      </div>
    </div>
  );
};

const Types = (props1) => {
  const { title, itemCards } = props1;

  let data = itemCards || [];
  data = data.filter(element => element !== undefined);

  return (
    <div>
      <h1>{title}</h1>
      {data.map((items, index) => (
        <RestaurantCard key={index} {...items?.card?.info} />
      ))}
    </div>
  );
};

const RestaurantCard = (props) => {
  return (
    <div className='entire-card'>
    <div className='card card-inside'>
      <img src={CDN_IMG_LINK + props?.imageId} alt={props?.name} />
      <div>
      <h2>{props?.name}</h2>
      <h3>{props?.category}</h3>
      <h4>Rupees {props?.price}</h4>
      </div>
    </div>
    </div>
  );
};

export default RestaurantList;
