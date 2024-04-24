// js assincrono...  utilizada quando as respostas não são obtidas de forma instantanea no programa 
// na programação assincrona as execuções não ocorrem em formato de fila, e sim no seu tempo 

// setTimeout... prog assincrona estabelece uma ação para ser executada após um certo tempo 

// o tempo é milesimos de segundos     3000 é 3 segundos exemplos


// setTimeout(funcao, tempo);


function ativarContagem() {
    document.getElementById("tempo").innerHTML = "começou a contar"
    setTimeout(function(){
document.getElementById("tempo").innerHTML = "executou o setTimeout"
    },5000)
}

// }


 setTimeout(function(){
    console.log("hello")
 }, 3000)
// timeout ativa a função apenas 1 vez quando der o tempo especificado 


