/* =========================================
   FUNÇÃO PRINCIPAL DA TABUADA
   ========================================= */

function tabuada() {

    let num = document.getElementById('txtn')

    let tab = document.getElementById('seltab')

    let jogo = document.querySelector('.jogo')

    let painel = document.querySelector('.painel')

    let textoTitulo = document.querySelector('.texto-tabuada')

    let numeroTitulo = document.getElementById('numeroTitulo')


    /* =====================================
       VERIFICAÇÃO DO CAMPO
       ===================================== */

    if (num.value.length == 0) {

        window.alert('Por favor, digite um número!')

        return

    }


    /* =====================================
       PEGA O NÚMERO DIGITADO
       ===================================== */

    let n = Number(num.value)

    let c = 1


    /* =====================================
       LIMPA A TABUADA ANTERIOR
       ===================================== */

    tab.innerHTML = ''


    /* =====================================
       TROCA O CENÁRIO
       =====================================

       1  = Balões
       2  = Crianças / árvore
       3  = Floresta
       4  = Avião
       5  = Espaço
       6  = Dinossauros
       7  = Fundo do mar
       8  = Corrida
       9  = Castelo
       10 = Circo

       Os números maiores que 10 continuam
       funcionando normalmente.
       ===================================== */

    if (n >= 1 && n <= 10) {

        jogo.style.backgroundImage =
            `url("imagens/tabuada-${n}.png")`

    }


    /* =====================================
       ALTERA O TÍTULO DA CAIXA
       ===================================== */

    textoTitulo.textContent = 'Tabuada do'

    numeroTitulo.textContent = n


    /* =====================================
       GERA AS 10 CONTAS
       ===================================== */

    while (c <= 10) {

        let item = document.createElement('div')


        /* Classe usada pelo CSS */

        item.className = 'linha-tabuada'


        /* Calcula o resultado */

        let resultado = n * c


        /* =================================
           MONTA A LINHA
           ================================= */

        item.innerHTML = `

            <span class="conta">
                ${n} × ${c}
            </span>

            <span class="igual">
                =
            </span>

            <span class="resultado">
                ${resultado}
            </span>

        `


        /* Adiciona a linha na caixa */

        tab.appendChild(item)


        /* Próxima multiplicação */

        c++

    }


    /* =====================================
       ANIMAÇÃO DA CAIXA
       ===================================== */

    painel.classList.remove('animar')


    /*
       Força o navegador a reiniciar
       a animação.
    */

    void painel.offsetWidth


    painel.classList.add('animar')

}


/* =========================================
   FORMULÁRIO DA TABUADA
   ========================================= */

let form = document.getElementById('formTabuada')


form.addEventListener('submit', function (event) {

    event.preventDefault()

    tabuada()

})