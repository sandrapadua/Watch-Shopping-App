import * as React from 'react'
import { connect } from 'react-redux'
class ShoppingListContainer extends React.Component {

render(){
    let items=this.props.items.cartReducer
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
export default connect(mapStateToProps)(ShoppingListContainer)
