// Limpa o console antes de executar o programa
console.clear();

// Função que recebe um array como parâmetro e imprime o índice e o elemento
function imprimirIndiceEElemento(array) {
    // Percorre o array usando for para ter acesso ao índice
    for (let i = 0; i < array.length; i++) {
        // Imprime uma mensagem formatada com o índice e o elemento
        console.log(`Índice ${i}: Elemento ${array[i]}`);
    }
}

// Exemplo de uso da função com um array de números ímpares
imprimirIndiceEElemento([1, 3, 5, 7, 9]);

