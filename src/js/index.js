let inputs = document.querySelectorAll("input");
let btn = document.querySelector("button");

btn.addEventListener("click", (ev) => {
  ev.preventDefault();
  let inputValues = getValueInput(); // Obtenha os valores dos inputs
  let imc = calculeteImc(inputValues[0], inputValues[1]); // Calcule o IMC
  showImc(imc); // Mostre o IMC
});

function getValueInput() {
  let inputValues = []; // Crie um novo array para armazenar os valores
  inputs.forEach((input) => {
    inputValues.push(parseFloat(input.value)); // Converta para número (float)
    input.value = ""; // Limpe os valores dos inputs
  });
  return inputValues; // Retorne os valores dos inputs
}

function calculeteImc(peso, altura) {
  let imc = peso / (altura * altura); // Fórmula correta para calcular IMC
  return imc; // Retorne o valor do IMC
}

function showImc(imc) {
  let form = document.querySelector("form");

  let span = document.createElement("span");
  span.className = "span-imc";
  let p = document.createElement("p");
  p.className = "imcshow";
  p.innerHTML = "Resultado: " + imc.toFixed(2); // Arredonde o IMC para 2 casas decimais

  form.appendChild(span);
  span.appendChild(p);
}
