import Fastrack from '../images/fasttrack.jpeg'
import Casio from '../images/Casio.jpeg'
import Fogg from '../images/Fogg.jpeg'



const initialState = {

items:[
   
{
    id:1,
    Manufacturer: 'Fastrack', 
    image: Fastrack,
    desc: "Water Resistant, AnalogType, Style Code NF3123SL02C, Wrist Watch.",
    Material:'Leather',
    color:'Brown',
    Warranty: 'one year',
    Price:100
},
{
    id:2,
    Manufacturer: 'Casio',
    image: Casio, 
    desc: "Water Resistant, AnalogType, Style Code NF3123SL02C, Wrist Watch.",
    Material:'stainless stee;',
    color:'Silver',
    Warranty: 'one year',
    Price:200
},
{
    id:3, 
    Manufacturer: 'Fogg', 
    image: Fogg,
    desc: "Water Resistant, AnalogType, Style Code NF3123SL02C, Wrist Watch.",
    Material:'Leather',
    color:'Brown',
    Warranty: 'one year',
    Price:80
}
],
addedItems:[],
total: 0
}

const cartReducers = (state = initialState, action = {}) => {
    switch (action.type) {

        case 'ADD_TO_CART':{
        console.log("add to cart",state.items)
            let addedItem = state.items.find(item=> item.id === action.id)
            console.log("added item",addedItem)
           let existed_item= state.addedItems.find(item=> action.id === item.id)
           if(existed_item)
           {
              addedItem.quantity += 1 
               return{
                  ...state,
                   total: state.total + addedItem.price 
                    }
          }
           else{
              addedItem.quantity = 1;
  
              let newTotal = state.total + addedItem.price 
              
              return{
                  ...state,
                  addedItems: [...state.addedItems, addedItem],
                  total : newTotal
              }
            }}
            
          case 'ADD_QUANTITY':{
          let addedItem = state.items.find(item=> item.id === action.id)
          console.log("ADDING QUANTIY",addedItem)
          addedItem.quantity += 1 
          let newTotal = state.total + addedItem.price
          return{
              ...state,
              total: newTotal
          }
        }
        case 'SUB_QUANTITY':{
            let addedItem = state.items.find(item=> item.id === action.id) 
        //if the quantity == 0 then it should be removed
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                total: newTotal
            }
        }
        
    }
       case 'REMOVE_ITEM':{
        let itemToRemove= state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)
        
        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
        console.log(itemToRemove)
        return{
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
       



    default:
      return state
    }
    
  }
  
  export default cartReducers

