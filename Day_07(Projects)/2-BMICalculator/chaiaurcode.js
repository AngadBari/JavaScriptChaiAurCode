const from = document.querySelector("form");
const Height = document.querySelector("#height");
const Weight = document.querySelector("#weight");
const Results = document.querySelector("#results");

from.addEventListener("submit", (e) => {
  e.preventDefault();

  const height = parseInt(Height.value);
  const weight = parseInt(Weight.value);

  if (height === "" || height < 0 || isNaN(height)) {
    Results.innerHTML = `Please Give a Valid Height  ${height} `;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    Results.innerHTML = `Please Give a Valid Weight  ${weight} `;
  } else {
    const BMI = (weight / ((height * height) / 10000)).toFixed(2);

    if (BMI < 18.6) {
      Results.innerHTML = ` Your BMI is ${BMI} <br> UnderWeight `;
    }
    if (BMI >= 18.6 && BMI <= 24.9) {
      Results.innerHTML = ` Your BMI is ${BMI} <br> Normal Range `;
    }
    if (BMI > 30) {
      Results.innerHTML = ` Your BMI is ${BMI}  <br> Overweight`;
    }

    // Results.innerHTML = ` Your BMI is ${BMI} `;
  }
});
