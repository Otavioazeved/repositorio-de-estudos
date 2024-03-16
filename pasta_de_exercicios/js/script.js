function carregar () {
var msg = window.document.getElementById('msg')
var imgg = window.document.getElementById('imgg')
var data = new Date()
var hora = data.getHours()
var minute = data.getMinutes()
msg.innerHTML = `agora são ${hora} horas e ${minute} minutos`
if(hora >= 0 && hora < 12) {
    imgg.src = "manha.jpg"
    console.log("bom dia")
} else if(hora >= 12 && hora <= 18) {
    console.log("boa tarde")
    imgg.src = "tarde.jpg"
} else{
    console.log("boa noite")
    imgg.src = "noite.jpg"
}

}
