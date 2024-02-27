function fetchData() {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      let info = document.getElementById("info");
      json.forEach((item) => {
       let div= document.createElement('div')
       div.textContent=item.title
       info.appendChild(div)
      });
    });
}
fetchData();
