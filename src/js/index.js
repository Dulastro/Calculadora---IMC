let inputs = document.querySelectorAll("input");
let btn = document.querySelector("button");

bntDarnkMode.addEventListener("click", () => {
  let form = document.querySelector("form")
  form.classList.toggle("dark-mode");
});

btn.addEventListener("click", (ev) => {
  ev.preventDefault();
  let inputValues = getValueInput();
  let imc = calculeteImc(inputValues[0], inputValues[1]);
  showImc(imc);
  removeBwColor(imc);
});

function getValueInput() {
  let inputValues = [];
  inputs.forEach((input) => {
    inputValues.push(parseFloat(input.value));
    input.value = "";
  });
  return inputValues;
}

function calculeteImc(peso, altura) {
  let imc = peso / (altura * altura);
  return imc;
}

function showImc(imc) {
  let form = document.querySelector("form");

  let span = document.createElement("span");
  span.className = "span-imc";
  let p = document.createElement("p");
  p.className = "imcshow";
  p.innerHTML = "Resultado: " + imc.toFixed(2);

  form.appendChild(span);
  span.appendChild(p);
}

function removeBwColor(imc) {
  let img = document.querySelectorAll("img");

  if (imc >= 0 && imc < 18.5) {
    // Abaixo do peso
    img[0].classList.add("bw-color");
  } else if (imc >= 18.5 && imc < 25) {
    // Peso normal
    img[1].classList.add("bw-color");
  } else if (imc >= 25 && imc < 30) {
    // Sobrepeso
    img[2].classList.add("bw-color");
  } else if (imc >= 30 && imc < 40) {
    // Obesidade
    img[3].classList.add("bw-color");
  } else if (imc >= 40) {
    // Obesidade mórbida
    img[4].classList.add("bw-color");
  }
}
