// Limpa o console antes de executar o programa
console.clear();

// Definindo o array de números
const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14]

// Loop para verificar se cada número é par
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) { // Verifica se o número é par
        console.log(numeros[i]) // Exibe o número par
    }
}