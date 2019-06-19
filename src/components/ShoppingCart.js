import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeItem,addQuantity,subtractQuantity} from '../actions/cartActions'
import Reciept from './Reciept'
class ShoppingCart extends Component{

//for adding quantity
    handleAddQuantity = (id)=>{
        this.props.addQuantity(id);
    }
//for substracting quantity
handleSubtractQuantity = (id)=>{
    this.props.subtractQuantity(id);
}
//for removing item
handleRemove = (id)=>{
    this.props.removeItem(id);
}

    render(){

console.log("items in cart",this.props.items)
let items = this.props.items

let addedItems = items.length ?
            (  
                items.map(item=>{
                    return(
                        <div className ='single-item' key={item.id}>
                        <div className ='single-item-styling'>

                        <img className ='image-size'src={item.image} alt={item.Manufacturer}/><br/>

                                        <span >{item.Manufacturer}</span>
                                        <p>{item.desc}</p>
                                        <p><b>Price: {item.Price}$</b></p> 
                                        <p>
                                            <b>Quantity: {item.quantity}</b> 
                                        </p>
                                        <div>
                                        <Link className ='size-med ' to="/shoppingCart"onClick={()=>{this.handleAddQuantity(item.id)}}><button className='size-med' >+</button></Link>
                                        <Link className ='size-med' to="/shoppingCart" onClick={()=>{this.handleSubtractQuantity(item.id)}}><button className = 'left-margin size-med'>-</button></Link>
                                        </div><br/>
                                        <button className ='size-small' onClick={()=>{this.handleRemove(item.id)}}>Remove Item</button>
                                        </div> </div>)
                })
            ):

             (
                <p>cart is empty!!!</p>
             )

        return(
        <div className="container">
        <h2 className="center"> Our Products </h2>
        <div className = 'display-flex'>
        {addedItems}
        </div>
        <Reciept/>
    </div> )
    }
}


const mapStateToProps = (state)=>{
    return{
        items: state.addedItems
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (id)=>{dispatch(removeItem(id))},
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ShoppingCart)
