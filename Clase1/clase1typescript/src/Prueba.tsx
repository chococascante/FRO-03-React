import React, { Component } from "react";

/**
 * 1. Etapa Mouting
 *  1.1 Constructor
 */

interface State {
  apellido: string;
  nombre: string;
}

interface Props {}

export default class Prueba extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    console.log("Estoy en el constructor");
    this.state = {
      apellido: "",
      nombre: "",
    };
  }

  componentDidMount() {
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
