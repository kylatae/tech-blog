const postFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#post-title').value;
  const user_body = document.querySelector('#post-message').value;
  console.log(title)
  if (title && user_body) {
    const response = await fetch('/api/blog', {
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