import Prueba from "./Prueba";
import { PruebaFuncion } from "./PruebaFuncion";

function App() {
  const nombre = "Juan";
  const fechaActual = new Date();
  const listaEstudiantes = [
    {
      nombre: "Juan",
      edad: 20,
    },
    {
      nombre: "Pedro",
      edad: 30,
    },
    {
      nombre: "Maria",
      edad: 40,
    },
  ];

  const sacarNumeroAleatorio = () => {
    return Math.random();
  };

  const manejarClick = () => {
    console.log("Hola");
  };

  return (
    <div>
      <PruebaFuncion />
      {/* Javascript no se queja por la prop */}
      <Prueba apellido="Luis Cascante" />

      <ul>
        {listaEstudiantes.map((estudiante) => (
          <li>
            <p>Nombre: {estudiante.nombre}</p>
            <p>Edad: {estudiante.edad}</p>
          </li>
        ))}
      </ul>
      <button onClick={manejarClick}>Click me!</button>
    </div>
  );
}

export default App;
