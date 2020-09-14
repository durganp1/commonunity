// async function editFormHandler(event) {

//     event.preventDefault();

//     const title = document.querySelector('input[name="post-title"]').value;
//     const post_message = document.querySelector('input[name="post-text"]').value;

//    const response = await fetch(`/api/posts/`, {
//         method: 'POST',
//         body: JSON.stringify({
//           title,
//           post_message
//         }),
//         headers: { 'Content-Type': 'application/json' }
//       });
//       console.log(response);

//       if (response.ok) {
//         document.location.reload();
//       } else {
//         alert(response.statusText);
//       }
//   }
  
//   document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);

async function editFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value.trim();
  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  const post_message = document.querySelector('input[name="post-message"]').value;
  const response = await fetch(`/api/posts/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      title,
      post_message
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/yourpage');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);
