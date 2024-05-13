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


// selecionando por classes getElementsByclassName

// selecionamos um conjunto de elementos por classe comum 


const products = document.getElementsByClassName("product")

console.log(products)


// método de seleção mais utilizado hoje em dia
// querySelector

/* com metodo querySelectorAll
seleciona um conjunto de elementos por meio de um seletor de css, 
e com querySelector apenas um elemento, com base também um seletor de css
*/

// querySelectorAll


const productquery = document.querySelectorAll(".product")

console.log(productquery)


const maincontainer = document.querySelector("#main-container")

console.log(maincontainer)





