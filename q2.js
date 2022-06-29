const fatorialLabel = document.createElement("Label");
fatorialLabel.setAttribute("for", "text");
fatorialLabel.innerHTML = "Calcular o fatorial de : ";

const fatorialInput = document.createElement("INPUT");
fatorialInput.id = "textFatorial";
fatorialInput.type = "number";
fatorialInput.attributes.required = "required";

const botaoCalculaFatorial = document.createElement("button");
botaoCalculaFatorial.innerHTML = "Calcula";
botaoCalculaFatorial.setAttribute("onclick", "calcularFatorial()");

const resultadoFatorial = document.createElement("p");

function calcularFatorial() {
  let fat = parseInt(document.getElementById("textFatorial").value);
  if (isNaN(fat)) {
    return alert("fatorial nao pode ser nulo");
  } else {
    let inicio = new Date().getMilliseconds();
    let numero = calcularFatorialDe(fat);
    let final = new Date().getMilliseconds();
    let tempo = final - inicio;
    return (resultadoFatorial.innerHTML = `${fat}!= ${numero} (${tempo} milisegundos)`);
  }
}

function calcularFatorialDe(fat) {
  if (fat == 0) {
    return 1;
  }
  let total = fat;
  for (let j = fat; j > 1; j--) {
    total = total * (fat - 1);
    fat = fat - 1;
  }

  return total;
}

document.getElementById("q2").appendChild(fatorialLabel);
document.getElementById("q2").appendChild(fatorialInput);
document.getElementById("q2").appendChild(botaoCalculaFatorial);
document.getElementById("q2").appendChild(resultadoFatorial);
