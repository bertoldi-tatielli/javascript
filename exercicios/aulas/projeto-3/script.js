function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
    } else {

        res.innerHTML = 'Contando...<br>'

        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }

        if (i < f) {

            // Contagem crescente
            for (let c = i; c <= f; c += p) {

                if (c + p > f) {
                    res.innerHTML += `${c} ✓`
                } else {
                    res.innerHTML += `${c} → `
                }
            }

        } else {

            // Contagem regressiva
            for (let c = i; c >= f; c -= p) {

                if (c - p < f) {
                    res.innerHTML += `${c} ✓`
                } else {
                    res.innerHTML += `${c} → `
                }
            }
        }
    }
}


/* =========================================
   FOLHAS DE OUTONO
   ========================================= */

const folhas = [
    'folha-1.png',
    'folha-2.png',
    'folha-3.png',
    'folha-4.png',
    'folha-5.png',
    'folha-6.png',
    'folha-7.png',
    'folha-8.png'
]


/* =========================================
   CRIA UMA FOLHA
   ========================================= */

function criarFolha() {

    const camada = document.getElementById('folhas')

    const folha = document.createElement('img')

    folha.classList.add('folha')


    // Escolhe uma folha aleatória
    const numero = Math.floor(
        Math.random() * folhas.length
    )


    folha.src = `img/folhas/${folhas[numero]}`


    /*
        Mantemos as folhas principalmente
        nas laterais da página.
    */

    const lado = Math.random() < 0.5


    if (lado) {

        // Lado esquerdo
        folha.style.left =
            `${Math.random() * 18}vw`

    } else {

        // Lado direito
        folha.style.left =
            `${82 + Math.random() * 18}vw`

    }


    /*
        Tamanho discreto
    */

    const tamanho =
        30 + Math.random() * 30


    folha.style.width =
        `${tamanho}px`


    /*
        Queda lenta
    */

    const duracao =
        12 + Math.random() * 7


    folha.style.animationDuration =
        `${duracao}s`


    /*
        Atraso aleatório
    */

    const atraso =
        Math.random() * 4


    folha.style.animationDelay =
        `${atraso}s`


    /*
        Rotação inicial aleatória
    */

    folha.style.transform =
        `rotate(${Math.random() * 80 - 40}deg)`


    camada.appendChild(folha)


    /*
        Remove a folha depois
        que terminar a animação.
    */

    setTimeout(() => {

        folha.remove()

    }, (duracao + atraso) * 1000 + 1000)
}


/* =========================================
   FOLHAS CAINDO
   ========================================= */


/*
    Agora uma folha aparece
    aproximadamente a cada 2,5 segundos.
*/

setInterval(criarFolha, 2500)


/*
    Algumas folhas aparecem
    quando a página abre.
*/

for (let i = 0; i < 3; i++) {

    setTimeout(
        criarFolha,
        i * 1500
    )

}