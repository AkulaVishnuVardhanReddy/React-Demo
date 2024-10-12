import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Components/Header';

const element=ReactDOM.createRoot(document.getElementById("element"));


const Body=()=>{
    return(
        <div className='restaurent-cards'>
        {
            RestaurentList.map(restaurant=>{
                return(<RestaurentCard{...restaurant.card.card.info} />);
            })
        }
        </div>
    )
}

const RestaurentList=[
        {
        "card": {
        "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
        "id": "87104",
        "name": "Minerva Coffee Shop",
        "cloudinaryImageId": "8e780647ed8a3d72b244d13cabe9cd11",
        "locality": "Renigunta Road",
        "areaName": "Tata Nagar",
        "costForTwo": "₹200 for two",
        "cuisines": [
        "South Indian",
        "Chinese",
        "Desserts"
        ],
        "avgRating": 4.2,
        "veg": true,
        "parentId": "136393",
        "avgRatingString": "4.2",
        "totalRatingsString": "4.9K+",
        "promoted": true,
        "adTrackingId": "cid=19516020~p=0~adgrpid=19516020#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=87104~eid=7fdcdc0b-6e5f-4666-8f1f-a997320f9279~srvts=1728707893162~collid=129839",
        "sla": {
        "deliveryTime": 30,
        "lastMileTravel": 1,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "1.0 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2024-10-12 22:45:00",
        "opened": true
        },
        "badges": {
        "imageBadges": [
        {
        "imageId": "v1695133679/badges/Pure_Veg111.png",
        "description": "pureveg"
        }
        ]
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {},
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "imageBased": {
        "badgeObject": [
        {
        "attributes": {
        "imageId": "v1695133679/badges/Pure_Veg111.png",
        "description": "pureveg"
        }
        }
        ]
        },
        "textExtendedBadges": {},
        "textBased": {}
        }
        },
        "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {}
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
        "aggregatedRating": {
        "rating": "--"
        }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        "campaignId": "19516020"
        },
        "analytics": {},
        "cta": {
        "link": "swiggy://menu?restaurant_id=87104&source=collection&query=Navratri",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget"
        }
        }
        },
        {
        "card": {
        "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
        "id": "98464",
        "name": "PS4 Veg Restaurant (Perambur Sri Srinivasa)",
        "cloudinaryImageId": "bnhseopcrbvdcarasz2c",
        "locality": "Tirumala Bypass Road",
        "areaName": "Korlagunta",
        "costForTwo": "₹200 for two",
        "cuisines": [
        "South Indian",
        "Sweets",
        "Chinese",
        "Chaat",
        "Juices"
        ],
        "avgRating": 4.3,
        "veg": true,
        "parentId": "560050",
        "avgRatingString": "4.3",
        "totalRatingsString": "59K+",
        "sla": {
        "deliveryTime": 22,
        "lastMileTravel": 2.1,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "2.1 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2024-10-12 23:40:00",
        "opened": true
        },
        "badges": {
        "imageBadges": [
        {
        "imageId": "Rxawards/_CATEGORY-South%20Indian.png",
        "description": "Delivery!"
        },
        {
        "imageId": "v1695133679/badges/Pure_Veg111.png",
        "description": "pureveg"
        }
        ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "textBased": {},
        "imageBased": {
        "badgeObject": [
        {
        "attributes": {
        "imageId": "Rxawards/_CATEGORY-South%20Indian.png",
        "description": "Delivery!"
        }
        },
        {
        "attributes": {
        "description": "pureveg",
        "imageId": "v1695133679/badges/Pure_Veg111.png"
        }
        }
        ]
        },
        "textExtendedBadges": {}
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "40% OFF",
        "subHeader": "UPTO ₹80"
        },
        "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {}
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
        "aggregatedRating": {
        "rating": "--"
        }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {},
        "cta": {
        "link": "swiggy://menu?restaurant_id=98464&source=collection&query=Navratri",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget"
        }
        }
        },
        {
        "card": {
        "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
        "id": "652933",
        "name": "A2B - Adyar Ananda Bhavan",
        "cloudinaryImageId": "262ca7b195a5e7084e175600667f53a5",
        "locality": "Sivajothinagar",
        "areaName": "Korlagunta",
        "costForTwo": "₹300 for two",
        "cuisines": [
        "South Indian",
        "North Indian",
        "Chinese",
        "Sweets"
        ],
        "avgRating": 4.1,
        "veg": true,
        "parentId": "22",
        "avgRatingString": "4.1",
        "totalRatingsString": "4.0K+",
        "promoted": true,
        "adTrackingId": "cid=19616040~p=2~adgrpid=19616040#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=652933~eid=b0ca8c99-a8ca-4a9f-907a-17ed7ef557ee~srvts=1728707893162~collid=129839",
        "sla": {
        "deliveryTime": 23,
        "lastMileTravel": 3,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "3.0 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2024-10-12 22:00:00",
        "opened": true
        },
        "badges": {
        "imageBadges": [
        {
        "imageId": "Green%20Dot%20Awards/Best%20In%20Pure%20Veg.png",
        "description": "Delivery!"
        },
        {
        "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Thali.png",
        "description": "Delivery!"
        },
        {
        "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
        "description": "OnlyOnSwiggy"
        },
        {
        "imageId": "v1695133679/badges/Pure_Veg111.png",
        "description": "pureveg"
        }
        ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "imageBased": {
        "badgeObject": [
        {
        "attributes": {
        "imageId": "Green%20Dot%20Awards/Best%20In%20Pure%20Veg.png",
        "description": "Delivery!"
        }
        },
        {
        "attributes": {
        "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Thali.png",
        "description": "Delivery!"
        }
        },
        {
        "attributes": {
        "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
        "description": "OnlyOnSwiggy"
        }
        },
        {
        "attributes": {
        "imageId": "v1695133679/badges/Pure_Veg111.png",
        "description": "pureveg"
        }
        }
        ]
        },
        "textExtendedBadges": {},
        "textBased": {}
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "₹75 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL"
        },
        "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {}
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
        "aggregatedRating": {
        "rating": "--"
        }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        "campaignId": "19616040"
        },
        "analytics": {},
        "cta": {
        "link": "swiggy://menu?restaurant_id=652933&source=collection&query=Navratri",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget"
        }
        }
        },
        {
        "card": {
        "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
        "id": "419785",
        "name": "Sri Annapurna Mess And Catring Services",
        "cloudinaryImageId": "tx2mf12fkwvqq2eeay1i",
        "locality": "Lakshmi Puram Circle",
        "areaName": "Tirupati_Dominos",
        "costForTwo": "₹200 for two",
        "cuisines": [
        "South Indian",
        "North Indian",
        "Chinese"
        ],
        "avgRating": 4.1,
        "veg": true,
        "parentId": "233429",
        "avgRatingString": "4.1",
        "totalRatingsString": "4.8K+",
        "sla": {
        "deliveryTime": 23,
        "lastMileTravel": 1.8,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "1.8 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2024-10-12 23:00:00",
        "opened": true
        },
        "badges": {
        "imageBadges": [
        {
        "imageId": "v1695133679/badges/Pure_Veg111.png",
        "description": "pureveg"
        }
        ]
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {},
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "textExtendedBadges": {},
        "textBased": {},
        "imageBased": {
        "badgeObject": [
        {
        "attributes": {
        "imageId": "v1695133679/badges/Pure_Veg111.png",
        "description": "pureveg"
        }
        }
        ]
        }
        }
        },
        "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {}
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
        "aggregatedRating": {
        "rating": "--"
        }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {},
        "cta": {
        "link": "swiggy://menu?restaurant_id=419785&source=collection&query=Navratri",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget"
        }
        }
        },
        {
        "card": {
        "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
        "id": "80063",
        "name": "Hotel Saravana Bhavan",
        "cloudinaryImageId": "h8fzxmhbiqx5kjdmx5gz",
        "locality": "Srinivasa Nagar",
        "areaName": "Tirumala By Pass Road",
        "costForTwo": "₹200 for two",
        "cuisines": [
        "South Indian",
        "Chinese"
        ],
        "avgRating": 3.5,
        "veg": true,
        "parentId": "101987",
        "avgRatingString": "3.5",
        "totalRatingsString": "4.0K+",
        "promoted": true,
        "adTrackingId": "cid=19633855~p=4~adgrpid=19633855#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=80063~eid=b401dad6-7825-43de-a4f5-ecde1b550a3d~srvts=1728707893162~collid=129839",
        "sla": {
        "deliveryTime": 21,
        "lastMileTravel": 2.8,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "2.8 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2024-10-12 23:30:00",
        "opened": true
        },
        "badges": {
        "imageBadges": [
        {
        "imageId": "v1695133679/badges/Pure_Veg111.png",
        "description": "pureveg"
        }
        ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "imageBased": {
        "badgeObject": [
        {
        "attributes": {
        "imageId": "v1695133679/badges/Pure_Veg111.png",
        "description": "pureveg"
        }
        }
        ]
        },
        "textExtendedBadges": {},
        "textBased": {}
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "10% OFF",
        "subHeader": "UPTO ₹40"
        },
        "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {}
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
        "aggregatedRating": {
        "rating": "--"
        }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        "campaignId": "19633855"
        },
        "analytics": {},
        "cta": {
        "link": "swiggy://menu?restaurant_id=80063&source=collection&query=Navratri",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget"
        }
        }
        }
]

const RestaurentCard=(props)=>{
    return(
        <div className='card'>
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
                +props.cloudinaryImageId}/>
            <h2>{props.name}</h2>
            <h3>{props.cuisines.join(" , ")}</h3>
            <h4>{props.avgRating} stars</h4>
        </div>
    )
}

const Footer=()=>{
    return(
        <div>
            Footer
        </div>
    )
}

const AppLayout=()=>{
    return(
        <>
            <Header/>
            <Body/>
            <Footer/>
        </>
    )
}

element.render(<AppLayout/>);