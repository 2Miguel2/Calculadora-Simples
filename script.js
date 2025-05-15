const tela = document.getElementById('tela');
const placeholder = document.getElementById('placeholder');

function atualizarPlaceholder() {
  placeholder.style.display = tela.value === '' ? 'block' : 'none';
}

function adicionar(valor) {
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
        tela.value = eval(tela.value);
    } catch (e) {
        tela.value = 'Erro';
    }
    atualizarPlaceholder();
}

atualizarPlaceholder();
