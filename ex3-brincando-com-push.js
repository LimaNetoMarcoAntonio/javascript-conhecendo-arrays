// 3- Crie um array vazio chamado meuArray e adicione 3 números inteiros de sua escolha utilizando o método push(). Imprima no console os itens presentes no array para verificar se os números foram adicionados. Em seguida, substitua o primeiro elemento do array (índice 0) pelo dobro do seu valor atual. Imprima no console o array atualizado para verificar a mudança.

// Criando o array vazio
const meuArray = [];

// Adicionando números ao array
meuArray.push(10, 20, 30);

// Imprimindo o array inicial
console.log(`Array inicial: ${meuArray.join(`, `)}`);

// Substituindo o primeiro elemento pelo dobro do seu valor atual
meuArray[0] = meuArray[0] * 2;

// Imprimindo o array atualizado
console.log(`Array atualizado: ${meuArray.join(`, `)}`);