import React from "react";
import { IPublicacion } from "../../models/IPublicacion";
import { IUsuario } from "../../models/IUsuario";

export interface ItemPublicacionProps {
  publicacion: IPublicacion;
  usuario?: IUsuario;
  onChange: any;
}

export const ItemPublicacion: React.FC<ItemPublicacionProps> = ({
  publicacion,
  usuario,
  onChange,
}) => {
  return (
    <li>
      <div>{usuario && <p>{usuario.name}</p>}</div>
      <div>
        <h3>{publicacion.title}</h3>
        <input value={publicacion.body} onChange={onChange} />
      </div>
    </li>
  );
};
