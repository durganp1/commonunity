async function editFormHandler(event) {
    event.preventDefault();
    await fetch(`/api/posts/${post.id}`, {
        method: 'PUT',
        body: JSON.stringify({
          title,
          post_message
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
  }
  
  document.querySelector('edit-post-form').addEventListener('submit', editFormHandler);