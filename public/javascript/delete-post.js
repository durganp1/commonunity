// async function deleteFormHandler(event) {
//     event.preventDefault();
//     await fetch(`/api/posts/${post.id}`, {
//         method: 'DELETE'
//       });
//   }
  
//   document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);

async function deleteFormHandler(event) {
    event.preventDefault();
<<<<<<< HEAD
    await fetch(`/api/posts/${id}`, {
        method: 'DELETE'
      });
=======
  
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    const response = await fetch(`/api/posts/${id}`, {
      method: 'DELETE'
    });

    // const response2 = await fetch(`/api/comments/`, {
    //     method: 'DELETE'
    // });
  
    if (response.ok) {
      document.location.replace('/yourpage/');
    } else {
      alert(response.statusText);
    }

    // if (response2.ok) {
    //     document.location.replace('/yourpage/');
    // } else {
    //     alert(response.statusText);
    // }
>>>>>>> develop
  }
  
  document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);
  
