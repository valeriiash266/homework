
function Header(userName, cartItemCount) {

    const header = document.createElement('header');


    const welcomeText = userName ? `Welcome, ${userName}!` : 'Welcome!';
    const cartText = `Cart (${cartItemCount})`;


    const contentDiv = document.createElement('div');


    contentDiv.innerHTML = `<span>${welcomeText}</span><span>${cartText}</span>`;


    header.appendChild(contentDiv);


    return header;
}


export { Header };
