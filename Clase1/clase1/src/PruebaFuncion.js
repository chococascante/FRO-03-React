import React from "react";

export const PruebaFuncion = () => {
  const [nombre, setNombre] = React.useState("");
  const [apellido, setApellido] = React.useState("");

  async function getTodos() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    console.log(data);
  }

  React.useEffect(() => {
    getTodos();
    setTimeout(() => {
      setNombre("Luis");
      setApellido("Cascante");
    }, 5000);
    console.log("Estoy en el componentDidMount F");
  }, []);

  console.log("Estoy en el render F");
  return <div>Mi nombre es: {nombre}</div>;
};

// export default PruebaFuncion;
