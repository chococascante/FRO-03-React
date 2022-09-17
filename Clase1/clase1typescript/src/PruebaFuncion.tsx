import React from "react";

interface State {
  nombre: string | undefined;
}

interface TareaPorHacer {
  titulo: string;
  descripcion?: string;
}

export const PruebaFuncion: React.FC = () => {
  const [nombre, setNombre] = React.useState<string | undefined>(undefined);
  const [apellido, setApellido] = React.useState<string>("");

  React.useEffect(() => {
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
