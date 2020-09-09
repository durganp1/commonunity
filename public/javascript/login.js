async function loginFormHandler(event) {
    event.preventDefault();

    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (email && password) {
        const response = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document,location.replace('/yourpage/');
        } else {
            alert(response.statusText);
        }
    }
}

async function signupFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector('#username-signup').value.trim();
    const address = document.querySelector('#street-address').value.trim();
    const city = document.querySelector('#city').value.trim();
    const zipcode = document.querySelector('#zipcode').value.trim();
    const residence = document.querySelector('#years-at-residence').value.trim();
    const famSize = document.querySelector('#family-size').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    
    if (username && address && city && zipcode && residence && famSize && email && password) {
        const response = await fetch ('/api/member-routes.js', {
            method: 'post',
            body: JSON.stringify({
                username,
                address,
                city,
                zipcode,
                residence,
                famSize,
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace('/views/yourpage/');
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);