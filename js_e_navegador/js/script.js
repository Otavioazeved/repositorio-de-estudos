// 1 -movendo-se pelo DOM 

console.log(document.body)
console.log(document.body.childNodes[2])


// 2 - Selecionando os elementos

//  getElementsByTagName

//  seleciona por uma tag comum, o argumento é uma string que leva a tag   a ser selecionada 

const listItens = document.getElementsByName("li")

console.log(listItens)

// problema dele que não tão especifico, e por isso não tão utilizado exem se eu tivesse outro li ele ia pegar ele tbm.



// elementById

// id é único na página

const tittle = document.getElementById("tittle")

console.log(tittle)

const container = document.getElementById("main-container")

console.log(container)