// 1 - Criar uma função que exibe "Olá, mundo!" no console.
exibirOlaMundo();
function exibirOlaMundo() {
    console.log('Olá, mundo!');
}

// 2 - Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
exibirOlaNome('Alice Souza');
function exibirOlaNome(nome) {
    console.log(`Olá, ${nome}`);
}

// 3 - Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
console.log(dobro(24));
function dobro(numero){
    return numero * 2;
}

// 4 - Criar uma função que recebe três números como parâmetros e retorna a média deles.
console.log(media(10,80,56));
function media(params, params2, params3) {
    let soma = params + params2 + params3;
    return soma/3;
}