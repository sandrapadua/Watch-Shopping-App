import Fastrack from './images/fasttrack.jpeg'
import Casio from './images/Casio.jpeg'
import Fogg from './images/Fogg.jpeg'
import Fossil from './images/Fossil.png'
import Armani from './images/Armani.png'
import Aviator from './images/Aviator.jpg'



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
},
{
    id:4, 
    Manufacturer: 'Fossil', 
    image: Fossil,
    desc: "Water Resistant, AnalogType, Style Code NF3123SL02C, Wrist Watch.",
    Material:'stainless steel',
    color:'Silver',
    Warranty: 'one year',
    Price:150
},
{
    id:5, 
    Manufacturer: 'Armani', 
    image: Armani,
    desc: "Water Resistant, AnalogType, Style Code NF3123SL02C, Wrist Watch.",
    Material:'steel',
    color:'silver',
    Warranty: 'one year',
    Price:155
},
{
    id:6, 
    Manufacturer: 'Aviator', 
    image: Aviator,
    desc: "Water Resistant, AnalogType, Style Code NF3123SL02C, Wrist Watch.",
    Material:'steel',
    color:'silver',
    Warranty: 'one year',
    Price:250
}
],
addedItems:[],
total: 0
}

const cartReducers = (state = initialState, action = {}) => {
    switch (action.type) {

        case 'ADD_TO_CART':{
        console.log("add to cart",state.items)
        console.log("total price",state.total)

        console.log("action id",action.id)


            let addedItem = state.items.find(item=> item.id === action.id)
            console.log("added item price",addedItem)

            console.log("added item",addedItem) // checked wheather the item added is an existing item
           let existed_item= state.addedItems.find(item=> action.id === item.id)
           if(existed_item)
           {
              addedItem.quantity += 1 
               return{
                  ...state,
                   total: state.total + addedItem.Price 
                    }
          }
           else{
              addedItem.quantity = 1;
  
              let newTotal = state.total + addedItem.Price 
              
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
          let newTotal = state.total + addedItem.Price
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
            let newTotal = state.total - addedItem.Price
            return{
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.Price
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
        let newTotal = state.total - (itemToRemove.Price * itemToRemove.quantity )
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

