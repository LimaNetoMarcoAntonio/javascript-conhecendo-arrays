// Limpa o console antes de executar o programa
console.clear();

// Crie uma lista bidimensional com 3 linhas e 3 colunas, onde cada elemento seja uma matriz 3x3 com valores iniciando em 1 e aumentando em 1 a cada elemento.

const listaBidimensional = [];

// Adicionando os valores à lista bidimensional
for (let i = 0; i < 3; i++) {
    // Cria uma nova linha vazia
    const linha = [];
    for (let j = 0; j < 3; j++) {
        // Calcula o valor a ser inserido
        const valor = i * 3 + j + 1;
        linha.push(valor);
    }
    // Adiciona a linha completa na lista
    listaBidimensional.push(linha);
}

// Função para exibir a lista
const exibeLista = () => {
    console.log(`Lista:`);
    listaBidimensional.forEach(linha => { // Para cada linha da lista bidimensional, exibe o valor da linha
        console.log(linha);
    });
};

// Exibindo a lista
exibeLista();

// Mostrando o valor da linha 2, coluna 3
console.log(`
Linha 2, coluna 3: ${listaBidimensional[1][2]}`);

// Adicionando 15 na linha 3 coluna 2
listaBidimensional[2][1] = 15;

// Mostrando o resultado final
console.log(`
Substituindo o valor da linha 3, coluna 2 por 15
`);

// Exibindo a lista final
exibeLista();