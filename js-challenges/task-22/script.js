fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(data => {
    console.log('Fetched post:', data);
    document.getElementById('output').innerHTML = `<h2>${data.title}</h2><p>${data.body}</p>`;
  })
  .catch(error => console.error('Error fetching data:', error));

  