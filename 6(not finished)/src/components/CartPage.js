
function CartPage(cartItems) {

    const cartContainer = document.createElement('div');


    if (cartItems.length === 0) {
        cartContainer.textContent = 'Your cart is empty.';
    } else {

        cartItems.forEach(item => {
            const cartItemElement = document.createElement('div');
            cartItemElement.textContent = `Product: ${item.name}, Quantity: ${item.quantity}`;
            cartContainer.appendChild(cartItemElement);
        });
    }


    const checkoutButton = document.createElement('button');
    checkoutButton.textContent = 'Checkout';


    checkoutButton.addEventListener('click', handleCheckoutButtonClick);


    const cartPage = document.createElement('div');
    cartPage.appendChild(cartContainer);
    cartPage.appendChild(checkoutButton);


    return cartPage;
}


function handleCheckoutButtonClick() {

}


export { CartPage };
