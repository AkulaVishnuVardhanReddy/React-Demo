export const Title=()=>{
    return(
        <div className='header-left'>
            <img className='img-logo'
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9AIyWJnv-qeoSVFHoDSoWPoYpqTm_vWoxcg&s"/>
            <h3>Food Villa</h3>
        </div>
    )
}

export const LinksHeader=()=>{
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

export default Header;