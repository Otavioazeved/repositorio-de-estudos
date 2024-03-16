function carregar () {
var msg = window.document.getElementById('msg')
var imgg = window.document.getElementById('imgg')
var data = new Date()
var hora = data.getHours()
var minute = data.getMinutes()
msg.innerHTML = `agora são ${hora} horas e ${minute} minutos`
if(hora >= 0 && hora < 12) {
    imgg.src = 'manha.jpg"
} else if(hora >= 12 && hora <= 18) {
    imgg.src = "tarde.jpg"
} else{
    imgg.src = "noite.jpg"
}

}
