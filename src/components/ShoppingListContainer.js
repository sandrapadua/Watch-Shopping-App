import * as React from 'react'
import { connect } from 'react-redux'
import {addToCart} from '../actions/cartActions'
class ShoppingListContainer extends React.Component {

       
    handleClick = (id)=>{
        console.log("clicked")
        this.props.addToCart(id); 
    }

render(){
    let items=this.props.items.cartReducer.items
    console.log("initial state",items)
 

    let itemList = items.map(item=>{
        return(
            <div  key={item.id}>
                    <div >
                    <img src={item.image} alt={item.Manufacturer}/><br/>
                        <span >{item.Manufacturer}</span>
                        <p>{item.desc}</p>
                        <p>{item.Material}</p>
                        <p>{item.color}</p>
                        <p><b>Price: {item.Price}$</b></p>
                        <span to ="/" onClick={()=>{this.handleClick(item.id)}}><i>Add to cart</i></span>
                    </div>
             </div>

        )
    })

    return(
        <div>
    {itemList}
    </div>)
}
}

const mapStateToProps = (state)=>{
    return {
      items: state
    }
  }
  const mapDispatchToProps= (dispatch)=>{
    
    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ShoppingListContainer)
