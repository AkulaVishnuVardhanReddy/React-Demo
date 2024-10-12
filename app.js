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

const AppLayout=()=>{
    return(
        <div>
            <Header/>
            <Body/>
            <Footer/>
        </div>
    )
}

element.render(<Header/>);