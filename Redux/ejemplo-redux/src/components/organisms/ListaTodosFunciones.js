import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { obtenerTodos } from "../../store/actions/todo-actions";

export const ListaTodosFunciones = () => {
  const todos = useSelector((state) => state.todoReducer.todos);
  const cargandoTodos = useSelector((state) => state.todoReducer.cargandoTodos);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(obtenerTodos());
  }, [dispatch]);

  if (cargandoTodos) {
    return <div>Cargando...</div>;
  }

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
};
