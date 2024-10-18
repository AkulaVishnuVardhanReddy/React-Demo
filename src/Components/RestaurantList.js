import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Shimmer from "../Shimmer";
import { CDN_IMG_LINK } from '../Config';

const RestaurantList = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    LoadResponse();
  }, []);  // Add id as a dependency for when the URL changes

  async function LoadResponse() {
    try {
      const data = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.6287557&lng=79.4191795&restaurantId=98464&catalog_qa=undefined&submitAction=ENTER');
      const json = await data.json();
      const cards = json?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
      cards.shift();
      cards.shift();
      setRestaurant(cards);
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch restaurant data:", error);
      setLoading(false);
    }
  }

  if (loading) {
    return <Shimmer />;
  }

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
