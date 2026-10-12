function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verificar os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 2) {
                // Bebe
                img.setAttribute('src', '/imagens/bebe1-m.png')
            } else if (idade < 5) {
                // Crianca Pequena
                img.setAttribute('src', '/imagens/crianca2-p-m.png')
            } else if (idade < 12) {
                // Crianca
                img.setAttribute('src', '/imagens/crianca3-m.png')
            } else if (idade < 17) {
                // Adolescente
                img.setAttribute('src', '/imagens/adolescente4-m.png')
            } else if (idade < 24) {
                // Jovem
                img.setAttribute('src', '/imagens/jovem5-m.png')
            } else if (idade < 40) {
                // Adulto
                img.setAttribute('src', '/imagens/adulto6-m.png')
            } else if (idade < 60) {
                // Idoso
                img.setAttribute('src', '/imagens/idoso7-m.png')
            } else if (idade < 80) {
                // Ansiano  
                img.setAttribute('src', '/imagens/ansiano8-m.png')
            } else {
                // Longevo
                img.setAttribute('src', '/imagens/longevo9-m.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 2) {
                // Bebe
                img.setAttribute('src', '/imagens/bebe1-f.png')
            } else if (idade < 5) {
                // Crianca Pequena
                img.setAttribute('src', '/imagens/crianca2-p-f.png')
            } else if (idade < 12) {
                // Crianca
                img.setAttribute('src', '/imagens/crianca3-f.png')
            } else if (idade < 17) {
                // Adolescente
                img.setAttribute('src', '/imagens/adolescente4-f.png')
            } else if (idade < 24) {
                // Jovem
                img.setAttribute('src', '/imagens/jovem5-f.png')
            } else if (idade < 40) {
                // Adulto
                img.setAttribute('src', '/imagens/adulto6-f.png')
            } else if (idade < 60) {
                // Idoso
                img.setAttribute('src', '/imagens/idoso7-f.png')
            } else if (idade < 80) {
                // Ansiano  
                img.setAttribute('src', '/imagens/ansiano8-f.png')
            } else {
                // Longevo
                img.setAttribute('src', '/imagens/longevo9-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}