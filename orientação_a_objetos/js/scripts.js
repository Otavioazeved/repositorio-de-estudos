// // // ES6 JS 

// // class CachorroClasse {
// //     constructor (nome, raca) {
// //         this.nome = nome
// //         this.raca = raca
    
// //     }
// // }

// // const jeff = new CachorroClasse("jeff", "puddle")
// // console.log(jeff)

// // // MAIS SOBRE CLASSES

// // class Caminhao {
// //     constructor (nome, cor) { 
// //     this.nome = nome
// //     this.cor = cor 


// //     }

// //     descreverCaminhao () {
// //         console.log(`este caminhao tem o nome ${this.nome} e é da cor ${this.cor}`);
// //     }
// // }
// //  const minhao = new Caminhao ("olavo", "verde") ;

// //  console.log(minhao);

// //  minhao.descreverCaminhao();


// //  class Ytube {
// //     constructor(ano, canais, lives) {
// //         this.ano = ano;
// //         this.canais = canais;
// //         this.lives = lives;
// //     }
// //  }

// // const chanel = new Ytube (1998, "2450 canais de yt", "13000 mil lives simultaneas")
// // console.log(chanel)


// // override nas prop via prototype (substituição quando tem um valor e troca pelo outro)  instancias baseadas nas classe, 

// // class Humano {
// //     constructor(idade, nome) {
// //         this.idade = idade;
// //         this.nome = nome;
    

// //     }
// // }

// // const otavio = new Humano(22, "otavio")
// // console.log(otavio)


// class Animal {
//     constructor(nome, idade, sexo){
//         this.nome = nome;
//         this.idade = idade;
//         this.sexo = sexo;

//     }
// }

// const MeuAnimal = new Animal("leopardo", 6, "masculino")

// console.log(MeuAnimal)


// Animal.prototype.idade = "não definida"
// console.log(MeuAnimal.idade)
// console.log(Animal.prototype.idade)

// symbols com classes, não estao atrelados eles podem ser usados sem classes
// possivel criar uma prop única e imutavel, util quando ha algum dado que se repetira em todos os objetos criados a partir da classe.
// symbols são unicos e imutaveis, ou seja quando eu crio um ele não pode ser alterado
// propriedade que a gente nao quer correr o risco de que tenha um conlitos de nomes...

class Aviao {
    constructor(marca, turbinas) [
        this.marca = marca;
        this.turbinas = turbinas;
    ]
}
 










