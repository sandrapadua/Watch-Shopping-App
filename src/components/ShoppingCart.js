import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeItem,addQuantity,subtractQuantity} from '../actions/cartActions'
class ShoppingCart extends Component{

//for adding quantity
    handleAddQuantity = (id)=>{
        this.props.addQuantity(id);
    }
//for substracting quantity
handleSubtractQuantity = (id)=>{
    this.props.subtractQuantity(id);
}



    render(){

console.log("items in cart",this.props.items.cartReducer.addedItems)
let items = this.props.items.cartReducer.addedItems

let addedItems = items.length ?
            (  
                items.map(item=>{
                    return(
                       <div>
                        <li key={item.id}>
                        <div>
                        <img src={item.image} alt={item.Manufacturer}/><br/>

                                        <span >{item.Manufacturer}</span>
                                        <p>{item.desc}</p>
                                        <p><b>Price: {item.price}$</b></p> 
                                        <p>
                                            <b>Quantity: {item.quantity}</b> 
                                        </p>
                                        <div>
                                        <Link to="/cart"><i  onClick={()=>{this.handleAddQuantity(item.id)}}><b>+</b></i></Link>
                                       <br/> <Link to="/cart"><i onClick={()=>{this.handleSubtractQuantity(item.id)}}><b>-</b></i></Link>
                                        </div>
                                        </div></li></div>)
                })
            ):

             (
                <p>Nothing.</p>
             )

        return(<div className="cart">
        <h3>You have ordered:</h3>
        {addedItems}
    </div> )
    }
}


const mapStateToProps = (state)=>{
    return{
        items: state,
    }
}

export default connect(mapStateToProps)(ShoppingCart)
