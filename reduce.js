// Limpar console
console.clear();

// Declarando arrays
const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7]
const salaJava = [6, 5, 8, 9, 5, 6]
const salaPython = [7, 3.5, 8, 9.5]

// Função que calcula a média de uma lista de notas
function calculaMedia(listaDeNotas){
    // Reduz a lista de notas a um único valor: a soma das notas
    const somaDasNotas = listaDeNotas.reduce((acumulador, nota) => acumulador + nota, 0);
    
    // Calcula a média dividindo a soma pelo número de notas
    const media = somaDasNotas / listaDeNotas.length;
    return media; // Retorna a média calculada
}

// Exibe a média das notas de cada sala
console.log(calculaMedia(salaJS)); // Média das notas de JavaScript
console.log(calculaMedia(salaJava)); // Média das notas de Java
console.log(calculaMedia(salaPython)); // Média das notas de Python

