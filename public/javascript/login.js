async function loginFormHandler(event) {
    event.preventDefault();

    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (email && password) {
        const response = await fetch('./home-routes', {
            method: 'post',
            body: JSON.stringify({
                email,
                password
            }),
            headers: { 'Content-Type' : 'application/json' }
        });
        
        if (response.ok) {
            document.location.replace('./yourpage-routes');
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
    const famSize = document.querySelector('#family-size').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    
    if (username && street_address && city && zipcode && years_at_address && famSize && email && password) {
        const response = await fetch ('/api/members', {
            method: 'post',
            body: JSON.stringify({
                username,
                street_address,
                city,
                zipcode,
                years_at_address,
                famSize,
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            console.log('success');
           // document.location.replace('/yourpage');
        } else {
            alert(response.statusText);
        }
    }
}


document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);