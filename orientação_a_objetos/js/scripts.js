//  1 métodos...

const animal = {
    nome: "bob",
    latir: function () {
        console.log("au au")
    }
}

console.log(animal.nome);

animal.latir()


const pessoa = {
    nome: "otavio", 
    getNome: function () {
        return this.nome
    }
   
    }
    
console.log(pessoa.nome);

