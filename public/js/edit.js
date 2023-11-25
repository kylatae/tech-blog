const postFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#post-title').value;
  const user_body = document.querySelector('#post-message').value;
  const id = document.querySelector('.post-id').id
  console.log (id)

  if (title && user_body) {
    const response = await fetch(`/api/blog/edit/${id}`, {
      method: 'POST',
      body: JSON.stringify({ title, user_body, }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to post.');
    }
  }
};

document
  .querySelector('.post-form')
  .addEventListener('submit', postFormHandler);
