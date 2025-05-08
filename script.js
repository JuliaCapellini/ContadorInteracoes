let contador = Number(localStorage.getItem('contador')) || 0;
let res = document.querySelector('section#result')

function atualizarContador() {
    res.innerHTML = `<p>Hoje você fez <mark>${contador}</mark> interações.</p>`;
    localStorage.setItem('contador', contador);
}

function contar() {
    contador++;
    atualizarContador();
}

function diminuir() {
    if (contador > 0) {
        contador--;
        atualizarContador();
    }
}

function zerar() {
    contador = 0
    atualizarContador();
    localStorage.setItem('contador', contador);
}

if (contador > 0) {
    atualizarContador();
}
