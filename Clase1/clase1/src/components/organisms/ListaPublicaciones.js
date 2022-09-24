import React from "react";
import { ItemPublicacion } from "../molecules/ItemPublicacion";

export const ListaPublicaciones = () => {
  const [cargando, setCargando] = React.useState(true);
  const [publicaciones, setPublicaciones] = React.useState(undefined);
  const [usuarios, setUsuarios] = React.useState(undefined);

  const onChange = (event, indiceElemento) => {
    const value = event.target.value;

    const nuevaLista2 = [...publicaciones];
    nuevaLista2[indiceElemento].body = value;

    setPublicaciones(nuevaLista2);
  };

  async function getData() {
    try {
      const horaInicial = new Date();

      const [respuestaPublicaciones, respuestaUsuarios] = await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/posts"),
        fetch("https://jsonplaceholder.typicode.com/users"),
      ]);

      const [datosPublicaciones, datosUsuarios] = await Promise.all([
        respuestaPublicaciones.json(),
        respuestaUsuarios.json(),
      ]);

      setPublicaciones(datosPublicaciones);
      setUsuarios(datosUsuarios);

      const horaFinal = new Date();
      const tiempo = horaFinal - horaInicial;
      console.log(`Tiempo de respuesta: ${tiempo} ms`);

      setTimeout(() => {
        setCargando(false);
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  }

  const getUsuarioPorId = (id) => {
    return usuarios.find((usuario) => usuario.id === id);
  };

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {cargando ? (
        <p>Estoy cargando...</p>
      ) : (
        <ol>
          {publicaciones.map((publicacion, index) => (
            <ItemPublicacion
              key={publicacion.id}
              publicacion={publicacion}
              usuario={getUsuarioPorId(publicacion.userId)}
              onChange={(event) => onChange(event, index)}
            />
          ))}
        </ol>
      )}
    </div>
  );
};
