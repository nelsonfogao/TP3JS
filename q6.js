function criarCenario1() {
  const loginLabel = document.createElement("Label");
  loginLabel.setAttribute("for", "text");
  loginLabel.id = "loginLabel";
  loginLabel.innerHTML = "Username: ";

  const loginInput = document.createElement("INPUT");
  loginInput.id = "loginInput";
  loginInput.attributes.required = "required";
  loginInput.value = "";

  const botaoLoginQ6 = document.createElement("button");
  botaoLoginQ6.innerHTML = "Login";
  botaoLoginQ6.id = "btnLogin";
  botaoLoginQ6.setAttribute("onclick", "btnLoginClick()");

  const cadastroLabel = document.createElement("Label");
  cadastroLabel.setAttribute("for", "text");
  cadastroLabel.id = "cadastroLabel";
  cadastroLabel.innerHTML = "Cadastrar: ";

  const cadastroInput = document.createElement("INPUT");
  cadastroInput.id = "cadastroInput";
  cadastroInput.attributes.required = "required";
  cadastroInput.value = "";

  const botaoCadastroQ6 = document.createElement("button");
  botaoCadastroQ6.innerHTML = "Cadastrar";
  botaoCadastroQ6.id = "btnCadastrar";
  botaoCadastroQ6.setAttribute("onclick", "btnCadastroClick()");

  document.getElementById("q6").appendChild(loginLabel);
  document.getElementById("q6").appendChild(loginInput);
  document.getElementById("q6").appendChild(botaoLoginQ6);
  document.getElementById("q6").appendChild(cadastroLabel);
  document.getElementById("q6").appendChild(cadastroInput);
  document.getElementById("q6").appendChild(botaoCadastroQ6);
}
function btnCadastroClick() {
  let nome = document.getElementById("cadastroInput")?.value;
  if (nome?.length == 0) {
    return alert("Favor informar um username valido para cadastro");
  } else {
    localStorage.setItem(nome, nome);
    alert("Cadastrado com sucesso");
    cadastroInput.value = "";
  }
}

function btnLoginClick() {
  let nome = document.getElementById("loginInput")?.value;
  if (nome?.length == 0) {
    return alert("Favor informar um username valido para login");
  }
  let usuario = localStorage.getItem(nome);
  if (usuario == null) {
    loginInput.value = "";
    return alert("Usuario nao encontrado");
  }

  loginInput.value = "";
  apagarCenario1();
  criarCenario2(usuario);
}

function apagarCenario1() {
  const loginLabel2 = document.getElementById("loginLabel");
  const loginInput2 = document.getElementById("loginInput");
  const cadastroLabel2 = document.getElementById("cadastroLabel");
  const cadastroInput2 = document.getElementById("cadastroInput");
  const botaoLoginQ62 = document.getElementById("btnLogin");
  const botaoCadastroQ62 = document.getElementById("btnCadastrar");

  document.getElementById("q6").removeChild(loginLabel2);
  document.getElementById("q6").removeChild(loginInput2);
  document.getElementById("q6").removeChild(botaoLoginQ62);
  document.getElementById("q6").removeChild(cadastroLabel2);
  document.getElementById("q6").removeChild(cadastroInput2);
  document.getElementById("q6").removeChild(botaoCadastroQ62);
}

function criarCenario2(nome) {
  user = localStorage.getItem(nome);
  const logadoText = document.createElement("p");
  logadoText.id = "logadoP";
  logadoText.innerHTML = `Parabens ${user}! Voce foi logado com sucesso!`;

  const botaoDeslogarQ6 = document.createElement("button");
  botaoDeslogarQ6.innerHTML = "Deslogar";
  botaoDeslogarQ6.id = "btnDeslogar";
  botaoDeslogarQ6.setAttribute("onclick", "apagarCenario2()");

  document.getElementById("q6").appendChild(logadoText);
  document.getElementById("q6").appendChild(botaoDeslogarQ6);
}
function apagarCenario2() {
  const texto = document.getElementById("logadoP");
  const botaoDeslogar = document.getElementById("btnDeslogar");

  document.getElementById("q6").removeChild(texto);
  document.getElementById("q6").removeChild(botaoDeslogar);
  criarCenario1();
}

criarCenario1();
