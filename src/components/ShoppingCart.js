import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
class ShoppingCart extends Component{
    render(){
        return(<div className="cart">
        <h3>You have ordered:</h3>
        
    </div> )
    }
}


export default connect()(ShoppingCart)
