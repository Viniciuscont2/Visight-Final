// Adicionar classe hover ao item selecionado da lista
let lista = document.querySelectorAll(".navegacao li");

function linkAtivo() {
  lista.forEach((item) => {
    item.classList.remove("hovered");
  });
  this.classList.add("hovered");
}

lista.forEach((item) => item.addEventListener("mouseover", linkAtivo));

// Alternar Menu
let menuNav = document.querySelector(".conteudo__menuNav");
let navegacao = document.querySelector(".navegacao");
let conteudo = document.querySelector(".conteudo");

menuNav.onclick = function () {
  navegacao.classList.toggle("ativo");
  conteudo.classList.toggle("ativo");
};