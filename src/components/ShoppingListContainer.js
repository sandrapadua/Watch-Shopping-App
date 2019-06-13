import * as React from 'react'
import { connect } from 'react-redux'
import {addToCart} from '../actions/cartActions'
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
            <div  className ='flex-container' key={item.id}>
                    <div >
                      
                    <h1 >{item.Manufacturer}</h1>
                    <img className ='image-size' src={item.image} alt={item.Manufacturer}/><br/>
                        <p>{item.desc}</p>
                        <p>{item.Material}</p>
                        <p>{item.color}</p>
                        <p><b>Price: {item.Price}$</b></p>
                        <span className ='cursor' onClick={()=>{this.handleClick(item.id)}}><i>Add to cart</i></span><br/><br/>
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
      items: state.items
    }
  }
  const mapDispatchToProps= (dispatch)=>{
    
    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ShoppingListContainer)
