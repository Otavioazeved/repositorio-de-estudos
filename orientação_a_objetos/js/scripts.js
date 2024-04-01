// ES6 JS 

class CachorroClasse {
    constructor (nome, raca) {
        this.nome = nome
        this.raca = raca
    
    }
}

const jeff = new CachorroClasse("jeff", "puddle")
console.log(jeff)

// MAIS SOBRE CLASSES

class Caminhao {
    constructor (nome, cor) { 
    this.nome = nome
    this.cor = cor 


    }

    descreverCaminhao () {
        console.log(`este caminhao tem o nome ${this.nome} e é da cor ${this.cor}`);
    }
}
 const minhao = new Caminhao ("olavo", "verde") ;

 console.log(minhao);

 minhao.descreverCaminhao();












