const quantidadeLabelQ4 = document.createElement("Label");
quantidadeLabelQ4.setAttribute("for", "text");
quantidadeLabelQ4.innerHTML = "Quantidade de numeros: ";

const quantidadeInputQ4 = document.createElement("INPUT");
quantidadeInputQ4.id = "quantidadeQ4";
quantidadeInputQ4.type = "number";
quantidadeInputQ4.attributes.required = "required";

const minimoLabelQ4 = document.createElement("Label");
minimoLabelQ4.setAttribute("for", "text");
minimoLabelQ4.innerHTML = "valor minimo: ";

const minimoInputQ4 = document.createElement("INPUT");
minimoInputQ4.id = "minimoQ4";
minimoInputQ4.type = "number";
minimoInputQ4.attributes.required = "required";

const maximoLabelQ4 = document.createElement("Label");
maximoLabelQ4.setAttribute("for", "text");
maximoLabelQ4.innerHTML = "valor maximo: ";

const maximoInputQ4 = document.createElement("INPUT");
maximoInputQ4.id = "maximoQ4";
maximoInputQ4.type = "number";
maximoInputQ4.attributes.required = "required";

const botaoCalculaQ4 = document.createElement("button");
botaoCalculaQ4.innerHTML = "Calcula";
botaoCalculaQ4.setAttribute("onclick", "btnClickQ4()");

const resultadoQ4 = document.createElement("p");

function btnClickQ4() {
  let qtd = parseInt(document.getElementById("quantidadeQ4").value);
  let min = parseInt(document.getElementById("minimoQ4").value);
  let max = parseInt(document.getElementById("maximoQ4").value);
  if (isNaN(min)) {
    return alert("minimo nao pode ser nulo");
  } else if (isNaN(max)) {
    return alert("maximo nao pode ser nulo");
  } else if (isNaN(qtd)) {
    return alert("quantidade nao pode ser nulo");
  } else if (max <= min) {
    return alert("minimo nao pode ser maior ou igual que maximo");
  } else {
    let numero = calcularQuantidade(min, max, qtd);
    return (resultadoQ4.innerHTML = numero);
  }
}

function calcularQuantidade(min, max, qtd) {
  let numeros = [];
  for (let index = 0; index < qtd; index++) {
    numeros.push(Math.floor(Math.random() * (max - min) + 1) + min);
  }
  numeros.sort(function (a, b) {
    return a - b;
  });
  return numeros;
}

document.getElementById("q4").appendChild(quantidadeLabelQ4);
document.getElementById("q4").appendChild(quantidadeInputQ4);
document.getElementById("q4").appendChild(minimoLabelQ4);
document.getElementById("q4").appendChild(minimoInputQ4);
document.getElementById("q4").appendChild(maximoLabelQ4);
document.getElementById("q4").appendChild(maximoInputQ4);
document.getElementById("q4").appendChild(botaoCalculaQ4);
document.getElementById("q4").appendChild(resultadoQ4);
