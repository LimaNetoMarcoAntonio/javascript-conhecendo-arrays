// 8- Dado o array frutas contendo frutas que desejamos comprar na feira:
// const frutas = ['Maçã', 'Banana', 'Laranja', 'Limão', 'Abacaxi']
// Utilize o método splice para remover as frutas no índice 2 e 3 e, em seguida, adicione as frutas 'Kiwi' e 'Pêssego' nesses mesmos índices.

// Criando o array frutas
const frutas = ['Maçã', 'Banana', 'Laranja', 'Limão', 'Abacaxi'];

// Utilizando o método splice para remover as frutas no índice 2 e 3 e, em seguida, adicione as frutas 'Kiwi' e 'Pêssego' nesses mesmos índices.
frutas.splice(2, 2,'Kiwi','Pêssego');

// Exibindo o array frutas
console.log(frutas);