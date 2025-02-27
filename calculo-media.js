const notas = [];

// Adiciona as notas ao array
notas.push(5, 5, 5, 10, 10);

// Remove nota do array
// notas.pop();

console.log(notas);

const media = (notas) => notas.reduce((soma, nota) => soma + nota, 0) / notas.length; // O reduce é um método usado para reduzir um array a um único valor. Ele percorre cada elemento do array e acumula um resultado, que pode ser um número, uma string, um objeto, ou até mesmo outro array.

const calcularMedia = (notas) => {
    const soma = notas.reduce((soma, nota) => soma + nota, 0);
    const media = soma / notas.length;
    return media;
}

// Chama a função passando o array "notas" como argumento
console.log(`A média das notas é: ${media(notas).toFixed(2)}`);
console.log(`A média das notas é: ${calcularMedia(notas).toFixed(2)}`);