import React, { Component } from "react";

/**
 * 1. Etapa Mouting
 *  1.1 Constructor
 */

export default class Prueba extends Component {
  constructor() {
    super();
    console.log("Estoy en el constructor");
    this.state = {
      apellido: "",
      nombre: "",
    };
  }

  async componentDidMount() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    //setState({data})
    setTimeout(() => {
      this.setState({ nombre: "Luis", apellido: "Cascante" });
    }, 5000);
    console.log("Estoy en el componentDidMount");
  }

  render() {
    console.log("Estoy en el render");
    return <div>Mi nombre es: {this.state.nombre}</div>;
  }
}
