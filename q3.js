const botaoCalculaQ3 = document.createElement("button");
botaoCalculaQ3.innerHTML = "Criar relatorio";
botaoCalculaQ3.setAttribute("onclick", "btnClickQ3()");

function btnClickQ3() {
  return criarTabela();
}

function criarTabela() {
  // create elements <table> and a <tbody>
  let tbl = document.createElement("table");
  let tblHead = document.createElement("thead");
  let tblHeadRow = document.createElement("tr");

  let tblTh = document.createElement("th");
  let tblBody = document.createElement("tbody");
  let titulo = document.createTextNode("Relatorio de alunos");
  const listaAlunos = criarAluno();
  let reprovados = 0;
  let situacao = "";

  for (let j = 0; j <= listaAlunos.length - 1; j++) {
    let aluno = listaAlunos[j];
    let row = document.createElement("tr");
    let cellNr = document.createElement("td");
    if (aluno?.getNota < 50) {
      situacao = "REPROVADO";
      reprovados++;
    } else {
      situacao = "APROVADO";
    }
    let cellTextNr = document.createTextNode(
      `Aluno nr ${aluno?.getNr} - Nota ${aluno?.getNota} [${situacao}]`
    );
    cellNr.appendChild(cellTextNr);
    row.appendChild(cellNr);
    tblBody.appendChild(row);
  }
  let cellTextResult = document.createTextNode(
    `APROVADOS: ${20 - reprovados}(${
      ((20 - reprovados) / 20) * 100
    }%) | REPROVADOS: ${reprovados}(${(reprovados / 20) * 100}%) `
  );
  let rowResult = document.createElement("tr");
  let cellResult = document.createElement("td");
  cellResult.appendChild(cellTextResult);
  rowResult.appendChild(cellResult);
  tblBody.appendChild(rowResult);

  tbl.appendChild(tblHead);
  tblHead.appendChild(tblHeadRow);
  tblHeadRow.appendChild(tblTh);
  tblTh.appendChild(titulo);
  tbl.appendChild(tblBody);
  document.getElementById("q3").appendChild(tbl);
  tbl.setAttribute("border", "2");
}
class Aluno {
  constructor(nr, nota) {
    this._nr = nr;
    this._nota = nota;
  }
  set setNr(nr) {
    this._nr = nr;
  }
  set setNota(nota) {
    this._nota = nota;
  }
  get getNota() {
    return this._nota;
  }
  get getNr() {
    return this._nr;
  }
}
function criarAluno() {
  let alunos = [];

  for (let i = 1; i < 21; i++) {
    let aluno = new Aluno(i, Math.floor(Math.random() * 101));
    alunos.push(aluno);
  }
  return alunos;
}
document.getElementById("q3").appendChild(botaoCalculaQ3);
