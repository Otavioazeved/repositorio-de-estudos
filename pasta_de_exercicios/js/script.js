function carregar () {
var msg = window.document.getElementById('msg')
var imgg = window.document.getElementById('imgg')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `agora são ${hora} horas`
if (hora >= 0 && hora < 12) {
    console.log("Bom dia!")
    imgg.src = "manha.jpg"
} else if( hora >= 12 && < 18) {
    console.log("boa tarde!")
    imgg.src = "tarde.jog"
} else {
    console.log("boa noite!")
    imgg.src = "noite.jpg"
}
}
