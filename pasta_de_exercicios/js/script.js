function carregar () {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imgg')
var data = new Date()
var hora = data.getHours()
var minute = data.getMinutes()
msg.innerHTML = `agora são ${hora} horas e ${minute} minutos`
if(hora >= 0 && hora < 12) {
    img.src = 'manha.jpg'
} else if(hora >= 12 && hora <= 18) {
    img.src ='tarde.jpg'
} else {
    img.src = 'noite.jpg'
}

}
