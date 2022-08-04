fetch('https://api.quotable.io/random')
  .then(response => response.json())
  .then(data => {
    console.log(`${data.content} -${data.author}`)
    document.getElementById("Element");
    Element.innerHTML = data;
  })