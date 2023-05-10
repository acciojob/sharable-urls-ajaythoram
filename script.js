document.addEventListener('DOMContentLoaded', () => {
  const txt = document.getElementById("name");
  const num = document.getElementById("year");
  const btn = document.getElementById("button");
  const H = document.getElementById("url");

  btn.addEventListener("click", (event) => {
    event.preventDefault();
    H.innerText = `https://localhost:8080/?name=${txt.value}&year=${num.value}`;
  });
});




