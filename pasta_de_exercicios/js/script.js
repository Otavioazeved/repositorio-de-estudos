function carregar () {
var msg = window.document.getElementById('msg')
var imgg = window.document.getElementById('imgg')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `agora são ${hora} horas`
if (hora)
}