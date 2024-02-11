
const actionAddToCart = (item) => {
    return {
        type: 'ADD_TO_CART',
        payload: item
    };
}


const actionRemoveFromCart = (itemId) => {
    return {
        type: 'REMOVE_FROM_CART',
        payload: itemId
    };
}


const actionClearCart = () => {
    return {
        type: 'CLEAR_CART'
    };
}


const actionChangeQuantity = (itemId, newQuantity) => {
    return {
        type: 'CHANGE_QUANTITY',
        payload: { itemId, newQuantity }
    };
}


export { actionAddToCart, actionRemoveFromCart, actionClearCart, actionChangeQuantity };
