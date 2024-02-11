
const initialState = {
    user: {
        token: null,
        isAuthenticated: false,
        error: null
    },
    categories: [],
    currentCategory: null,
    good: null,
    orders: [],
    cart: []
};


const userReducer = (state = initialState.user, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                token: action.payload,
                isAuthenticated: true,
                error: null
            };
        case 'LOGIN_FAILURE':
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                error: action.payload
            };
        case 'REGISTER_SUCCESS':
            return {
                ...state,
                error: null
            };
        case 'REGISTER_FAILURE':
            return {
                ...state,
                error: action.payload
            };
        case 'LOGOUT':
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                error: null
            };
        default:
            return state;
    }
};


const categoryReducer = (state = initialState.categories, action) => {
    switch (action.type) {
        case 'SET_ROOT_CATEGORIES':
            return action.payload;
        default:
            return state;
    }
};


const currentCategoryReducer = (state = initialState.currentCategory, action) => {
    switch (action.type) {
        case 'SET_CATEGORY':
            return action.payload;
        default:
            return state;
    }
};


const goodReducer = (state = initialState.good, action) => {
    switch (action.type) {
        case 'SET_GOOD':
            return action.payload;
        default:
            return state;
    }
};


const ordersReducer = (state = initialState.orders, action) => {
    switch (action.type) {
        case 'SET_ORDERS':
            return action.payload;
        default:
            return state;
    }
};


const cartReducer = (state = initialState.cart, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return [...state, action.payload];
        case 'REMOVE_FROM_CART':
            return state.filter(item => item.id !== action.payload);
        case 'CLEAR_CART':
            return [];
        default:
            return state;
    }
};


const rootReducer = (state = initialState, action) => {
    return {
        user: userReducer(state.user, action),
        categories: categoryReducer(state.categories, action),
        currentCategory: currentCategoryReducer(state.currentCategory, action),
        good: goodReducer(state.good, action),
        orders: ordersReducer(state.orders, action),
        cart: cartReducer(state.cart, action)
    };
};

export default rootReducer;
