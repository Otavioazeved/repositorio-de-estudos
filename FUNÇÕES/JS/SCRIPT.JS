// // criando uma função

//  function minhaFuncao() {
//     console.log("testando")
//  }

//  minhaFuncao();
// //   minhaFuncao();   aqui estou invocando a minha funcao, se tivesse algo nos parenteses eu coloca se n ok, ai assim aparece a mensagem no console


//  const minhaFuncaoEmVariavel = function () {
//     console.log("função em variavel") 

// }

// minhaFuncaoEmVariavel(); 
// // minhaFuncaoEmVariavel();  nessa situação aqui tambem esta invocando a função

// function funcaoComParametro(txt) {
//     console.log(`imprimindo: ${txt}`)
// }

//  funcaoComParametro("imprimindo alguma coisa")

// funcaoComParametro("outra função")
// funcaoComParametro("outra função otavio")


// return 


// const a = 10;
// const b = 20;
// const c = 30;
// const d = 40;

// function soma(n1, n2) {
//     return n1 + n2;
// }

// const resultado = soma(a, b)

// console.log(soma(c, d))

// console.log(soma(a, b))


let y = 10;

// function funcaoComEscopo () {
//     let y = 20;
//     console.log(`dentro da função é; ${y}`)

// }

// funcaoComEscopo();


// console.log(`fora da função y é: ${y}`)

// //   função o1 js 


// function parimpar(n) {
//     if(n%2 == 0) {
//         return `par`
//     }else {
//         return `impar`
//     }
// }

//  console.log(parimpar(8))



//  mais funções...kkkk

// function soma( n1 = 0, n2 = 0) {
//     let soma = n1 + n2
//     return soma
// }

// const meusnumeros =  soma(4)

function div( n1, n2) {
    let div = n1 / n2
    return div
}

const minhaDivisao = div(4, 2)
console.log(minhaDivisao)