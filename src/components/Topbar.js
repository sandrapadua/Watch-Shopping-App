import React from 'react';
import { Link } from 'react-router-dom'
 const Topbar = ()=>{
    return(
            <nav className="nav-wrapper">
                <div >
                    <Link to="/">Shopping</Link>
                    
                    <ul className="right">
                        <li><Link to="/">Shop</Link></li>
                        <li><Link to="/shoppingCart">My cart</Link></li>

                    </ul>
                </div>
            </nav>
   
        
    )
}

export default Topbar;