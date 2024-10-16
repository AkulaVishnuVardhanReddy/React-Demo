import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';
import About from './Components/about';
import Error from './Components/Error';
import Contact from './Components/Contact';
import RestaurantList from './Components/RestaurantList';
import { createBrowserRouter,Outlet,RouterProvider } from 'react-router-dom';


const element=ReactDOM.createRoot(document.getElementById("element"));

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
                element: <About/>
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