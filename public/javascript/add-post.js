async function newFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="post-title"]').value;
    const post_message = document.querySelector('input[name="post-text"]').value;

    const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({
            title,
            post_message

        }),
        headers: { 'Content-Type' : 'application/json' }
    });
    console.log(response);

    if (response.ok) {
        document.location.replace('/yourpage');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);