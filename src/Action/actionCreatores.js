export const addtocart = (food) => {
    return{
        type: 'ADD_TO_CART',
        food
    }
} 

export const removetocart = (id) => {
    return{
        type: 'REMOVE_TO_CART',
        id
    }
}