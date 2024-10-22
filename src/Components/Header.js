import logo from "../assets/img/logo.png"
import { Link } from "react-router-dom"

export const Title=()=>{
    return(
        <div className='flex'>
            <img className='h-24'
            src={logo}/>
            <h3 className="text-xl font-bold p-4 font-sans">Food Villa</h3>
        </div>
    )
}

export const LinksHeader=()=>{
    return(
        <ul className='flex p-3'>
            <Link to="/" className="p-3"> <li>Home</li> </Link>
            <Link to="/about" className="p-3"> <li>About</li> </Link>
            <Link to="/contact" className="p-3"> <li>Contact</li> </Link>
            <li className="p-3">Carts</li>
        </ul>
    )
}

const Header=()=>{
    return(
        <div className='flex justify-between'>
            <Title />
            <LinksHeader />
        </div>
    );
};

export default Header;