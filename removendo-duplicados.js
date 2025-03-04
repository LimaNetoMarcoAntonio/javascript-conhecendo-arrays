// Cria um array com nomes, incluindo duplicatas
const nomes = ['Ana', 'Clara', 'Maria', 'Maria', 'João', 'João', 'João'];

// Utiliza um Set para remover duplicatas e cria um novo array com os nomes únicos
// O Set é uma estrutura de dados que não permite valores duplicados
// Ao espalhar o Set em um novo array, obtemos apenas os nomes únicos
const listaNomesAtualizados = [... new Set(nomes)];

// Exibe a lista de nomes atualizados no console
// O console.log imprime o array resultante no console para visualização
console.log(listaNomesAtualizados);
