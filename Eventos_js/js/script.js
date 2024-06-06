// Eventos!!!! (até que enfim acabando essa parte teórica!)
/*
Eventos são comportamento dos usuários, como click, movimento da tela,
técnica conhecida como event handler (manipulação de eventos)
função anonima que vai dentro do evento e faz alguma coisa
*/

// addEventListener
 /*
Primeiro selecionar o elemento que vai disparar o evento, dps ativar um método chamado
addEventListener
nele a gente declara qual o tipo de evento e por meio de callback definimos o que acontece.
 */

const btn = document.querySelector("#my-button")

btn.addEventListener("click", function() {
    console.log("clicou aqui!")
} )


// remover eventos dos elementos com removeEventListener


const secondBtn = document.querySelector("#btn") 

function imprimirMenssagem() {
    console.log("teste")
}

secondBtn.addEventListener("click", imprimirMenssagem);


const thirdBtn = document.querySelector("#other-btn")

thirdBtn.addEventListener("click",() => {
    console.log("evento removid")
    secondBtn.removeEventListener("click", imprimirMenssagem)
} )


const c1 = document.querySelector("#c1")
// const msg = () => {
//     alert("clicou")
// }

c1.addEventListener("click",() => {
    alert("clicou")
})


// todo evento possui um ARGUMENTO ESPECIAL contendo infomações do mesmo, geralmente chamado de event ou e.


// argumento de evento  
/*
dados sobre o evento que esta sendo disparado.
usado mais quando a gente precisa extrair informações do evento.
*/


 const OurTitle = document.querySelector("#my-title")

OurTitle.addEventListener("click", (event) => {

    console.log(event);
    console.log(event.target)

})



// stopPropagation
/*
pode ocorrer de um outro elemento ativar um elemento e com isso usamos o método
coloca um e ou event ali faz assim, e,stopPropagation() e fé
stopPropagation.
*/

const containerBtn= document.querySelector("#btn-container")
const  btnInsideContainer = document.querySelector("#div-btn")

containerBtn.addEventListener("click", () => {
    console.log("evento 1")
})

btnInsideContainer.addEventListener("click", (event) => {
    event.stopPropagation()
    console.log("evento 2")
})


// ações default... ações padrão no html

// removendo evento padrão

// usando o preventDefault

// const a =document.querySelector("a")

// a.addEventListener("click", (e) => {
//     e.preventDefault()
//     console.log("não alterou o codigo")
    
// })
 const a = document.querySelector("a")

 a.addEventListener("click", (event) => {
event.preventDefault()
console.log("vou alterar nada, euem")
 })

// eventos de tecla
// mapeiam as ações no teclado, keyup e keydown
// keydown keyup quando pressiona a tecla e solta, keydown quando ela é solta

document.addEventListener("keyup", (e) =>{
    console.log(`${e.key}`)

})

document.addEventListener("keydown", (e) => {
    console.log(`${e.key}`)
})


// outros eventos do mouse...
/*
mousedown: pressiounou o botão do mouse
mouseup: soltou o botão do mouse
dblclick: clique duplo
*/

const mouseEvents = document.querySelector("#mouse")




