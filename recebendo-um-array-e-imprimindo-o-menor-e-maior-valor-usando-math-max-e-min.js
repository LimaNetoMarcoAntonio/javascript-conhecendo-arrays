// Limpa o console antes de executar o programa
console.clear();

// Função que recebe um array e exibe o maior e menor valor
function exibeMaiorEMenorNumero(array) {
    // Usa Math.max() com spread operator para encontrar o maior valor
    const maiorNumero = Math.max(...array); // ...array é o spread operator que descompacta o array em valores individuais
    // Usa Math.min() com spread operator para encontrar o menor valor 
    const menorNumero = Math.min(...array); // ...array é o spread operator que descompacta o array em valores individuais
    // Exibe o resultado formatado
    console.log(`O maior número é ${maiorNumero} e o menor número é ${menorNumero}`);
}

// Exemplo de uso da função
exibeMaiorEMenorNumero([1, 2, 3, 4, 5]);
