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
dados sobre o evento que esta sendo disparado
*/


 const OurTitle = document.querySelector("#my-title")

OurTitle.addEventListener("click", (event) => {
    console.log(event)
})



