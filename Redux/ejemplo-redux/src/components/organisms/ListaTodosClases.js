import React, { Component } from "react";
import { connect } from "react-redux";
import { obtenerTodos } from "../../store/actions/todo-actions";

class ListaTodosClases extends Component {
  componentDidMount() {
    this.props.obtenerTodos();
  }

  render() {
    if (this.props.cargandoTodos) {
      return <div>Cargando...</div>;
    }

    return (
      <ul>
        {this.props.todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todoReducer.todos,
    cargandoTodos: state.todoReducer.cargandoTodos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    obtenerTodos: () => dispatch(obtenerTodos()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListaTodosClases);
