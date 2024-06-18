// Revisão de js moderno ES6+

//  let e const são novas formas de declarar variaveis

// let atribui valor e pode modificar depois

// const declara uma constante mas nao podemos alterar

// o grande diferencial é o escopo em bloco

// so um adendo control + z volta o codigo caso eu tenha apagado sem querer.]

// var, let e const


var x = 10 
var y = 15

if (y > 10 ){

    var x = 5
    console.log(x)

}

console.log(x)


let a = 10
let b = 15

if(b > 10){
    let a = 5
    console.log(a)
}

console.log(a)

// nesse caso aqui ele não altera o que está no escopo global


function logNome(){
    const name = "pedro"
    console.log(name)
}

const name = "matheus"

logNome()
console.log(name)

// tudo que tem chaves cria escopo de bloco fora das chaves é escopo global
// permite ainda criar variaveis com o mesmo nome sem afetar o de outros locais.








