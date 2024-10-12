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
        <div className='restaurent-cards'>
            <RestaurentCard/>
            <RestaurentCard/>
            <RestaurentCard/>
            <RestaurentCard/>
            <RestaurentCard/>
            <RestaurentCard/>
            <RestaurentCard/>
            <RestaurentCard/>
            <RestaurentCard/>
        </div>
    )
}

const Biryani={
    name:"Chicken Biryani",
    img:"https://ministryofcurry.com/wp-content/uploads/2023/10/paneer-biryani_-9.jpg",
    cusines:["Chicken","Hydrabad"],
    rating:"4.2"
}

const RestaurentCard=()=>{
    return(
        <div className='card'>
            <img src={Biryani.img}/>
            <h2>{Biryani.name}</h2>
            <h3>{Biryani.cusines.join(" , ")}</h3>
            <h4>{Biryani.rating} stars</h4>
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