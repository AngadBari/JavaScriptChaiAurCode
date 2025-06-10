//Genrate Random Color
const randomColor = () => {
  const hexValue = "0123456789ABCDF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += hexValue[Math.floor(Math.random() * 16)];
  }
  return color;
};

let Itervalid;
const startchangecolor = () => {
  if (!Itervalid) {
    Itervalid = setInterval(changebgColor, 1000);
  }

  function changebgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};
const stopchangecolor = () => {
  clearInterval(Itervalid);
  Itervalid = null;
};

document.querySelector("#start").addEventListener("click", startchangecolor);

document.querySelector("#stop").addEventListener("click", stopchangecolor);
