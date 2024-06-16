// // //  exercicio 1-
// // // variveis, tipos de dados e operadores.


// // const idade = 10
// // const peso = 20

// // console.log("idade:", idade)
// // console.log("peso:", peso)


// // const pi = "3,14"

// // console.log("pi:", pi)


// // const NumeroMaximo = Number.MIN_VALUE


// // console.log("NumeroMaximo:", NumeroMaximo)


// // // const nome = "otavio"
// // // const sobrenome = "azevedo"

// // // console.log("nome:", nome  +  "sobrenome:", sobrenome)


// // // correção

// // let nome = "otavio"
// // let sobrenome = "azevedo"
// // let NomeCompleto = nome + " " +sobrenome


// // console.log("nome completo:", NomeCompleto)

// // // soma

// // // let a = 90
// // // let b = 9

// // // let res = a - b

// // // console.log("A resposta é:", res)


// // let c = 1000
// // let d = 100
// // let e = c/d

// // console.log("A divisão entre c e d é:", e)


// // // boleanos.
// // // || siginifica "ou" ai le assim x valor ou y valor é verdaderio?se um dos dois for verdaderio então é true  
// // // && significa "e", ai ler assim x e y são verdadeiros ai nessa pdoeria dar falso pois um dos dois pode ser falso
// // // not "!" siginifica "não" ai le assim, x não verdadeiro e se ele for verdadeiro vai da false 


// // let bool1 = true
// // let bool2 = false
  

// // console.log("and:", bool1 && bool2)
// // console.log("or:", bool1 || bool2)
// // console.log("not:", !bool1)

// // //  operadores de comparação
// // // == é pra saber se é igual
// // let a = 5
// // let b = 3
// // console.log( " a resposta é:", a < b)
// // console.log("a resposta é:", a == b)
// // console.log("a resposta é:", a > b)



// // // INCREMENTO             (ISSO AQUI É IMPORTANTE PRA CARALHO IRMÃO)

// // // aqui ele pode aumentar ou diminuir seus valores entendeu, exemplo num++ ele soma mais um, num-- ele diminiu 


// // let num = 10;
// // num--;

// // console.log("incremento:", num )


// // let number = 124;
// // number--

// // console.log("o numero somado é:", number)



// // operadores condicionais


// function verificarNumero (num){
//     if(num > 0) {
//         console.log("Numero positivo")
//     } else if(num < 0){
//         console.log("numero negativo")
//     }else{
//         console.log("numero é zero")
//     }
// }




// verificarNumero(10)
// verificarNumero(-9)


// // else if usado depois de um if para testar outra condição somente se a if for falsa
// // else não testa nenhum executa o codigo quando nenhuma das cond são verdadeira if ou else if


// function verificarCNH (num){
//     if( num >= 18){
//         console.log("voce tem idade para dirigir e pode tirar sua cnh")
//     }else if(num < 12 && num < 18){
//         console.log("voce não tem idade para tirar sua cnh, é um adolescente va ja brincar euem")
//     }else{
//         console.log("voce é um adulto")
//     }
    
// }

// verificarCNH(21)
// verificarCNH(9)



//  MediaAluno = (notaA, notaB) => {
//     let a = notaA
//     let b = notaB
    

//     if((notaA + notaB)/2 >= 7){
//         console.log("aluno aprovado")
//     }else if((notaA + notaB)/2 <= 7){
//         console.log("aluno reprovado")
//     }
// }

// MediaAluno(9,3)



// // VerificarVoto = (obt, facul) => {
// //     let a = obt
// //     let b = facul
// //     if(obt >= 18 && obt <= 70){
// //         console.log("Voto obrigatório")
// //     }else if ((facul >= 16 && idade < 18)|| facul >= 70 ){
// //         console.log("voto facultativo")
// //     }else {
// //         (console.log("voce não tem idade para votar"))
// //     }
// // }


// // VerificarVoto(17)


// PodeVotar = (idade) => {
//     if(idade >= 18 && idade < 70){
//         console.log("voto obrigatorio")
//     }else if((idade >= 16 && idade < 18) || idade < 70) {
//         console.log("voto facultativo")
//     } else {
//         console.log("não pode votar")
//     }
// }

// PodeVotar(15)
// PodeVotar(2)

// // IMC

// // CalcularIMC = (peso, altura) => {
// //     const IMC = peso/(altura * altura)
// //     if(IMC < 18.5){
// //         console.log("abaixo do peso")
// //     }else if(IMC >=18.5 && IMC < 25 ){
// //         console.log("peso normal")
// //     }else if(IMC >= 25 && IMC < 30){
// //         console.log("sobrepeso")
// //     }else {
// //         console.log("obesidade")
// //     }
        


// // }


// // CalcularIMC(59, 1,7)


// // AnoBissexto = (ano) => {
// //     if((ano % 4 == 0 && ano % 100 !=0) || ano % 400==0){
// //         console.log(ano, " é um ano bissexto")
// //     }else{
// //         console.log(ano, "não é um ano bissexto")
// //     }
// // }
// // AnoBissexto(2017)


// // verificar se é um palindromo
// //  VerificarPalindromo = (palavra) =>{
// //     const PalavraInvertida = palavra.split().reverse().join();
// //     if(palavra == PalavraInvertida){
// //         console.log(palavra+ " é um palindromo")
// //     }else{
// //         console.log( palavra+ "não é um palindromo")
// //     }
// //  }


// //  VerificarPalindromo("arara")
// //  VerificarPalindromo("otavio")



// /*  codigo para poder verificar o maior numero entre tres numeros,
//  ta uma bosta, mas é o meu codigo é algo que eu pensei
//   com pouco tempo de programação que tenho no dia de hj 14/06/2024.
// */
//  MaiorEntreTodos = (small, large, smallest) => {
//     let a = small
//     let b = large
//     let c = smallest
//         if(small > large && small > smallest ){
//         console.log( a+ ",maior entre os tres numeros")
//     }else if(large > small && large > smallest) {
//         console.log(b+ ",esse é o maior entre os tres")
//     }else if(smallest > small && smallest > large){
//         console.log(c+ ", o maior entre os tres")
//     }
//  }

//  MaiorEntreTodos(6, 10, 12)


// //  par ou impar

// ParOrImpar = (n) => {
//     if(n % 2 == 0){ 
//         console.log("esse numero é par")
//     }else{
//         console.log (" esse é um numero impar")
//     }
// }

// ParOrImpar(5)
// ParOrImpar(120)
// ParOrImpar(198)


// // idade para tirar habilitação

//  PossoTirarCNH = (idade) =>{
//     if(idade > 18  ){
//         console.log("voce tem idade para dirigir")
//     }else{
//         console.log("voce não tem idade para dirigir")
//     }
//     }

//     PossoTirarCNH(15)
//     PossoTirarCNH(22)


//     // numero dentro do intervalo


// verificadorDeNumero = (n1, n2, n3) => {
    
//     if(n1 > n2 && n1 > n3 ) {
//         console.log( n1+ "este é o numero verificado")
//     }
//     else if(n2 > n1 || n3 > n1) {
//         console.log("esse é o limite inferior")
//     }
// }
 

// verificadorDeNumero(12, 20, 24)


// // classificação dos estudantes

// classificarAluno = (nota) =>{
//     if(nota >= 90){
//         console.log("A")
//     }else if(nota >= 80){
//         console.log("B")
//     }else if (nota >= 70){
//         console.log("C")
//     }else {
//         console.log("aluno reprovado por insufiencia")
//     }
// }

// classificarAluno(100)



// Estações do ano


EstaçõesAnual = (mes) => {
    if(mes < 3 || mes == 12){
        console.log("verão")
    }else if(mes < 6){
        console.log("Outono")
    }else if(mes < 9){
        console.log ("inverno")
    }else{
        console.log("primavera")
    }
}

EstaçõesAnual(7)

// pausa para aprender Switch  e case

// let colocação = 6


// switch(colocação){
//     case 1:
//         console.log("primeiro")
//         break

//         case 2:
//             console.log("segundo")
//             break

//             case 3:
//                 console.log("terceiro")

//                  case 4: case 5: case 6:   
//                     console.log("premio de participação")                                
//                 default:
//                     console.log("nao subiu ao podio")
//                     break

// }



DiasDeUmMes = (dias) => {
    switch(dias){
        case 4: case 6: case 9: case 11:
            console.log("esse mes tem 30 dias")
            break
            case 2: 
            console.log("esse mes tem 28 dias")
            break
            case 1: case 3: case 5: case 7: case 8: case 10: case 12:
                console.log("esse mes tem 31 dias")
                default:
                    console.log("31 dias")
    }
}

DiasDeUmMes(2)

/*
colocando um case do lado do outro ele me mostra "um ou outro",
 switch e case são necessarios 
 para executar diferentes blocos de codigo, 
 não pode se esquecer de colocar um break logo após colocar um case.

*/  


CorsSemafaro = (cor) =>{
    if(cor==="verde") {
    console.log("siga em frente")
    }else if(cor === "vermelho"){
        console.log("pare")
    }else if(cor === "amarelo"){
        console.log("cuidado o sinal ja vai fechar, reduza a velocidade")
    }else{
        console.log("por favor digite uma cor válida")
    }
}
CorsSemafaro("branco")


// repetição em js
// tabuada 

// for(let i = 1; i<=10; i++ ){
//     console.log("5 x", i, "=", + 5 * i)
// }



// for(let a = 1; a<=10; a++){
//     console.log("9 x", a, "=", 9 * a)
// }

// aprendendo while, for e do while dnv...  while significa enquanto tal coisa acontecer faça isso..
// let c = 490
// while(c <= 500){
//     console.log(`passo ${c}:`)
//     c++
// }


// WHILE faz teste logic no inicio e DO WHILE faz teste logico no final


// let o =1 
// do{
//     console.log(`passo ${o}:`)
//     o++
// } while(o <= 10)

//  for estrutura de repetção com (var; )
// let o = 1

// for(let o = 1; o <= 10; o++){
//     console.log("8 x", o, "=", 8 * o)
// }



// let i= 1

// for(let i =1; i<=10; i++){
//     console.log("ola feioso")
//     console.log("ola bonito")

//

/*
for tem (inicio; teste; incremento){
nesse bloco de codigo eu posso usar um if, else, else,
while, do while....
}
*/
