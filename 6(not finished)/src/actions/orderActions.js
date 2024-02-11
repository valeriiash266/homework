import {actionClearCart} from "./cartActions";

const actionPlaceOrder = () => async (dispatch, getState) => {
    try {

        const { cart } = getState();


        if (cart.length === 0) {
            console.error('Cannot place order: Cart is empty.');
            return;
        }


        const orderGoods = cart.map(item => ({
            good: { _id: item._id },
            count: item.quantity
        }));


        const orderResult = await dispatch(actionOrderUpsert(orderGoods));


        if (orderResult) {

            console.log('Order placed successfully.');


            dispatch(actionClearCart());
        } else {

            console.error('Error placing order.');
        }
    } catch (error) {

        console.error('Error placing order:', error);
    }
}


export { actionPlaceOrder };
