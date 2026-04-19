const input = document.getElementById("input");
const convertBtn = document.getElementById("convert-btn");
let lengthPar = document.getElementById("length");
let volumePar = document.getElementById("volume");
let massPar = document.getElementById("mass");
let toggle = document.getElementById("toggle");
const main = document.querySelector("main");

convertLength(0);
convertVolume(0);
convertMass(0);
input.addEventListener("input", () => {
  // Make input window wider
  input.style.width = input.value.length + 1 + "ch";
  // Only 12 characters allowed
  if (input.value.length > 12) {
    input.value = input.value.slice(0, 12);
  }
});
toggle.addEventListener("change", function () {
  if (toggle.checked) {
    main.classList.add("light-theme");
    localStorage.setItem("theme", "light");
  } else {
    main.classList.remove("light-theme");
    localStorage.setItem("theme", "dark");
  }
});
function convert() {
  let value;
  if (!input.value) {
    value = 0;
  } else if (input.value < 0) {
    return null;
  } else {
    value = Number(input.value);
  }
  return value;
}

function convertLength(value) {
  let calcMeter = (value / 3.281).toFixed(3);
  let calcFeet = (value * 3.28084).toFixed(3);
  lengthPar.textContent = `${value} meters = ${calcFeet} feet | ${value} feet = ${calcMeter} meters`;
}
function convertVolume(value) {
  let calcGallons = (value / 3.78541).toFixed(3);
  let calcLiters = (value * 3.78541).toFixed(3);
  volumePar.textContent = `${value} liters = ${calcGallons} gallons | ${value} gallons = ${calcLiters} liters`;
}
function convertMass(value) {
  let calcPounds = (value * 2.20462).toFixed(3);
  let calcKilos = (value / 2.20462).toFixed(3);
  massPar.textContent = `${value} kilos = ${calcPounds} pounds | ${value} pounds = ${calcKilos} kilos`;
}
convertBtn.addEventListener("click", function () {
  const value = convert();
  if (value === null) {
    alert("Please type positive number");
    return;
  }
  convertLength(value);
  convertVolume(value);
  convertMass(value);
});
//  Enter key press
input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    convertBtn.click();
  }
});
// Prevent scroll when input is focused
input.addEventListener("wheel", (e) => {
  if (document.activeElement === input) {
    e.preventDefault();
  }
});

// Check for saved theme in localStorage

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
  main.classList.add("light-theme");
  toggle.checked = true;
} else {
  main.classList.remove("light-theme");
  toggle.checked = false;
}
