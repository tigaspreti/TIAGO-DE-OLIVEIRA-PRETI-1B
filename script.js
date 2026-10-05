const botoes = document.querySelectorAll(button);

botoes.forEach(function (botao) {
  let curtiu = false;
  botao.addEventListener("click", botaoClicado);
  function botaoClicado() {
    console.log("fui clicado");
    let txto = botao.querySelector("span");
    if (curtiu == false) {
      texto.textContent++;
      curtiu = true;
    } else{
      text.textContent --;
      curtiu = false;
    }vou
  }
}

               const btnTemaEscuro = document.querySelector(".btn-tema-escuro");
btnTemaEscuro.addEventListener("click", mudaTema);
function mudaTema(){
  const corpoPagina = document.body;
  if (corpoPagina.classList.contains("tema-escuro")) {
    corpoPagina.classList.remove("tema-escuro");
  } else {
    corpoPagina.classList.add("tema-escuro");
