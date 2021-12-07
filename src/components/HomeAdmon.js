import React, { Component } from "react";
import { Card } from "react-bootstrap";

import Carrusel from "./Carrusel";

export default class HomeAdmon extends Component {
  render() {
    return (
      <div>
        <div>
          <Carrusel />
        </div>
        <div className="row text-center">
          <div className="col">
            <Card>
              <Card.Body>Gestión de subastas</Card.Body>
            </Card>
          </div>
          <div className="col">
            <Card>
              <Card.Body>Gestión de informes</Card.Body>
            </Card>
          </div>
          <div className="col">
            <Card>
              <Card.Body>Gestión de usuarios</Card.Body>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}
