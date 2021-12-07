import { Button, Col, Form, Row } from 'react-bootstrap';

function RegistroUsuario() {
    return (
        <div class="container">
            <Form>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridNombre">
                        <Form.Label>Nombres: </Form.Label>
                        <Form.Control placeholder="Escribe tus nombres" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridApellido">
                        <Form.Label>Apellidos: </Form.Label>
                        <Form.Control placeholder="Escribe tus apellidos" />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridSexo">
                    <Form.Label>Sexo: </Form.Label>
                    <Form.Select defaultValue="Selecciona...">
                        <option>Masculino</option>
                        <option>Femenino</option>
                        <option>Otro</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridFechaNacimiento">
                    <Form.Label>Fecha de nacimiento: </Form.Label>
                    <Form.Control type="date" placeholder="Password" />
                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Correo electrónico: </Form.Label>
                    <Form.Control type="email" placeholder="ejemplo@gmail.com" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicUsuario">
                    <Form.Label>Nombre de usuario: </Form.Label>
                    <Form.Control placeholder="Usuario" />
                    <Form.Text className="text-muted">
                        Tu nombre de usuario debe tener al menos 8 letras </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridContraseña">
                    <Form.Label>Contraseña: </Form.Label>
                    <Form.Control type="password" placeholder="*******" />
                    <Form.Text className="text-muted">
                        Debes tener al menos un número y una minúscula  </Form.Text>
                </Form.Group>


                <Form.Group className="mb-3" controlId="formGridConfirmarContraseña">
                    <Form.Label>Confirmar Contraseña: </Form.Label>
                    <Form.Control type="password" placeholder="*******" />

                </Form.Group>
                <Row className="mb-3">
                    <Button variant="primary" type="submit" as={Col}>
                        Registrarse
                    </Button>
                    <Button variant="primary" as={Col}>
                        Atras
                    </Button>
                </Row>
            </Form>
        </div>

    )
}
export default RegistroUsuario;