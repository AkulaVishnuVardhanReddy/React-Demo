import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';

const element=ReactDOM.createRoot(document.getElementById("element"));

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