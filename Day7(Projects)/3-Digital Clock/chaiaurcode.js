const clock = document.getElementById("clock");

setInterval(() => {
  let date = new Date();
  // console.log(date.toLocaleTimeString())
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

//setInterval() - This method calls a function or evaluates an expression at specified intervals (in milliseconds).
