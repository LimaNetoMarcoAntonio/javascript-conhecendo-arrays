// 2- Crie um programa em Node.js que inicie com um array cinco elementos e atribua um novo valor para a primeira posição (índice 0) desse array. Em seguida, exiba o array antes e depois da alteração.

// Inicializa o array com cinco elementos
const array = [0, 1, 2, 3, 4];

// Exibindo o valor antes da mudança
console.log(`Array antes da mudança: ${array}`);

// Atribui um novo valor à primeira posição
array[0] = 10;

console.log(`Array depois da mudança: ${array}`);