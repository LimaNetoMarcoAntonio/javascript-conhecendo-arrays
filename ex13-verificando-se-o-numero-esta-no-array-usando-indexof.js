// 13- Você recebeu um array numeros contendo valores numéricos. Crie um programa que verifique se um número específico está presente nesse array. Se estiver, o programa deve retornar a posição (índice) desse número. Caso contrário, se o número não estiver presente, o programa deve retornar "-1".

// Limpa o console antes de executar o programa
console.clear();

// Cria um array com os números 1, 2, 3, 4, 5
const numeros = [1, 2, 3, 4, 5];

const numeroBuscado = 3;

const indice = numeros.indexOf(numeroBuscado);

if (indice !== -1) { // Se o número foi encontrado
    console.log(`O número ${numeroBuscado} está presente no array e sua posição é ${indice}`); // Imprime o índice
} else { // Caso contrário
    console.log(-1); // Imprime -1
}
