import { useEffect, useState } from "react";
import { CDN_IMG_LINK } from "../Config";
import Shimmer from "../Shimmer";
import { Link } from "react-router-dom";
import { FilterBySearch } from "../utils/helper";
import useOnline from "../utils/useOnline";

const Body=()=>{

    const[restaurant,setRestaurent]=useState([]);
    const[allrestaurant,setAllRestaurent]=useState([]);
    const [searchInput,setSearchInput]=useState("");
    const[found,setFound]=useState("yes");

    useEffect(() => {
        getRestaurants();
    }, []);
    
    async function getRestaurants() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.6287557&lng=79.4191795&collection=80463&tags=layout_BAU_Contextual%2Cnoodles&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
        const json = await data.json();
        json?.data?.cards.shift();
        json?.data?.cards.shift();
        json?.data?.cards.shift();
        setAllRestaurent(json?.data?.cards);
        setRestaurent(json?.data?.cards);
    }

    const offline = useOnline();
    if(offline){
        return <h2>OOps you are offline!!</h2>
    }

    return allrestaurant.length===0? <Shimmer/>: (
        <>
        <div className="search-container">


            <input type="text" 
                placeholder="Search" 
                value={searchInput}
                onChange={(e)=>setSearchInput(e.target.value)}
                className="p-1 m-4 border-solid border-gray-500 border-2 rounded-lg"/>


            <button type="button" className="bg-green-700 p-2 rounded-lg text-white" 
            onClick={()=>{
                const data=FilterBySearch(searchInput,allrestaurant)
                setRestaurent(data);
                if(data.length===0){
                    console.log(data);
                    setFound("no")
                }
                else{
                    setFound("yes")
                }
                }}>
                Search
            </button>
        </div>

        {found==="no" && <h1>Not Found..</h1>}
        
        <div className='flex flex-wrap'>
        {
            restaurant.map(restaurant=>{
                return(<Link to={"/restaurant/"+restaurant?.card?.card?.info?.id}>
                    <RestaurentCard{...restaurant?.card?.card?.info} 
                    key={restaurant?.card?.card?.info?.id}/>
                    </Link>);
            })
        }
        </div>
        </>
    )
}

const RestaurentCard=(props)=>{
    return(
        <div className='border-solid border-2 border-black-500 m-5 p-3 w-52 rounded-lg'>
            
            <img src={CDN_IMG_LINK+props?.cloudinaryImageId} className="h-32 w-36 rounded-lg"/>
            
            <h2 className="font-bold">{props?.name}</h2>
            <h3>{props.locality}</h3>
            <h4>{props?.avgRating} stars</h4>
        </div>
    )
}

export default Body;