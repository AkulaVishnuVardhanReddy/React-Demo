import logo from "../assets/img/logo.png"
import { Link } from "react-router-dom"

export const Title=()=>{
    return(
        <div className='header-left'>
            <img className='img-logo'
            src={logo}/>
            <h3>Food Villa</h3>
        </div>
    )
}

export const LinksHeader=()=>{
    return(
        <ul className='links-top'>
            <Link to="/"> <li>Home</li> </Link>
            <Link to="/about"> <li>About</li> </Link>
            <Link to="/contact"> <li>Contact</li> </Link>
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

export default Header;