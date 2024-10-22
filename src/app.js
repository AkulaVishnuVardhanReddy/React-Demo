import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';
import Error from './Components/Error';
import Contact from './Components/Contact';
import RestaurantList from './Components/RestaurantList';
import Profile from './Components/Profile';
import { createBrowserRouter,Outlet,RouterProvider } from 'react-router-dom';
import Shimmer from './Shimmer';


const element=ReactDOM.createRoot(document.getElementById("element"));
const About = lazy(()=>import('./Components/about'));

const AppLayout=()=>{
    return(
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<Error/>,
        children:[
            {
                path:"/",
                element: <Body/>
            },
            {
                path:"/about",
                element: <Suspense fallback={<Shimmer/>}><About/></Suspense>, 
                children:[
                    {
                        path:"profile",
                        element:<Profile/>
                    }
                ]
            },
            {
                path:"/contact",
                element: <Contact/>
            },
            {
                path:"/restaurant/:id",
                element: <RestaurantList/>
            }
        ]
    }
    
])

element.render(<RouterProvider  router={appRouter}/>);