
function LoginPage() {

    const loginForm = document.createElement('form');


    loginForm.innerHTML = `
    <label for="username">Username:</label><br>
    <input type="text" id="username" name="username"><br>
    <label for="password">Password:</label><br>
    <input type="password" id="password" name="password"><br><br>
    <button type="submit">Login</button>
  `;

    loginForm.addEventListener('submit', handleLoginFormSubmit);


    return loginForm;
}


function handleLoginFormSubmit(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
}


export { LoginPage };
