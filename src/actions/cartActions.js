// for adding items to cart
export const addToCart= (id)=>{
    return{
        type: 'ADD_TO_CART',
        id
    }
}
//for adding the quantity
export const addQuantity=(id)=>{
    return{
        type: 'ADD_QUANTITY',
        id
    }
}

//for substracting the quantity
export const subtractQuantity=(id)=>{
    return{
        type: 'SUB_QUANTITY',
        id
    }
}

//for removing an item
export const removeItem=(id)=>{
    return{
        type: 'REMOVE_ITEM',
        id
    }
}