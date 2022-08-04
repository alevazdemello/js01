function carregar() {
  var msg = window.document.getElementById('msg')
  var img = window.document.getElementById('igm')
  var data = new Date()
  var hora = data.getHours()
  msg.innerHTML = `Agora são ${hora} horas.`
  if (hora >= 5 && hora < 12) {
    img.src = 'foto-manha.jpg'
    //bomdia
  } else if (hora >= 12 && hora < 18) {
    img.src = 'foto-tarde.jpg'
    //boatarde
  } else {
    img.src = 'foto-noite.jpg'
    //boanoite
  }
}

