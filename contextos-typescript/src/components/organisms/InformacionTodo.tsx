import React from "react";
import { useTodos } from "../../contexts/use-todos";

export const InformacionTodo = () => {
  const { todoActual, setTodoActual } = useTodos();

  const manejarClick = () => {
    setTodoActual(undefined);
  };

  return (
    <div>
      <h2>{todoActual?.title}</h2>
      <p>{todoActual?.completed ? "Completado" : "Pendiente"}</p>
      <button onClick={manejarClick}>Atrás</button>
    </div>
  );
};
