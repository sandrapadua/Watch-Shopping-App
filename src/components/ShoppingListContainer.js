import * as React from 'react'
import { connect } from 'react-redux'
import {addToCart} from '../actions/cartActions'
import { Link } from 'react-router-dom'

class ShoppingListContainer extends React.Component {

       
    handleClick = (id)=>{
        alert("Added to cart")
        console.log("clicked")
        this.props.addToCart(id); 
    }

render(){
    let items=this.props.items
    console.log("initial state",items)
 

    let itemList = items.map(item=>{
        return(
            <div className ='single-item'  key={item.id}>
                    <div className ='single-item-styling'>
                      
                    <h1 className = 'text-center'>{item.Manufacturer}</h1>
                    <img className ='product-img' src={item.image} alt={item.Manufacturer}/><br/>
                        <p>{item.desc}</p>
                        <p>{item.Material}</p>
                        <p>{item.color}</p>
                        <p><b>Price: {item.Price}$</b></p>
                       <Link to="/"> <button className ='cursor' onClick={()=>{this.handleClick(item.id)}}><i>Add to cart</i></button></Link><br/><br/>
                    </div>
             </div>

        )
    })
console.log('ITEM LIST',itemList)
    return(
        <div className="container">
        <h2 className="center"> Our Products </h2>
            <div className = 'display-flex'>
                {itemList}
            </div>
         </div>)
}
}

const mapStateToProps = (state)=>{
    return {
      items: state.items
    }
  }
  const mapDispatchToProps= (dispatch)=>{
    
    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ShoppingListContainer)
