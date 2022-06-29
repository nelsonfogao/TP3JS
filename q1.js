const minimoLabel = document.createElement("Label");
minimoLabel.setAttribute("for", "text");
minimoLabel.innerHTML = "valor minimo: ";

const minimoInput = document.createElement("INPUT");
minimoInput.id = "textMinimo";
minimoInput.type = "number";
minimoInput.attributes.required = "required";

const maximoLabel = document.createElement("Label");
maximoLabel.setAttribute("for", "text");
maximoLabel.innerHTML = "valor maximo: ";

const maximoInput = document.createElement("INPUT");
maximoInput.id = "textMaximo";
maximoInput.type = "number";
maximoInput.attributes.required = "required";

const botaoCalcula = document.createElement("button");
botaoCalcula.innerHTML = "Calcula";
botaoCalcula.setAttribute("onclick", "calcular()");

const resultado = document.createElement("p");

function calcular() {
  let min = parseInt(document.getElementById("textMinimo").value);
  let max = parseInt(document.getElementById("textMaximo").value);
  if (isNaN(min)) {
    return alert("minimo nao pode ser nulo");
  } else if (isNaN(max)) {
    return alert("maximo nao pode ser nulo");
  } else if (max <= min) {
    return alert("minimo nao pode ser maior ou igual que maximo");
  } else {
    let numero = calcularMultiplo(min, max);
    return (resultado.innerHTML = numero);
  }
}

function calcularMultiplo(min, max) {
  let contador = 0;
  for (let i = min + 1; i < max; i++) {
    if (i % 2 == 0 && i % 3 == 0) {
      contador++;
    }
  }
  return contador;
}

document.getElementById("q1").appendChild(minimoLabel);
document.getElementById("q1").appendChild(minimoInput);
document.getElementById("q1").appendChild(maximoLabel);
document.getElementById("q1").appendChild(maximoInput);
document.getElementById("q1").appendChild(botaoCalcula);
document.getElementById("q1").appendChild(resultado);
