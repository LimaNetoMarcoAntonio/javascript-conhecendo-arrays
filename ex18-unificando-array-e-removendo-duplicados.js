
// Limpa o console antes de executar o programa
console.clear();

// Define duas listas de cores
const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho']; // Lista de cores 1

const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul']; // Lista de cores 2

// Unifica as duas listas e remove duplicatas usando Set
const listaUnificada = [...new Set([...coresLista1, ...coresLista2])];

// Exibe a lista unificada de cores únicas no console
console.log(listaUnificada);