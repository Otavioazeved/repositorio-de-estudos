const turnOnOFF = document.getElementById('turnOnOFF');
const lamp = document.getElementById('lampada');


function islampBroken () {
    return lamp.src.indexOf ('quebrada') > -1
}

function lampOn() {
    if(!islampBroken() ) {
        lamp.src = './img/ligada.jpg';
    }
}

function lampOFF() {
    if(!islampBroken() ) {
        lamp.src = './img/desligada.jpg';
    }

}

function lampBroken () {
    lamp.src = './img/quebrada.jpg';
}

function lampOnOFF () {
    if(turnOnOFF.textContent == 'ligar') {
        lampOn();
        turnOnOFF.textContent = 'desligar';
    }
}





turnOnOFF.addEventListener('click', lampOnOFF);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOFF);
lamp.addEventListener('dblclick', lampBroken);