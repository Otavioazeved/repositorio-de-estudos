// //  1 métodos...

// const animal = {
//     nome: "bob",
//     latir: function () {
//         console.log("au au")
//     }
// }

// console.log(animal.nome);

// animal.latir()


// const pessoa = {
//     nome: "otavio", 
//     getNome: function () {
//         return this.nome
//     }
   
//     }
    
// console.log(pessoa.nome);

// prototypes 

// const text = "asd"

// console.log(Object.getPrototypeOf(text))


// const bool = true;

// console.log(Object.getPrototypeOf(bool));

// // mais sobre prototype

// const myObject = {
//     a: "b"
// }

// console.log(Object.getPrototypeOf(myObject))


// classes básicas  


// const cachorro = {
//     raca: null,
//     patas: 4
// };


//  const pastorAlemao = Object.create(cachorro)

//  pastorAlemao.raca = "pastor alemao";

//  console.log(pastorAlemao)
// console.log(pastorAlemao.patas)

// const pincher = Object.create(cachorro);

// pincher.raca = "pincher";
// console.log(pincher)





// classes baseadas em funções construtoras...
//  construtora tem objetivo instacnciar um objeto ou seja criar um novo objeto 


// função como classe - função construtora;;;



function criarCachorro(nome, raca) {
    const cachorro = Object.create({})
    cachorro.nome = nome
    cachorro.raca = raca
     return cachorro 
     }

console.log(criarCachorro)


 const bob = criarCachorro("bob", "vira lata");

 console.log(bob);

 const jack = criarCachorro("jack", "pitbull");

 console.log(jack);


//  funções construtoras usando new 
// palavra chave new 














