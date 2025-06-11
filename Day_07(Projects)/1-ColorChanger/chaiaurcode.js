const Buttons = document.querySelectorAll(".button");
const Body = document.querySelector("body");

Buttons.forEach((button) => {
  // console.log(button);
  button.addEventListener("click", (e) => {
    console.log(e);
    console.log(e.target);
    if (e.target.id === "grey") {
      Body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "white") {
      Body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "blue") {
      Body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "yellow") {
      Body.style.backgroundColor = e.target.id;
    }
  });
});
