
export const loginSuccess = (token) => ({
    type: 'LOGIN_SUCCESS',
    payload: token
});

export const loginFailure = (error) => ({
    type: 'LOGIN_FAILURE',
    payload: error
});

export const registerSuccess = (message) => ({
    type: 'REGISTER_SUCCESS',
    payload: message
});

export const registerFailure = (error) => ({
    type: 'REGISTER_FAILURE',
    payload: error
});

export const logout = () => ({
    type: 'LOGOUT'
});

export const setRootCategories = (categories) => ({
    type: 'SET_ROOT_CATEGORIES',
    payload: categories
});

export const setCategory = (category) => ({
    type: 'SET_CATEGORY',
    payload: category
});

export const setGood = (good) => ({
    type: 'SET_GOOD',
    payload: good
});


export const setOrders = (orders) => ({
    type: 'SET_ORDERS',
    payload: orders
});


export const addToCart = (item) => ({
    type: 'ADD_TO_CART',
    payload: item
});

export const removeFromCart = (itemId) => ({
    type: 'REMOVE_FROM_CART',
    payload: itemId
});

export const clearCart = () => ({
    type: 'CLEAR_CART'
});
