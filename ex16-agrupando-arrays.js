// 16- Faça uma função que aceite vários arrays como argumentos e retorne um único array contendo todos os elementos dos arrays fornecidos, utilizando Spread Operator.

// Função que aceita múltiplos arrays como argumentos
function agrupaArrays(...arrays) {
    // Utiliza o operador Spread para combinar todos os arrays em um único array
    return [...arrays];
}

// Teste da função agrupaArrays com três arrays diferentes
console.log(agrupaArrays([1, 2, 3], [4, 5, 6], [7, 8, 9]));


