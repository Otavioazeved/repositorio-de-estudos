const lista = document.getElementsByTagName("ul")[0]
const itens = lista.children

const novoItem = document.createElement("li")
novoItem.textContent = "suco de laranja"

lista.insertBefore(novoItem, itens[0])



console.log(itens)