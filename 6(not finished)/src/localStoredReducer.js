
const localStoredReducer = (reducer, localStorageKey) => {

    const storedState = localStorage.getItem(localStorageKey);

    const initialState = storedState ? JSON.parse(storedState) : reducer(undefined, {});


    return (state, action) => {

        const newState = reducer(state || initialState, action);


        localStorage.setItem(localStorageKey, JSON.stringify(newState));


        return newState;
    };
};

export default localStoredReducer;
