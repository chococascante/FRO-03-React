import React from "react";
import { IPublicacion } from "../../models/IPublicacion";
import { IUsuario } from "../../models/IUsuario";
import { ItemPublicacion } from "../molecules/ItemPublicacion";

export const ListaPublicaciones = () => {
  const [cargando, setCargando] = React.useState(true);
  const [publicaciones, setPublicaciones] = React.useState<
    IPublicacion[] | undefined
  >(undefined);
  const [usuarios, setUsuarios] = React.useState<IUsuario[] | undefined>(
    undefined
  );

  const onChange = (value: string, indiceElemento: number) => {
    if (publicaciones) {
      const nuevaLista = [...publicaciones];
      const publicacion = {
        ...nuevaLista[indiceElemento],
        body: value,
      };
      nuevaLista[indiceElemento] = publicacion;

      setPublicaciones(nuevaLista);
    }
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
      const tiempo = horaFinal.getTime() - horaInicial.getTime();
      console.log(`Tiempo de respuesta: ${tiempo} ms`);

      setCargando(false);
    } catch (error) {
      console.log(error);
    }
  }

  const getUsuarioPorId = (id: number) => {
    return usuarios?.find((usuario) => usuario.id === id);
  };

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <img src="https://via.placeholder.com/600/92c952" />
      {cargando ? (
        <p>Estoy cargando...</p>
      ) : (
        <ol>
          {/* Se puede castear a booleano? */}
          {publicaciones &&
            publicaciones.map((publicacion, index) => (
              <ItemPublicacion
                key={publicacion.id}
                publicacion={publicacion}
                usuario={getUsuarioPorId(publicacion.userId)}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  onChange(event.target.value, index)
                }
              />
            ))}
        </ol>
      )}
    </div>
  );
};
