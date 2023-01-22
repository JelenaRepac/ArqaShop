import React from 'react'
import { ImCart } from "react-icons/im";
import { Link } from "react-router-dom";
import { IoHeartSharp} from "react-icons/io5"


function NavBar()  {
    return (
        
        <div className="navBar">
            <Link to="/" className="navBarItem"><span> &nbsp;&nbsp;<img className='logo' src="https://i.pinimg.com/564x/8d/9a/00/8d9a009dba6c959f892d4a834d450f98.jpg"></img>&nbsp;&nbsp; </span> </Link>
            <Link to="/proizvodi" className="navBarItem">Our products</Link>
            <Link to="/kontakt" className="navBarItem">Contact</Link>
            
            <Link to="/upiti" className="cart-items">
                <ImCart className="iconNav"   style={{ marginLeft: 10 }} />
            </Link>
        </div>

    )
}

export default NavBar