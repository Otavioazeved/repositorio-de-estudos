// // // Revisão de js moderno ES6+

// // //  let e const são novas formas de declarar variaveis

// // // let atribui valor e pode modificar depois

// // // const declara uma constante mas nao podemos alterar

// // // o grande diferencial é o escopo em bloco

// // // so um adendo control + z volta o codigo caso eu tenha apagado sem querer.]

// // // var, let e const


// // var x = 10 
// // var y = 15

// // if (y > 10 ){

// //     var x = 5
// //     console.log(x)

// // }

// // console.log(x)


// // let a = 10
// // let b = 15

// // if(b > 10){
// //     let a = 5
// //     console.log(a)
// // }

// // console.log(a)

// // // nesse caso aqui ele não altera o que está no escopo global


// // function logNome(){
// //     const name = "pedro"
// //     console.log(name)
// // }

// // const name = "matheus"

// // logNome()
// // console.log(name)

// // // tudo que tem chaves cria escopo de bloco fora das chaves é escopo global
// // // permite ainda criar variaveis com o mesmo nome sem afetar o de outros locais.

// // // arrow function 

// // // const soma = function(a, b){
// // //     return a + b
// // // }
// // //  soma = (a, b) => a + b ;

    
// // // console.log(soma(10, 4));

// // // const greeting = (name) => {
// // //     if(name){
// // //         return `hello ${name}`
// // //     }else {
// // //         return "hello"
// // //     }
// // // }

// // // console.log(greeting("otavio"))

// // // filter
// // // metodo de array para filtrar dados, resultado em um array com apenas os elementos que precisamos 

// // const arr = [1, 2, 3, 4, 5, 6]

// // // quero filtrar pelos numeros mais altos

// // const highNumbers = arr.filter((n) =>{
// //     if ( n >= 3){
// //         return n
// //     }
// // })

// // console.log(highNumbers);

// // const users = [
// //     {name: "otavio", available: true},
// //     {name: "jorge", available: false},
// //     {name: "maria", available: true},
// //     {name: "sandra", available: false},
// // ]

// // const availableUsers = users.filter((users) => users.available)

// // console.log(availableUsers)

// // // filter é isso escolho alguns dados em relação a outros, basicamente é isso. 


// // // map,
// // // metodo de array que percorre todo os elementos do mesmo, modificar o array de origem

// // // filter remover elementos desnecessarios, map altera os que precisamos.


// // // const products = [
// // //     {name: "camisa", price: 10.99, category: "roupas"},
// // //     {name: "chaleira eletrica", price: 150, category: "eletro"},
// // //     {name: "fogão", rice: 499, category: "eletro"},
// // //     {name: "calça jeans", price: 87.99, category: "roupas"},
// // // ]


// // // products.map((products) =>{
// // //     if(products.category === "roupas"){
// // // products.onSale = true
// // //     }
// // // })


// // // console.log(products)


// // // map(percorre a coleção e a gente gera valores alterados em cima da coleção dela  ) e reduce (percorrer a coleção e gerar alguma informação exemplo de somar tudo. )

// // // exmeplo de map é eu tenhouma lista com dolar e quero trazer p real, map retorna uma nova lista 


// // // const products = [
// // //     {
// // //         nome: "notebook", 
// // //         preco: 2100

// // //     },

// //     // esta tudo em dolar e vou fazer com q a função map me retorne tudo em real
// // //     {
// // //         nome: "smatphone",
// // //         preco: 400
// // //     },
// // //     {
// // //         name: "chuteira",
// // //         preco: 350
// // //     }
// // // ]

// // // const precosReais = products.map(p => p.preco * 5.43 )


// // // console.log(precosReais)

// // // console.log(products)

// // // map não modifica a coleção anterior ela gera uma nova coleção a partir dela
// // // então quando vejo um map eu ja sei que esse codigo map esta fazendo a conversão de alguns valore 


// // // reduce

// // // const total = products.reduce((a, b) => a + b.preco, 0)

// // // console.log(total)

// // // no callback eu que escolhe o nome


// // const produtos = [
// //     {id: 1, nome: "detergente", valor: 2.20, categoria: "limpeza",available: true },
// //     {id: 2, nome: "amaciante", valor: 4, categoria: "limpeza",available: false},
// //     {id: 3, nome: "pão", valor: 2, categoria: "alimento",available: true},
// //     {id: 4, nome: "queijo", valor: 20, categoria: "alimento",available: false},
// //     {id: 5, nome: "leite", valor: 22, categoria: "alimento",available: true},
// // ];  

// // // tem que retornar algo que seja um boleano true or false

// // const alimentos = produtos.filter(p => p.available) 

// // console.log(alimentos) 

// // // // template literals

// // // // escreve o texto entre crases`assim`
// // // // variaveis assim ${variavel}


// // const UserName = "otavio"

// // const age = "22"

// // console.log(`o nome do usuário é ${UserName} e ele tem ${age} anos`);


// // // destructuring
// // /*
// // desestrutura dados complexos em várias variaveis,
// // arrays podem ser usados,
// // muitas variveis podem ser criadas em uma única linha
// // */

// // const fruits = ["maça", "banana", "uva"]

// // const [f1, f2, f3] = fruits


// // console.log(f1, f2)

// // const productDetails = {
// //     name:"mouse",
// //     price: "39,99",
// //     color: "blue"
// // }

// // const {name: productName, price, color} =  productDetails;

// // console.log(`o nome do produto é ${productName}, ele custa ${price}, e é da cor ${color}`)
 

// const pessoa = {
//     name:"otavio",
//     age:22,
//     Profissão: "programador"
// }

// const pessoaComTelefone = {...pessoa, telefone: 21976185795}

// const  nome  = pessoa.name

// console.log(nome)

// console.log(pessoa, pessoaComTelefone)


// // destructuring é mais para poder extrair apenas o que a gente quer sem precisar criar elas em varias linhas.


// const fruits = ["maça", "mamão", "limão"]

// const [f1, f2, f3] = fruits 

// console.log(f1)
// console.log(f2)
// console.log(f3)


// const productDetails = {
//     name: "otavio",
//     price: 39.99,
//     category: "periferico",
//     color: "azul"
// };

// // desestruturar deixa as operações mais simples

// const {name, price, category, color} = productDetails;

// console.log(`eu tenho um produto com ${name}, ele custa${price}, e é da cor${color}`)

// spread operator

// pode ser usado em arrays e objetos, usado para inserir novos valores em um array ou objet
// é um recurso que pode unir dois arrays

const a1 = [1,2,3]
const a2 = [4,5,6]

const a3 = [...a1,...a2]

console.log(a3)




const a4 = [...a1,...a2, 7, 8, 9, 10]

console.log(a4)





// serve muito para unir-los arrays e objetos

const jogos = {partidas: "brasileirão"}
const devs = {devis: "otavio"}
const slrio = {sal: 1600}

const jds = {...jogos,...devs,...slrio}

console.log(jds)





