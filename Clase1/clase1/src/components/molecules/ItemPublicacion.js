import React from "react";

export const ItemPublicacion = ({ publicacion, usuario, onChange }) => {
  return (
    <li>
      <div>
        <p>{usuario.name}</p>
      </div>
      <div>
        <h3>{publicacion.title}</h3>
        <input value={publicacion.body} onChange={onChange} />
      </div>
    </li>
  );
};
