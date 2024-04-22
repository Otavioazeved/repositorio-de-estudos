// debug e tratamento de erros forma d eidentificar como o codigo esta progredindo
// o que é bug e debug?
// debug método de encontrar e resolver o bug tem estrategias pra resolver isso
// validação.... pode ter p quem desenvolvendo o software ou p quem está utilizando o software vulgo o cliente
// strict mode modo que deixa o js mais rigoroso na hora de programar, declarado no topo de arquivo de funções, os strict n limita os recursos js 


// strict.....
// strict é um conserta programador, fica me mostrando td que to errando

// "use strict";

// utilizando o debbug... instrução q nos permite o debug no console do navegador 


// let c = 1 
// let d = 2

// if(c == 1 ) {
//     c = d + 2
//     console.log(c)
// }

// debugger;

// for(let i = 0; i < d; i++) {
//     c = c + 2
// }

// console.log("executou o codigo")

// debugger;

// if(c > 5){
//     c = 25;
// }


// ASSERTIONS são quando os tratamentos de valores paasados pelo usuariO geram um erro, é algo para os devs e não para os usuários...
// ajuda os devs no desenvolvimento do programa, assertion nos ajudam a varificar se o programa está saindo como o planejado.



// function checkArray (arr) {
//     if(arr.length === 0){
//         throw new Error ("o array precisa tere elementos")
//     } else{
//         console.log(`o array trm ${arr.length} elementos`)
//     }
//     }
// checkArray([])

function olhaMeuarray (err) {
    if(err.length >= 0) {
        throw new Error("o array precisa ter elementos ")
    } else{
        console.log(`o array tem ${err.length} elementos`)
    }

}

olhaMeuarray([5, 2])





