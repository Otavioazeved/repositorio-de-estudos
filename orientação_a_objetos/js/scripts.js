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



// function criarCachorro(nome, raca) {
//     const cachorro = Object.create({})
//     cachorro.nome = nome
//     cachorro.raca = raca
//      return cachorro 
//      }

// console.log(criarCachorro)


//  const bob = criarCachorro("bob", "vira lata");

//  console.log(bob);

//  const jack = criarCachorro("jack", "pitbull");

//  console.log(jack);


// //  funções construtoras usando new 
// // palavra chave new usado para instaciar um novo objeto 
// // objeto sendo criado por meio de uma função, ja entrega o objeto pronto

// function Cachorro (nome, raca) {
//     this.nome = nome
//     this.raca = raca

// }


// const husky = new Cachorro("ozzy", "husky")


// console.log(husky)

// // instanciar é basicamente criar um objeto a base de uma função especifica...



// function Escola(nome, alunos, professores) {
//     this.nome = nome;
//     this.alunos = alunos;
//     this.professores = professores;

// }


// const saida = new Escola("Escola nova vida", "204 alunos", "35 professores");

// console.log(saida);


// classes de funções com metódos
// para adicionar métodos, antes da criação do obejto podemos acessar o prototype e coloca-los la...

// métodos na função construtora..







//  function Carro(nome, modelo, kilometragem, cor, combustivel ) {
//      this.nome = nome;
//      this.modelo = modelo;
//      this.kilometragem = kilometragem;
//      this.cor = cor;
//     this.combustivel = combustivel;
// }
// const meuCarro = new Carro("corsa", "chevrolet", "160milkm", "preto", "gnv")
// console.log(meuCarro)



// function Facul(nome, ano, alunos, cursos) {

//     this.nome = nome;
//     this.ano = ano ;
//     this.alunos = alunos;
//     this.cursos = cursos;
// }


// const faculdade = new Facul("rural", 1942, "240 alunos", "24 cursos de graduação")

//  console.log(faculdade)

// classes ES6....
//  versões mais novas do javascript, abandonamos as funtios e usamos classes
// ha recursos comuns como constructor alem da insatncia new...



class cachorroClasse {
    constructor(nome, raca)
    this,raca 
}














