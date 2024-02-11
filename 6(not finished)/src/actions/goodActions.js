
const actionGetGoodById = (goodId) => async dispatch => {
    try {

        const good = await dispatch(actionGoodFindById(goodId));


        if (good) {

            dispatch(actionSetCurrentGood(good));
        } else {

            console.error('Good not received.');
        }
    } catch (error) {

        console.error('Error fetching good:', error);
    }
}


export { actionGetGoodById };
