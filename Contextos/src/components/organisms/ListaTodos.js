import React from "react";
import { useTodos } from "../../contexts/use-todos";
import { ItemTodo } from "../molecules/ItemTodo";
import { InformacionTodo } from "./InformacionTodo";

export const ListaTodos = () => {
  const { todos, cargandoTodos, obtenerTodos, todoActual } = useTodos();

  React.useEffect(() => {
    obtenerTodos();
  }, [obtenerTodos]);

  if (cargandoTodos) {
    return <p>Cargando lista...</p>;
  }

  if (todoActual) {
    return <InformacionTodo />;
  }

  return (
    <ul>
      {todos.map((todo) => (
        <ItemTodo key={todo.id} id={todo.id} title={todo.title} />
      ))}
    </ul>
  );
};
