let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function clickConsole() {
    console.log('O botão foi clicado');
}
 
function clickAlerta() {
    alert('Eu amo JS!');
}

function clickPrompt() {
    let cidade = prompt('Digite o nome de uma cidade do Brasil');
    alert(`Estive em ${cidade} e lembrei de você!`);
}

function clickSoma() {
    let valor1 = prompt('Digite um valor');
    let valor2 = prompt('Digite mais um valor');
    let soma = valor1 + valor2;
    alert(`O resultado da soma é ${soma}`);
}