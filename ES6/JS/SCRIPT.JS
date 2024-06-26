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


// const products = [
//     {name: "camisa", price: 10.99, category: "roupas"},
//     {name: "chaleira eletrica", price: 150, category: "eletro"},
//     {name: "fogão", rice: 499, category: "eletro"},
//     {name: "calça jeans", price: 87.99, category: "roupas"},
// ]


// products.map((products) =>{
//     if(products.category === "roupas"){
// products.onSale = true
//     }
// })


// console.log(products)


// map(percorre a coleção e a gente gera valores alterados em cima da coleção dela  ) e reduce (percorrer a coleção e gerar alguma informação exemplo de somar tudo. )

// exmeplo de map é eu tenhouma lista com dolar e quero trazer p real, map retorna uma nova lista 


// const products = [
//     {
//         nome: "notebook", 
//         preco: 2100

//     },

    // esta tudo em dolar e vou fazer com q a função map me retorne tudo em real
//     {
//         nome: "smatphone",
//         preco: 400
//     },
//     {
//         name: "chuteira",
//         preco: 350
//     }
// ]

// const precosReais = products.map(p => p.preco * 5.43 )


// console.log(precosReais)

// console.log(products)

// map não modifica a coleção anterior ela gera uma nova coleção a partir dela
// então quando vejo um map eu ja sei que esse codigo map esta fazendo a conversão de alguns valore 


// reduce

// const total = products.reduce((a, b) => a + b.preco, 0)

// console.log(total)

// no callback eu que escolhe o nome


const produtos = [
    {id: 1, nome: "detergente", valor: 2.20, categoria: "limpeza",available: true },
    {id: 2, nome: "amaciante", valor: 4, categoria: "limpeza",available: false},
    {id: 3, nome: "pão", valor: 2, categoria: "alimento",available: true},
    {id: 4, nome: "queijo", valor: 20, categoria: "alimento",available: false},
    {id: 5, nome: "leite", valor: 22, categoria: "alimento",available: true},
];  

// tem que retornar algo que seja um boleano true or false

const alimentos = produtos.filter(p => p.available) 

console.log(alimentos)

