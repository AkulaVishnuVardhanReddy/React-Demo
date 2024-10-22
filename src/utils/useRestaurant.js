import { useEffect, useState } from "react";

const useRestaurant = (id)=>{
    const [restaurant, setRestaurant] = useState([]);
    useEffect(() => {
        LoadResponse();
      }, []);  // Add id as a dependency for when the URL changes
    
    async function LoadResponse() {
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.6287557&lng=79.4191795&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`);
        const json = await data.json();
        const cards = json?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
        cards.shift();
        cards.shift();
        setRestaurant(cards);
    }

    return restaurant;
}

export default useRestaurant;