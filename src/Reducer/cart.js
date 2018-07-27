const cart = (state = [], action) => {
    switch(action.type){
        case 'ADD_TO_CART' :
            const copyState = [...state]
            copyState.push(action.food)
            return copyState
        case 'REMOVE_TO_CART' :
            const State = [...state]
                .filter(food => food.id !== action.id)
            return State
        
        default:
            return state
    }
}

export default cart;