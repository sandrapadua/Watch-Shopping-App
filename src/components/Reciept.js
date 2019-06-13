import React, { Component } from 'react'
import { connect } from 'react-redux'
class Reciept extends Component{
    render(){
  console.log("TOTAL", this.props.total)


        return(
            <div>
                <p>Total: {this.props.total} $</p>
            <button>Checkout</button>
        </div>
        )}
}

const mapStateToProps = (state)=>{
    return{
        addedItems: state.addedItems,
        total: state.total
    }
}
export default connect(mapStateToProps)(Reciept)
