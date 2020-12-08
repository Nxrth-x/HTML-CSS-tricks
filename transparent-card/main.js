const div = document.getElementsByClassName("circle")[0];

console.log(div);

div.addEventListener("mouseover", (event) => {
  div.setAttribute(
    "class",
    div.getAttribute("class") === "circle" ? "circle alt" : "circle"
  );
});
