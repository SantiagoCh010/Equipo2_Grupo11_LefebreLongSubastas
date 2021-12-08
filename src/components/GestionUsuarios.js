import React, { Component } from "react";
import { Card, FormGroup } from "react-bootstrap";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import Carrusel from "./Carrusel";

export default class GestionUsuarios extends Component {
  state = { abiertoEditar: false,
   abiertoEliminar: false }
  openModalEditar = () => {
    this.setState({ abiertoEditar: !this.state.abiertoEditar });
  };
  openModalEliminar = () =>{
    this.setState({ abiertoEliminar: !this.state.abiertoEliminar });
  }
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
                  <th scope="col">Acciones</th>
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
                  <td>
                    <button
                      className="btn btn-info btn-sm"
                      onClick={this.openModalEditar}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-pencil-square"
                        viewBox="0 0 16 16"
                      >
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                        <path
                          fill-rule="evenodd"
                          d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                        />
                      </svg>
                    </button>{" "}
                    <button className="btn btn-danger btn-sm" onClick={this.openModalEliminar}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-trash"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                        <path
                          fill-rule="evenodd"
                          d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Carlos</td>
                  <td>Perez</td>
                  <td>102564877</td>
                  <td>1993/03/30</td>
                  <td>carlos@dominio1.com</td>
                  <td>carlos.perez</td>
                  <td>
                    <button className="btn btn-info btn-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-pencil-square"
                        viewBox="0 0 16 16"
                      >
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                        <path
                          fill-rule="evenodd"
                          d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                        />
                      </svg>
                    </button>{" "}
                    <button className="btn btn-danger btn-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-trash"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                        <path
                          fill-rule="evenodd"
                          d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Laura</td>
                  <td>Juarez</td>
                  <td>102566661</td>
                  <td>1998/06/15</td>
                  <td>laura@dominio1.com</td>
                  <td>laura.juarez</td>
                  <td>
                    <button className="btn btn-info btn-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-pencil-square"
                        viewBox="0 0 16 16"
                      >
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                        <path
                          fill-rule="evenodd"
                          d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                        />
                      </svg>
                    </button>{" "}
                    <button className="btn btn-danger btn-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-trash"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                        <path
                          fill-rule="evenodd"
                          d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="row text-center">
              <div className="col">
                <button className="btn btn-secondary">Atras</button>
              </div>
            </div>
          </Card.Body>
        </Card>
       
        <Modal isOpen={this.state.abiertoEditar}>
          <ModalHeader>CONFIRMACIÓN DE EDICIÓN</ModalHeader>
          <ModalBody>
            ¿Esta seguro que quiere editar la información correspondiente a este
            usuario? Los cambios realizados se guardaran de forma permanente.
            <FormGroup>
              <div className="input-group">
                
                <br />
                <textarea className="form-control" id="usuario" placeholder="Describa brevemente el motivo de la modificación:"></textarea>
              </div>
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="success" onClick={this.openModalEditar}>
              Guardar
            </Button>{" "}
            <Button color="secondary" onClick={this.openModalEditar}>
              Cerrar
            </Button>
          </ModalFooter>
        </Modal>

        <Modal isOpen={this.state.abiertoEliminar}>
          <ModalHeader>CONFIRMACIÓN DE ELIMINACIÓN</ModalHeader>
          <ModalBody>
          ¿Esta seguro que desea eliminar la información de este usuario? Los cambios realizados se guardaran de forma permanente.
            <FormGroup>
              <div className="input-group">
                
                <br />
                <textarea className="form-control" id="usuario" placeholder="Describa brevemente el motivo de la eliminación:"></textarea>
              </div>
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={this.openModalEliminar}>
              Eliminar
            </Button>{" "}
            <Button color="secondary" onClick={this.openModalEliminar}>
              Cerrar
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
