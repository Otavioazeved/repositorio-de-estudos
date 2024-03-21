const calcular = document.getElementById('calcular');

function imc() {
    const nome = document.getElementById('nome'). value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado')

    if(nome !== '' && altura !== '' && peso!== '') {

       const valorIMC = (peso / (altura * altura)). toFixed(2);

       let  classificação = "";
       if(valorIMC < 18.5) {  
        classificação = 'abaixo do peso'

       }else if (valorIMC < 25 ) {
        classificação =  'com peso ideal'
       }else if(valorIMC < 30) {
        classificação = ' voce esta acima do peso ideal'
       }

       resultado.textContent = `${nome}, seu IMC é ${valorIMC} e voce está abaixo do peso ideal.`

    }else {
       resultado.textContent = 'preencha todos os campos'
    }
    



}

calcular.addEventListener('click', imc);