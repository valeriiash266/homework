
const createThunk = (actionCreator) => {

    return (dispatch, getState) => {

        return actionCreator(dispatch, getState);
    };
}


export default createThunk;
