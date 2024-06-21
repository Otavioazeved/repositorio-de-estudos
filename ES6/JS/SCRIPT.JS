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

// arrow function 

// const soma = function(a, b){
//     return a + b
// }
//  soma = (a, b) => a + b ;

    
// console.log(soma(10, 4));

// const greeting = (name) => {
//     if(name){
//         return `hello ${name}`
//     }else {
//         return "hello"
//     }
// }

// console.log(greeting("otavio"))

// filter
// metodo de array para filtrar dados, resultado em um array com apenas os elementos que precisamos 

const arr = [1, 2, 3, 4, 5, 6]

// quero filtrar pelos numeros mais altos

const highNumbers = arr.filter((n) =>{
    if ( n >= 3){
        return n
    }
})

console.log(highNumbers);

const users = [
    {name: "otavio", available: true},
    {name: "jorge", available: false},
    {name: "maria", available: true},
    {name: "sandra", available: false},
]

const availableUsers = users.filter((users) => users.available)

console.log(availableUsers)

// filter é isso escolho alguns dados em relação a outros, basicamente é isso. 


// map,
// metodo de array que percorre todo os elementos do mesmo, modificar o array de origem

// filter remover elementos desnecessarios, map altera os que precisamos.


const products = [
    {name: "camisa", price: 10.99, category: "roupas"},
    {name: "chaleira eletrica", price: 150, category: "eletro"},
    {name: "fogão", rice: 499, category: "eletro"},
    {name: "calça jeans", price: 87.99, category: "roupas"},
]


products.map((products) =>{
    if(products.category === "roupas"){
products.onSale = true
    }
})


console.log(products)


// map(percorre a coleção e a gente gera valores alterados em cima da cole dela  ) e redunce (percorrer a coleção e gerar alguma informação)

// exmeplo de map é eu tenhouma lista com dolar e quero trazer p real, map retorna uma nova lista 

