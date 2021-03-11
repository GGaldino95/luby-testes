// Luby - Teste de Raciocinio Logico

// 1) Implemente um método que crie um novo array baseado nos valores passados.
// Entradas do método: (3, a)
// Resultado do método: ['a', 'a', 'a']

const createArray = (repeatCount, value) => {
  const arrayOutput = [];
  for (let i = 0; i < repeatCount; i += 1) {
    arrayOutput.push(value);
  }

  return arrayOutput;
};
console.log(createArray(3, 'a'));


// 2) Implemente um método que inverta um array, não utilize métodos nativos do array.
// Entrada do método: ([1,2,3,4])
// Resultado do método: [4,3,2,1]

const invertArray = (array) => {
  const arrayOutput = [];
  for (let i = array.length; i > 0; i -= 1) {
    arrayOutput.push(array[i - 1]);
  }

  return arrayOutput;
};
console.log(invertArray([1, 2, 3, 4]));


// 3) Implemente um método que limpe os itens desnecessários de um array (false, undefined, strings vazias, zero, null).
// Entrada do método: ([1,2,'', undefined])
// Resultado do método: [1,2]

const cleanArray = (array) => {
  const arrayOutput = [];
  for (let i = 0; i < array.length; i += 1) {
    if (typeof array[i] === 'number')
      arrayOutput.push(array[i]);
  }

  return arrayOutput;
}
console.log(cleanArray([1, 2, '', undefined]));


// 4) Implemente um método que a partir de um array de arrays, converta em um objeto com chave e valor.
// Entrada do método: ([["c",2],["d",4]])
// Resultado do métdodo: {c:2, d:4}

const arrayToObject = (array) => Object.fromEntries(array);
console.log(arrayToObject([['c', 2], ['d', 4]]));


// 5) Implemente um método que retorne um array, sem os itens passados por parâmetro depois do array de entrada.
// Entrada do método: ([5,4,3,2,5], 5,3)
// Resultado do método: [4,2]

const filterArray = (array, ...filter) => {
  return array.filter(currentValue => !filter.some(currentFilter => currentFilter === currentValue));
}
console.log(filterArray([5, 4, 3, 2, 5], 5, 3));


// 6) Implemente um método que retorne um array, sem valores duplicados.
// Entrada do método: ([1,2,3,3,2,4,5,4,7,3])
// Resultado do método: [1,2,3,4,5,7]

const removeDuplicates = (array) => [...new Set(array)];
// Referencia: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
// O Set juntamente do spread operator retorna apenas valores unicos contidos no array passado por parametro.
console.log(removeDuplicates([1, 2, 3, 3, 2, 4, 5, 4, 7, 3]));


// 7) Implemente um método que compare a igualdade de dois arrays e retorne um valor booleano.
// Entrada do método: ([1,2,3,4],[1,2,3,4])
// Resultado do método: true

const compareArrays = (array1, array2) => {
  return array1.every((currentValue, index) => currentValue === array2[index]);
}
console.log(compareArrays([1, 2, 3, 4], [1, 2, 3, 4]));


// 8) Implemente um método que remova os aninhamentos de um array de arrays para um array unico.
// Entrada do método: ([1, 2, [3], [4, 5]])
// Resultado do método: [1, 2, 3, 4, 5]

const unnestArray = (array) => array.flat();
// Referencia: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
// O .flat() desaninha todos os elementos contidos no array desejado.
console.log(unnestArray([1, 2, [3], [4, 5]]));


// 9) Implemente um método divida um array por uma quantidade passada por parâmetro.
// Entrada do método: ([1, 2, 3, 4, 5], 2)
// Resultado do método: [[1, 2], [3, 4], [5]]

const divideArray = (array, divider) => {
  const arrayOutput = [];
  for (let i = 0; i < array.length; i += divider) {
    let arrayChunk = [];

    for (let j = i; j < (i + divider); j += 1) 
      if (array[j] !== undefined) { arrayChunk.push(array[j]); }

    arrayOutput.push(arrayChunk);
  }

  return arrayOutput;
}
console.log(divideArray([1, 2, 3, 4, 5], 2));


// 10) Implemente um método que encontre os valores comuns entre dois arrays.
// Entrada do método: ([6, 8], [8, 9])
// Resultado do método: [8]

const findMatchingValues = (array1, array2) => {
  return array1.filter(currentValue => array2.some(currentValue2 => currentValue2 === currentValue));
}
console.log(findMatchingValues([6, 8], [8, 9]));
