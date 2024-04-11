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

// class Aviao {
//     constructor(marca, turbinas) [
//         this.marca = marca;
//         this.turbinas = turbinas;
//     ]
// }

// const MinhaLoja = {
//     cor: "azul",
//     comodos: "4 comodos",
//     tamanho: "pequena"
// }

// console.log(MinhaLoja)


// const OutraLoja = Object.create(MinhaLoja);
// OutraLoja.comodo = "6 comodos"

// console.log(OutraLoja)



// const MyObject = {
//     a: "b"

// }

// console.log(Object.getPrototypeOf(MyObject) === Object.getPrototypeOf(MyObject))


// const NossoObject = Object.create(MyObject)

// NossoObject.a = "c"

// console.log(NossoObject)

//  estudnao novamente o for


// for(let i = 1; i <= 5; i++)

// console.log(i)


// getters e setters
//  GET é um metodo usado para EXIBIR o valor de alguma propriedade

// SET usado para ALTERAR o valor

// atraves desses metodos temso um bloco de codigo para transformação de dados....

// no constructor n sou obrigado a passar todos os parametros

// rever essa aual de novo pq eu não entendi foi nada 

// class Post{
//     constructor(titulo, tags, descricao) {
//         this.titulo = titulo;
//         this.tags = tags;
//         this.descricao = descricao;
//     }
   
// }

// class Post {
//     constructor(nome, idade, sexo) {
//         this.nome = nome;
//         this.idade = idade;
//         this.sexo = sexo;
    
//     }
// }

// const VaiLa = new Post("otavio", 22, "masculino")

// console.log(VaiLa);



// herança..

// comando extends define que existe uma herança... ou seja vai herdar a classe


// class Mamifero{
//     constructor(patas) {
//         this.patas = patas;
//     }
// }

// class Lobo extends Mamifero {
//     constructor(patas, nome) {
//         super (patas, patas)
//         this.nome = nome 
//     }
// }


// const shark = new Lobo(4, "shark")

// console.log(shark)

class Robo {
    constructor(nome) {
        this.nome = nome;
        

    }
        andar() {
            console.log(this.nome + " esta andando.");
        }   

        falar() {
            console.log(this.nome + " esta falando")
        }
    }

const MeuRobo = new Robo("R2D2")

MeuRobo.andar();
MeuRobo.falar();




class NossoRobo extends Robo{
    pular() {
        console.log(this.nome + " esta pulando")
    }
}


const Robo2 = new NossoRobo("R2D2")

Robo2.pular();





class Dispositivo {
    constructor(nome) {
        this.nome = nome;
        this.ligado = true;

    }
    ligar() {
        if(this.ligado) {
            console.log(this.nome + " ligado")
            return
        }

        this.ligado = true;

    }

    desligar() {
        if (this.delsigado){
            console.log(this.nome + " desligado")
            return
        }

        this.delsigado = false
    }

}

let d1 = new Dispositivo("samsung")
console.log(d1)




