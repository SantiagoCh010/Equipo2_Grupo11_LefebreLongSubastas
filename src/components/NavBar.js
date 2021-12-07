import logo from './img/Logo3.png';
import {Button, Navbar, Container, Nav, Form, FormControl} from 'react-bootstrap';


function NavBar() {
    return (  
  <Navbar  className="navbar navbar-dark bg-primary ">
  <Container fluid>
    <Navbar.Brand href="#" className= "pt-0 pb-0"><img  src={logo} style={{width: 170}} alt='Logo'/></Navbar.Brand>    
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0 ml-auto"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >  
             
      </Nav>
      <Form className="d-flex ml-auto mr-auto w-75 pr-0 pl-0">
        <FormControl
          type="search"
          placeholder="Buscar"          
          className=""
          aria-label="Search"
        />
        <Button variant="outline-success">Buscar</Button>
      </Form>
      <Navbar.Brand href="#">Login</Navbar.Brand>
      <Navbar.Brand href="#">Registrarse</Navbar.Brand>


    </Navbar.Collapse>
  </Container>
</Navbar> 
  
)}
export default NavBar;
