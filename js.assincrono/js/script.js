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

function ativarContagem() {
    // document.getElementById("tempo").innerHTML = "começou a contar"

//     tempo = setTimeout(function(){
// document.getElementById("tempo").innerHTML = "executou o setTimeout"
//     }, 5000)
   tempo = setInterval(function(){
    var cronometro = document.getElementById("tempo").innerHTML;
    var soma = parseInt (cronometro) - 1;

    if(soma === 0 ){
        document.getElementById("tempo").innerHTML = "tempo esgotado"
      pararContagem ()
    }else {
        document.getElementById("tempo").innerHTML = soma
    }
    document.getElementById("tempo").innerHTML = soma

}, 1000)


}

// parseInt para transforma texto em numero 

// para parar uma contagem tem que colocar o setTimeout dentro de uma variavel no caso ali é "tempo" var global ser ter o var o let por causa do escopo


function pararContagem () {
    clearInterval(tempo);
    document.getElementById("tempo").innerHTML = "tempo esgotado"
}



// para parar uma setInterval é so usar o clearInterval(e a variavel )
