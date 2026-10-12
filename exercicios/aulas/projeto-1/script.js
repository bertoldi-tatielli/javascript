function carregar() {
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')
    let data = new Date()

    let hora = data.getHours()
    

    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 6) {
        // BOA MADRUGADA
        msg.innerHTML += '<strong>Boa Madrugada!</strong>'
        img.src = 'imagens/madrugada_250.png'
        document.body.style.background = '#02346d'

    } else if (hora < 13) {
        // BOM DIA
        msg.innerHTML += '<br>Bom Dia!'
        img.src = 'imagens/manha_250.png'
        document.body.style.background = '#79bcf8'

    } else if (hora < 18) {
        // BOA TARDE
        msg.innerHTML += '<br>Boa Tarde!'
        img.src = 'imagens/tarde_250.png'
        document.body.style.background = '#fc620fe0'

    } else {
        // BOA NOITE
        msg.innerHTML += '<br>Boa Noite!'
        img.src = 'imagens/noite_250.png'
        document.body.style.background = '#05376fcc'
    }
}