import { ACTUALIZAR_TODOS, ACTUALIZAR_CARGANDO_TODOS } from "../actions";

const initialState = {
  todos: [],
  cargandoTodos: false,
};

export const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTUALIZAR_TODOS:
      return {
        ...state,
        todos: payload,
      };

    case ACTUALIZAR_CARGANDO_TODOS:
      return {
        ...state,
        cargandoTodos: payload,
      };

    default:
      return state;
  }
};
