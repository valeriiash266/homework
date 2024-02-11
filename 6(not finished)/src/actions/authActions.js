
const actionFullLogin = (login, password) => async dispatch => {
    try {

        const token = await dispatch(actionLogin(login, password));

        // Перевіряємо, чи отримано токен
        if (typeof token === 'string') {

            dispatch(actionAuthLogin(token));
        } else {

            console.error('Token not received.');
        }
    } catch (error) {

        console.error('Error during login:', error);
    }
}


export { actionFullLogin };
