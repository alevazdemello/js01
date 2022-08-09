function carregar() {
  var msg = window.document.getElementById('msg')
  var img = window.document.getElementById('img')
  var data = new Date()
  var hora = data.getHours()
  msg.innerHTML = `Agora são ${hora} horas.`
  if (hora >= 5 && hora < 12) {
    img.src = 'foto-manha.jpg'
    document.body.style.background = '#676c78'
    //bomdia
  } else if (hora >= 12 && hora < 18) {
    img.src = 'foto-tarde.jpg'
    document.body.style.background = '#FF4500'
    //boatarde
  } else {
    img.src = 'foto-noite.jpg'
    document.body.style.background = '#8A2BE2'
    //boanoite
  }
}

