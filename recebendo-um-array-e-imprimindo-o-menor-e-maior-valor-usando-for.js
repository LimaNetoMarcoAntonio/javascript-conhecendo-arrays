// Limpa o console antes de executar o programa
console.clear();

// Função que recebe um array e exibe o maior e menor valor
function exibeMaiorEMenorNumero(array) {
    // Inicializa as variáveis com o primeiro elemento do array
    let maiorNumero = array[0];
    let menorNumero = array[0];
    // Itera sobre o array para encontrar o maior e menor valor
    for (let i = 0; i < array.length; i++) {
        // Verifica se o elemento atual é maior que o maior número
        if (array[i] > maiorNumero) {
            // Atualiza o maior número
            maiorNumero = array[i];
        }
        // Verifica se o elemento atual é menor que o menor número
        if (array[i] < menorNumero) {
            // Atualiza o menor número
            menorNumero = array[i];
        }
    }
    // Exibe o resultado formatado
    console.log(`O maior número é ${maiorNumero} e o menor número é ${menorNumero}`);
}

// Exemplo de uso da função
exibeMaiorEMenorNumero([1, 2, 3, 4, 5]);
