import React from 'react';
import { Link } from 'react-router-dom'
 const Topbar = ()=>{
    return(
            <nav className="navbar">
                <div className = 'container'>
                   <p> <Link to="/">Shopping</Link></p>
                    
                    <ul className="right">
                        <p><Link to="/">Shop</Link></p>
                        <p><Link to="/shoppingCart">My cart</Link></p>

                    </ul>
                </div>
            </nav>
   
        
    )
}

export default Topbar;