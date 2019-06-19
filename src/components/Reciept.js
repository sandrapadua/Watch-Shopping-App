import React, { Component } from 'react'
import { connect } from 'react-redux'
class Reciept extends Component{
    render(){
  console.log("TOTAL", this.props.total)


        return(
            <div className ='container left-margin-large bold-large-text'>
                <p>Total: {this.props.total} $</p>
            <button className='bold-large-text bottom-margin'>Checkout</button>
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
