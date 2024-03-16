function carregar () {
var msg = window.document.getElementById('msg');
var img = window.document.getElementById('img');
var data = new Date();
var hora = data.getHours();
var minute = data.getMinutes();
msg.innerHTML = `agora são ${hora} horas e ${minute} minutos`;
if(hora >= 0 && hora < 12) {
    img.src = "img/manha.jpg";
} else if(hora >= 12 && hora < 18) {
    img.src ="img/tarde.jpg";
} else {
    img.src = "img/noite.jpg";
    
}

}
carregar();
