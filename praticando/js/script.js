// //  exercicio 1-
// // variveis, tipos de dados e operadores.


// const idade = 10
// const peso = 20

// console.log("idade:", idade)
// console.log("peso:", peso)


// const pi = "3,14"

// console.log("pi:", pi)


// const NumeroMaximo = Number.MIN_VALUE


// console.log("NumeroMaximo:", NumeroMaximo)


// // const nome = "otavio"
// // const sobrenome = "azevedo"

// // console.log("nome:", nome  +  "sobrenome:", sobrenome)


// // correção

// let nome = "otavio"
// let sobrenome = "azevedo"
// let NomeCompleto = nome + " " +sobrenome


// console.log("nome completo:", NomeCompleto)

// // soma

// // let a = 90
// // let b = 9

// // let res = a - b

// // console.log("A resposta é:", res)


// let c = 1000
// let d = 100
// let e = c/d

// console.log("A divisão entre c e d é:", e)


// // boleanos.
// // || siginifica "ou" ai le assim x valor ou y valor é verdaderio?se um dos dois for verdaderio então é true  
// // && significa "e", ai ler assim x e y são verdadeiros ai nessa pdoeria dar falso pois um dos dois pode ser falso
// // not "!" siginifica "não" ai le assim, x não verdadeiro e se ele for verdadeiro vai da false 


// let bool1 = true
// let bool2 = false
  

// console.log("and:", bool1 && bool2)
// console.log("or:", bool1 || bool2)
// console.log("not:", !bool1)

// //  operadores de comparação
// // == é pra saber se é igual
// let a = 5
// let b = 3
// console.log( " a resposta é:", a < b)
// console.log("a resposta é:", a == b)
// console.log("a resposta é:", a > b)



// // INCREMENTO             (ISSO AQUI É IMPORTANTE PRA CARALHO IRMÃO)

// // aqui ele pode aumentar ou diminuir seus valores entendeu, exemplo num++ ele soma mais um, num-- ele diminiu 


// let num = 10;
// num--;

// console.log("incremento:", num )


// let number = 124;
// number--

// console.log("o numero somado é:", number)



// operadores condicionais


function verificarNumero (num){
    if(num > 0) {
        console.log("Numero positivo")
    } else if(num < 0){
        console.log("numero negativo")
    }else{
        console.log("numero é zero")
    }
}




verificarNumero(10)
verificarNumero(-9)


// else if usado depois de um if para testar outra condição somente se a if for falsa
// else não testa nenhum executa o codigo quando nenhuma das cond são verdadeira if ou else if


function verificarCNH (num){
    if( num >= 18){
        console.log("voce tem idade para dirigir e pode tirar sua cnh")
    }else if(num < 12 && num < 18){
        console.log("voce não tem idade para tirar sua cnh, é um adolescente va ja brincar euem")
    }else{
        console.log("voce é um adulto")
    }
    
}

verificarCNH(21)
verificarCNH(9)



 MediaAluno = (notaA, notaB) => {
    let a = notaA
    let b = notaB
    

    if((notaA + notaB)/2 >= 7){
        console.log("aluno aprovado")
    }else if((notaA + notaB)/2 <= 7){
        console.log("aluno reprovado")
    }
}

MediaAluno(9,3)



// VerificarVoto = (obt, facul) => {
//     let a = obt
//     let b = facul
//     if(obt >= 18 && obt <= 70){
//         console.log("Voto obrigatório")
//     }else if ((facul >= 16 && idade < 18)|| facul >= 70 ){
//         console.log("voto facultativo")
//     }else {
//         (console.log("voce não tem idade para votar"))
//     }
// }


// VerificarVoto(17)


PodeVotar = (idade) => {
    if(idade >= 18 && idade < 70){
        console.log("voto obrigatorio")
    }else if((idade >= 16 && idade < 18) || idade < 70) {
        console.log("voto facultativo")
    } else {
        console.log("não pode votar")
    }
}

PodeVotar(15)
PodeVotar(2)

// IMC

// CalcularIMC = (peso, altura) => {
//     const IMC = peso/(altura * altura)
//     if(IMC < 18.5){
//         console.log("abaixo do peso")
//     }else if(IMC >=18.5 && IMC < 25 ){
//         console.log("peso normal")
//     }else if(IMC >= 25 && IMC < 30){
//         console.log("sobrepeso")
//     }else {
//         console.log("obesidade")
//     }
        


// }


// CalcularIMC(59, 1,7)


// AnoBissexto = (ano) => {
//     if((ano % 4 == 0 && ano % 100 !=0) || ano % 400==0){
//         console.log(ano, " é um ano bissexto")
//     }else{
//         console.log(ano, "não é um ano bissexto")
//     }
// }
// AnoBissexto(2017)


// verificar se é um palindromo
//  VerificarPalindromo = (palavra) =>{
//     const PalavraInvertida = palavra.split().reverse().join();
//     if(palavra == PalavraInvertida){
//         console.log(palavra+ " é um palindromo")
//     }else{
//         console.log( palavra+ "não é um palindromo")
//     }
//  }


//  VerificarPalindromo("arara")
//  VerificarPalindromo("otavio")



/*  codigo para poder verificar o maior numero entre tres numeros,
 ta uma bosta, mas é o meu codigo é algo que eu pensei
  com pouco tempo de programação que tenho no dia de hj 14/06/2024.
*/
 MaiorEntreTodos = (small, large, smallest) => {
    let a = small
    let b = large
    let c = smallest
        if(small > large && small > smallest ){
        console.log( a+ ",maior entre os tres numeros")
    }else if(large > small && large > smallest) {
        console.log(b+ ",esse é o maior entre os tres")
    }else if(smallest > small && smallest > large){
        console.log(c+ ", o maior entre os tres")
    }
 }

 MaiorEntreTodos(6, 10, 12)


//  par ou impar

ParOrImpar = (n) => {
    if(n % 2 == 0){ 
        console.log("esse numero é par")
    }else{
        console.log (" esse é um numero impar")
    }
}

ParOrImpar(5)
ParOrImpar(120)
ParOrImpar(198)













