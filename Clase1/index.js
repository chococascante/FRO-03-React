// Let vs const
let nombre = "John";
nombre = "Luis";

nombre = "Manuel";

const apellido = "Gonzalez";

const listaEstudiantes = ["John", "Luis", "Manuel"];
listaEstudiantes.push("Maria");

listaEstudiantes[0] = "Brian";

const estudiante = {
  nombre: "John",
  apellido: "Gonzalez",
  edad: 25,
};

estudiante.nombre = "Brian";

// Var vs let
function run() {
  var foo = "Foo";
  let bar = "Bar";

  console.log(foo, bar); // Foo Bar

  {
    var moo = "Mooo";
    let bar = "Bazz";
    console.log(moo, baz); // Mooo Bazz
  }

  console.log(moo); // Mooo
  // console.log(baz); // ReferenceError
}

run();
