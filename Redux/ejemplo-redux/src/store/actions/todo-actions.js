import { ACTUALIZAR_TODOS, ACTUALIZAR_CARGANDO_TODOS } from "./";

export const actualizarTodos = (payload) => ({
  type: ACTUALIZAR_TODOS,
  payload,
});

export const actualizarCargandoTodos = (payload) => ({
  type: ACTUALIZAR_CARGANDO_TODOS,
  payload,
});

export function obtenerTodos() {
  return async function (dispatch) {
    try {
      dispatch(actualizarCargandoTodos(true));
      const todoResponse = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );

      const todos = await todoResponse.json();

      setTimeout(() => {
        dispatch(actualizarTodos(todos));
        dispatch(actualizarCargandoTodos(false));
      }, [5000]);
    } catch (error) {
      console.error(error);
    }
  };
}

export const crearUsuario = (payload) => async (dispatch) => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const data = await response.json();
  } catch (error) {
    console.error(error);
  }
};
