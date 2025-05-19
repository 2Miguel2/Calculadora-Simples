const tela = document.getElementById('tela');
const placeholder = document.getElementById('placeholder');

function atualizarPlaceholder() {
  placeholder.style.display = tela.value === '' ? 'block' : 'none';
} //Faz aparecer e desparecer o "Esperando uma conta..." o block faz aparecer e o none sumir quando digitado algo

function adicionar(valor) {
    if (tela.value == 'Error') {
        tela.value = '';
    }

    tela.value += valor;
    atualizarPlaceholder();
}

function limpar() {
    tela.value = '';
    atualizarPlaceholder();
}

function deletar() {
    tela.value = tela.value.slice(0, -1);
    atualizarPlaceholder();
}

function calcular() {
    try {
        let expressao = tela.value
            .replace(/x/g, '*')                 // x → *
            .replace(/(\d+)%/g, '($1/100)');    // 50% → (50/100)

        tela.value = eval(expressao);
    } catch (e) {
        tela.value = 'Error';
    }
    atualizarPlaceholder();
}


atualizarPlaceholder();
