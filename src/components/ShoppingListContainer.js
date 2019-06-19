import * as React from 'react'
import { connect } from 'react-redux'
import {addToCart} from '../actions/cartActions'
import { Link } from 'react-router-dom'

class ShoppingListContainer extends React.Component {

       
    handleClick = (id)=>{
        console.log("clicked")
        this.props.addToCart(id); 
    }

render(){
    let items=this.props.items
    console.log("initial state",items)
 

    let itemList = items.map(item=>{
        return(
            <div  className ='item-listing' key={item.id}>
                    <div >
                      
                    <h1 >{item.Manufacturer}</h1>
                    <img className ='image-size' src={item.image} alt={item.Manufacturer}/><br/>
                        <p>{item.desc}</p>
                        <p>{item.Material}</p>
                        <p>{item.color}</p>
                        <p><b>Price: {item.Price}$</b></p>
                       <Link to="/"> <span className ='cursor' onClick={()=>{this.handleClick(item.id)}}><i>Add to cart</i></span></Link><br/><br/>
                    </div>
             </div>

        )
    })
console.log('ITEM LIST',itemList)
    return(
        <div className="container">
        <h2 className="center"> Our Products </h2>
            <div className = 'box'>
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
