let contador = 0
let res = document.querySelector('section#result')

function contar() {
    contador ++
    res.innerHTML = `<p>Hoje você fez <mark>${contador}</mark> interações.</p>`
}

function diminuir() {
    if (contador > 0) {
        contador--
        res.innerHTML = `<p>Hoje você fez <mark>${contador}</mark> interações.</p>`
    }
}

function zerar() {
    contador = 0
    res.innerHTML = null
}
