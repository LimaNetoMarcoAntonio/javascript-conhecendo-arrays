// Limpa o console antes de executar o programa
console.clear();

// Definindo as notas dos alunos
const notas1 = [10, 6.5, 8, 7.5]
const notas2 = [9, 6, 6]
const notas3 = [8.5, 9.5]
 
// Criando um array de arrays com as notas de cada aluno
const notasGerais = [notas1, notas2, notas3]
 
// Inicializando a média
let mediaGeral = 0
 
// Loop para calcular a média das notas de cada aluno
for (let i = 0; i < notasGerais.length; i++) {
  for (let j = 0; j < notasGerais[i].length; j++) {
    mediaGeral += notasGerais[i][j]/notasGerais[i].length;
  }
}
 
// Calculando a média de todas as notas
mediaGeral = mediaGeral/notasGerais.length
 
// Exibindo a média de todas as notas
console.log(mediaGeral)