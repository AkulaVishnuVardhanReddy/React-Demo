import React from 'react'
import ReactDOM from 'react-dom/client'

const element=ReactDOM.createRoot(document.getElementById("element"));

const Title=()=>{
    return(
        <div className='header-left'>
            <img className='img-logo'
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9AIyWJnv-qeoSVFHoDSoWPoYpqTm_vWoxcg&s"/>
            <h3>Food Villa</h3>
        </div>
    )
}

const LinksHeader=()=>{
    return(
        <ul className='links-top'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Carts</li>
        </ul>
    )
}

const Header=()=>{
    return(
        <div className='header-container'>
            <Title />
            <LinksHeader />
        </div>
    );
};

const Body=()=>{
    return(
        <div>
            <RestaurentCard/>
        </div>
    )
}

const RestaurentCard=()=>{
    return(
        <div className='card'>
            <img src="https://ministryofcurry.com/wp-content/uploads/2023/10/paneer-biryani_-9.jpg"/>\
            <h2>Chicken Biryani</h2>
            <h3>Spicy Tastey</h3>
            <h4>4.2 star rating</h4>
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