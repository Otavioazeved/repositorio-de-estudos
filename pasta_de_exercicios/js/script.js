const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let minut = dateToday.getMinutes();
    let sec = dateToday.getSeconds();

    if(hr < 10 ) hr = '0' + hr;

    if(minut < 10 ) minut = '0' + minut;

    if(sec < 10 ) sec = '0' + sec;

    horas.textContent = hr;
    minutos.textContent = minut
    segundos.textContent = sec


})