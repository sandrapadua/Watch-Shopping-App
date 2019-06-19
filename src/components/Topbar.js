import React from 'react';
import { Link } from 'react-router-dom'
 const Topbar = ()=>{
    return(
            <nav className="navbar">
                <div className = 'container-top'>
                   <p className ='text-white'> Watch - Shopping</p> 
                    <ul className="right text-white">
                        <p ><Link className ='text-white' to="/">Shop</Link></p>
                        <p><Link className ='text-white' to="/shoppingCart">My cart</Link></p>

                    </ul>
                </div>
            </nav>
   
        
    )
}

export default Topbar;