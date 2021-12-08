import React, { Component } from "react";
import { Card } from "react-bootstrap";

import Carrusel from "./Carrusel";

export default class GestionUsuarios extends Component {
  render() {
    return (
      <div>
        <div>
          <Carrusel />
        </div>
        <Card>
            <Card.Body>
                      <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Apellidos</th>
                <th scope="col"># Documento</th>
                <th scope="col">F. Nacimiento</th>
                <th scope="col">Email</th>
                <th scope="col">Usuario</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Juan</td>
                <td>Dominguez</td>
                <td>102564871</td>
                <td>2000/01/30</td>
                <td>juan@dominio1.com</td>
                <td>juan.dominguez</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Carlos</td>
                <td>Perez</td>
                <td>102564877</td>
                <td>1993/03/30</td>
                <td>carlos@dominio1.com</td>
                <td>carlos.perez</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Laura</td>
                <td>Juarez</td>
                <td>102566661</td>
                <td>1998/06/15</td>
                <td>laura@dominio1.com</td>
                <td>laura.juarez</td>
              </tr>
            </tbody>
          </table>
        
        <div className="row text-center">
          <div className="col">
            <button className="btn btn-info">Editar</button>
          </div>
          <div className="col">
            <button className="btn btn-danger">Eliminar</button>
          </div>
          <div className="col">
            <button className="btn btn-secondary">Atras</button>
          </div>
        </div>
        </Card.Body>
          </Card>
      </div>
    );
  }
}
