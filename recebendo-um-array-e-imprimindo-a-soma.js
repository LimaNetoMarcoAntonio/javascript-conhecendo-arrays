// Limpa o console antes de executar o programa
console.clear();

// Função que recebe um array e retorna a soma de seus elementos
function somarElementos(array) {
    // Inicializa a variável soma com 0
    let soma = 0;
    // Itera sobre o array para somar seus elementos
    for (let i = 0; i < array.length; i++) {
        // Soma o elemento atual ao total
        soma += array[i];
    }
    // Retorna o total da soma
    return soma;
}

// Exemplo de uso da função
console.log(somarElementos([1, 2, 3, 5, 6, 4]));