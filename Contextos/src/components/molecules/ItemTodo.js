import React from "react";
import { useTodos } from "../../contexts/use-todos";

export const ItemTodo = ({ id, title }) => {
  const { obtenerTodoPorId } = useTodos();

  const manejarClick = () => {
    try {
      obtenerTodoPorId(id);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <li onClick={manejarClick} key={id}>
      {title}
    </li>
  );
};
