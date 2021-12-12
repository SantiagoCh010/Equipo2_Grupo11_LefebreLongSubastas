import { Form } from 'react-bootstrap';

function MenuBusqueda () {
    return (
        <div>
            <div className="property m-2 p-3" >
                <Form className="d-flex property mb-4">
                    <input className="form-control ms-4 me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success property me-4" type="submit">Search</button>
                    <div>
                        <button className="btn btn-primary btn-sm" type="submit">Nueva Subasta</button>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default MenuBusqueda;