// While
let numeroASumar = 1;

let resultado = 0; // aquí vamos a guardar el resultado de la suma

while (numeroASumar <= 5) {
  resultado = resultado + numeroASumar;
  numeroASumar++;
}

console.log(resultado);
console.log(numeroASumar);

// For

let resultadoFor = 0; // aquí guardamos el resultado del a suma

// Podemos ver que las expresiones están separadas por ;
// Primero la inicial, luego la condicional y por último  actualización
for (let i = 1; i <= 5; i++) {
  resultadoFor = resultadoFor + i;
}

console.log(resultadoFor);
