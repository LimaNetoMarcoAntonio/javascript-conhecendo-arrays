// Limpa o console antes de executar o programa
console.clear();

// Definindo o array de números
const numeros = [5, 10, 10, 5]

// Inicializando a variável somaNumeros com 0
let somaNumeros = 0
// Loop para somar os números do array
for (let i = 0; i < numeros.length; i++) {
    somaNumeros += numeros[i]
}

// Calcula a média dos números do array
let media = somaNumeros / numeros.length

// Exibe a média dos números do array
console.log(media)