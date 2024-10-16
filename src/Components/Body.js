import { useEffect, useState } from "react";
import { CDN_IMG_LINK,RestaurentList } from "../Config";

function FilterBySearch(searchInput,restaurant){
    console.log(searchInput);
    return RestaurentList.filter((restaurant)=>restaurant.card.card.info.name.includes(searchInput));
}




const Body=()=>{
    const[restaurant,setRestaurent]=useState(RestaurentList);
    const [searchInput,setSearchInput]=useState("");
    useEffect(() => {
        getRestaurants();
    }, []);
    
    async function getRestaurants() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.6287557&lng=79.4191795&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
    }
    return(
        <>
        <div className="search-container">
            <input type="text" 
                placeholder="Search" 
                value={searchInput}
                onChange={(e)=>setSearchInput(e.target.value)}
                className="input-serch"/>
            <button type="button" className="search-button" 
            onClick={()=>{
                const data=FilterBySearch(searchInput,restaurant)
                setRestaurent(data)
                }}>
                Search
            </button>
        </div>
        <div className='restaurent-cards'>
        {
            restaurant.map(restaurant=>{
                return(<RestaurentCard{...restaurant.card.card.info} />);
            })
        }
        </div>
        </>
    )
}

const RestaurentCard=(props)=>{
    return(
        <div className='card'>
            <img src={CDN_IMG_LINK+props.cloudinaryImageId}/>
            <h2>{props.name}</h2>
            <h3>{props.cuisines.join(" , ")}</h3>
            <h4>{props.avgRating} stars</h4>
        </div>
    )
}

export default Body;