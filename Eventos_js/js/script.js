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

mouseEvents.addEventListener("mousedown",() =>{
    console.log("pressionou o botão")
} )


const Mouseupp = document.querySelector("#mouse")

Mouseupp.addEventListener("mouseup", () =>{
    console.log("soltou o botão")
})


mouseEvents.addEventListener("dblclick", () =>{
    console.log("duplo click")
})


// mousemove
/*
usado para ativar um evento a partir da movimentação do mouse,
consigo saber onde o usário estar,
ele não tem elemento
*/

// document.addEventListener("mousemove", (e) => {
//     console.log(`no eixo x: ${e.x}`)
//     console.log(`no eixo x: ${e.x}`)
// })

// movimentos por scroll

// posso colocar ele em qualquer lugar p  mim verificar fazer aquela rolagem lateral,
// rolando o documento pra qualquer lado.
// é adicionado ao window pq ela é a janela e não no document 

window.addEventListener("scroll", (e) => {
        if(window.pageYOffset > 200) {
            console.log("passamos de 200")
        }
})

// eventos por foco

/*
focus é disparado quando focamos em um elemento,
já o blur quando perde o foco do elemento,
estes são comuns no input, p válidar, colocar borda mais clara... 
ao contrário dele tem o blur
*/


const input = document.querySelector("#my-input")

input.addEventListener("focus", (e) =>{
    console.log("entrou no input")

})

const blur = document.querySelector("#my-input")

input.addEventListener("blur", (e) =>{
    console.log("saiu no blur")

})


// quando aperto aparece lá, por exemplo ele fica mais inchadinho, quando eu saio ele desincha, é basicamente pra deixar mais bonito pro usuário ficar vendo e achar legal, dar mais interatividade com o usuário entendeu, otávio de daqui um tempo....