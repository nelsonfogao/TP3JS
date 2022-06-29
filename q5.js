const ladoALabel = document.createElement("Label");
ladoALabel.setAttribute("for", "text");
ladoALabel.innerHTML = "lado A: ";

const ladoAInput = document.createElement("INPUT");
ladoAInput.id = "ladoA";
ladoAInput.type = "number";
ladoAInput.attributes.required = "required";

const ladoBLabel = document.createElement("Label");
ladoBLabel.setAttribute("for", "text");
ladoBLabel.innerHTML = "lado B: ";

const ladoBInput = document.createElement("INPUT");
ladoBInput.id = "ladoB";
ladoBInput.type = "number";
ladoBInput.attributes.required = "required";

const ladoCLabel = document.createElement("Label");
ladoCLabel.setAttribute("for", "text");
ladoCLabel.innerHTML = "lado C: ";

const ladoCInput = document.createElement("INPUT");
ladoCInput.id = "ladoC";
ladoCInput.type = "number";
ladoCInput.attributes.required = "required";

const botaoCalculaQ5 = document.createElement("button");
botaoCalculaQ5.innerHTML = "Calcular";
botaoCalculaQ5.setAttribute("onclick", "btnClickQ5()");

const resultadoQ5 = document.createElement("p");

function btnClickQ5() {
  let ladoA = parseInt(document.getElementById("ladoA").value);
  let ladoB = parseInt(document.getElementById("ladoB").value);
  let ladoC = parseInt(document.getElementById("ladoC").value);

  if (isNaN(ladoA)) {
    return alert("lado A nao pode ser nulo");
  } else if (isNaN(ladoB)) {
    return alert("lado B nao pode ser nulo");
  } else if (isNaN(ladoC)) {
    return alert("lado C nao pode ser nulo");
  } else {
    let tipo = calcularTriangulo(ladoA, ladoB, ladoC);
    return (resultadoQ5.innerHTML = tipo);
  }
}

function calcularTriangulo(a, b, c) {
  if (a == b && b == c) {
    return "equilatero";
  } else if (a != b && b != c) {
    return "escaleno";
  } else {
    return "isosceles";
  }
}

document.getElementById("q5").appendChild(ladoALabel);
document.getElementById("q5").appendChild(ladoAInput);
document.getElementById("q5").appendChild(ladoBLabel);
document.getElementById("q5").appendChild(ladoBInput);
document.getElementById("q5").appendChild(ladoCLabel);
document.getElementById("q5").appendChild(ladoCInput);
document.getElementById("q5").appendChild(botaoCalculaQ5);
document.getElementById("q5").appendChild(resultadoQ5);
