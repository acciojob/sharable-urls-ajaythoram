document.addEventListener('DOMContentLoaded', () => {
  const txt = document.getElementById("name");
  const num = document.getElementById("year");
  const btn = document.getElementById("button");
  const H = document.getElementById("url");

  btn.addEventListener("click", (event) => {
    event.preventDefault();
  let queryString = "";
  if (txt.value) {
    queryString += `name=${txt.value}`;
  }
  if (num.value) {
    queryString += `${queryString ? '&' : ''}year=${num.value}`;
  }
  H.innerText = `https://localhost:8080/?${queryString}`;
  });
});




