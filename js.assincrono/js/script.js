// js assincrono...  utilizada quando as respostas não são obtidas de forma instantanea no programa 
// na programação assincrona as execuções não ocorrem em formato de fila, e sim no seu tempo 

// setTimeout... prog assincrona estabelece uma ação para ser executada após um certo tempo 

// o tempo é milesimos de segundos     3000 é 3 segundos exemplos


// setTimeout(funcao, tempo);


// function ativarContagem() {
//     document.getElementById("tempo").innerHTML = "começou a contar"
//     setTimeout(function(){
// document.getElementById("tempo").innerHTML = "executou o setTimeout"
//     },5000)
// }

// // }


//  setTimeout(function(){
//     console.log("hello")
//  }, 3000)






// timeout ativa a função apenas 1 vez quando der o tempo especificado 

// setInterval... semelhante a setTimeout porém ela NÃO para de ser executada é como um loop infinito com execução de tempo controlada


// setInterval

//   console.log("ainda não comecou")


// setInterval(function () {
//     console.log("intervalo assincrono")
// }, 3000)

// console.log("ainda não começou 2")


// setInterval usado para executar uma tarefa repetidamente 


// cleartimeout faz parar a contagem clearTimeout(qual variavel quer que pare )

// setTimeout executa uma função depois de esperar um nuemro especifico de tempo de milisegundos
// setInterval é os mesmo de setTimeout, porém ele executa a função de maneira continuamente

// function ativarContagem() {
    // document.getElementById("tempo").innerHTML = "começou a contar"

//     tempo = setTimeout(function(){
// document.getElementById("tempo").innerHTML = "executou o setTimeout"
//     }, 5000)
//    tempo = setInterval(function(){
//     var cronometro = document.getElementById("tempo").innerHTML;
//     var soma = parseInt (cronometro) - 1;

//     if(soma === 0 ){
//         document.getElementById("tempo").innerHTML = "tempo esgotado"
//       pararContagem ()
//     }else {
//         document.getElementById("tempo").innerHTML = soma
//     }
//     document.getElementById("tempo").innerHTML = soma

// }, 1000)



// parseInt para transforma texto em numero 

// para parar uma contagem tem que colocar o setTimeout dentro de uma variavel no caso ali é "tempo" var global ser ter o var o let por causa do escopo


// function pararContagem () {
//     clearInterval(tempo);
//     document.getElementById("tempo").innerHTML = "tempo esgotado"
// }



// para parar uma setInterval é so usar o clearInterval(e a variavel )






// promises é um objeto q é construido utilizando uma função construtora de promises


// const umaPromessa = new Promise((resolve, reject) => { 

//     let soma = 1 + 3
//     if(soma === 4) {
//         resolve('tudo certo')
//     }else{
//         reject('deu ruim')
//     }

// })

// // then é porque a função foi resolvida
// // se der reject ela vai entrar no reject
// // e se deu algum dos dois ele vai ir p finally independente do resultado

// console.log('esperando promise')



// // método all da p executar varias promises....


// const p1 = new Promise((resolve, reject)=>  {
//     setTimeout(function() {
//         resolve(10)
//     },1000)
// })

// const p2 = Promise.resolve(10 + 10);


// const p3 = new Promise((resolve, reject) =>{
//     if(30 > 10 ){
//         resolve(30)
//     }else{
//         reject("erro")
//     }
// });

// Promise.all([p1, p2, p3]).then((values) => console.log(values) )


// async functions: são funçoes que retornam Promises



// async function somarComdelay(a, b) {
//     return a + b;
// }

// somarComdelay(2, 4).then((value) => {
//     console.log(`o valor da soma é: ${value}`);
// })

// const coffe = new Promise((resolve, reject) => {
//     reject({message: "joao não quebrou a promessa"})
// })

// coffe
// .then((resolve) => {
//     console.log(resolve)
// }).catch ((reject) => {
//     console.log('reject', reject )
// })

// async AWAIT serve para aguardar o resultado de uma async function
// assim não precisaria trabalhar com Promises
// await so funciona em funçoes assincronas então tem que ter um async function pra ele ser colocado

// essas operações são uteis quando vc precisa acessar o sistema de arquivos, fazer solitações de rede...
// toda funçãoa assincrona no js retorna uma promise, uma função assincrona permite "aguardar" pela resposta da promise
// then sig "quando vc tiver resposta da promise retorna pra mim aqui dentro dessa função "
// quando eu tenho uma promise algo vai ser resolvido apos um tempo 



// comentario de uma linha


/* comentantario 
de mais linhas 
aqui estou */







// aqui eu faço a promessa  

 function funçãoComdelay(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("concluiu a Promise")
        },3000)
    })
}

// e aqui eu ja fiz a promessa, so falta realizar as coisas agora...

async function NossaDelay(){
    console.log("chamando a Promise, e esperando o resultado ")
    const resultado = await funçãoComdelay()
    console.log(`o resultado chegou: ${resultado}`)

}

NossaDelay()


