const catalog = (state = [], action) => {
    switch(action.type){
        case 'REMOVE_TO_CART':
            return null
        default:
            return state
    }
}

export default catalog;