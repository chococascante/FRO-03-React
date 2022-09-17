const arreglo = [2, 3, 2];

// forEach
function imprimirNumero(num) {
  console.log(num);
}

function sumarUno(num) {
  return num + 1;
}

const resultadoForEach = arreglo.forEach((num) => num + 1);

const resultadoMap = arreglo.map((num) => num + 1);

console.log(resultadoForEach);
console.log(resultadoMap);

const valorFind = arreglo.findIndex((num) => num % 2 === 0);
const valorFilter = arreglo.filter((num) => num % 2 === 0);

console.log(valorFind);
console.log(valorFilter);
