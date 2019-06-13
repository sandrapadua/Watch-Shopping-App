import Fastrack from '../images/fasttrack.jpeg'
import Casio from '../images/Casio.jpeg'
import Fossil from '../images/Fossil.jpeg'
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



]
}

const cartReducers = (state = initialState, action = {}) => {
    switch (action.type) {
    default:
      return state.items
    }
  }
  
  export default cartReducers

