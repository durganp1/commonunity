//const { homeRoutes, apiRoutes, yourpageRoutes } = require('./controllers/index')

async function loginFormHandler(event) {
    event.preventDefault();

    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (email && password) {
        const response = await fetch('/api/members/login', {
            method: 'post',
            body: JSON.stringify({
                email,
                password
            }),
            headers: { 'Content-Type' : 'application/json' }
        });
       
        if (response.ok) {
           
            document.location.replace('/yourpage');
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);

async function signupFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector('#username-signup').value.trim();
    const street_address = document.querySelector('#street-address').value.trim();
    const city = document.querySelector('#city').value.trim();
    const zipcode = document.querySelector('#zipcode').value.trim();
    const years_at_address = document.querySelector('#years-at-address').value.trim();
    const family_size = document.querySelector('#family-size').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    
    if (username && street_address && city && zipcode && years_at_address && family_size && email && password) {
        const response = await fetch('/api/members/', {
            method: 'post',
            body: JSON.stringify({
                username,
                street_address,
                city,
                zipcode,
                years_at_address,
                family_size,
                email,
                password
            }),
            headers: { 'Content-Type' : 'application/json' }
        });

        if (response.ok) {
            document.location.replace('/yourpage');
        } else {
            alert(response.statusText);
        }
    }
}


document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);