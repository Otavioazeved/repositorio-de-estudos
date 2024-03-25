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

const text = "asd"

console.log(Object.getPrototypeOf(text))


const bool = true;

console.log(Object.getPrototypeOf(bool));

// mais sobre prototype

const myObject = {
    a: "b"
}

console.log(Object.getPrototypeOf(myObject))
