
function TablaSubasta () {
    return (
        <div className="col-sm-9 property my-4">
            <div className="card text-center">
                <table className="table align-middle">
                    <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Id Subasta</th>
                        <th scope="col">Categoría</th>
                        <th scope="col">Valor Puja</th>
                        <th scope="col">Estado</th>
                    </tr>
                    </thead>
                    
                    <tbody>
                        <tr >
                            <th scope="row" >
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="radioNoLabel" 
                                    id="radioNoLabel1" value="" aria-label="..."/>
                                </div>
                            </th>
                            <td>A21-001</td>
                            <td>Camioneta Honda</td>
                            <td>$34.500.000</td>
                            <td>
                                <button type="button" className="btn btn-success btn-sm property px-3 mr-3">Editar</button>
                                <button type="button" className="btn btn-danger btn-sm property me-2">Eliminar</button>
                            </td>
                        </tr>

                        <tr>
                            <th scope="row">
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="radioNoLabel" 
                                    id="radioNoLabel1" value="" aria-label="..."/>
                                </div>
                            </th>
                            <td>B21-001</td>
                            <td>Bus</td>
                            <td>$115.000.000</td>
                            <td>
                                <button type="button" className="btn btn-success btn-sm property px-3 mr-3">Editar</button>
                                <button type="button" className="btn btn-danger btn-sm property me-2">Eliminar</button>
                            </td>
                        </tr>

                        <tr>
                            <th scope="row">
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="radioNoLabel" 
                                    id="radioNoLabel1" value="" aria-label="..."/>
                                </div>
                            </th>
                            <td>C21-001</td>
                            <td>Camión JAC</td>
                            <td>$63.200.000</td>
                            <td>
                                <button type="button" className="btn btn-success btn-sm property px-3 mr-3">Editar</button>
                                <button type="button" className="btn btn-danger btn-sm property me-2">Eliminar</button>
                            </td>
                        </tr>

                        <tr>
                        <th scope="row">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="radioNoLabel" 
                                id="radioNoLabel1" value="" aria-label="..."/>
                            </div>
                        </th>
                        <td>C21-001</td>
                        <td>Camión Chevrolet</td>
                        <td>$79.000.000</td>
                        <td>
                            <button type="button" className="btn btn-success btn-sm property px-3 mr-3">Editar</button>
                            <button type="button" className="btn btn-danger btn-sm property me-2">Eliminar</button>
                        </td>
                        </tr>

                        <tr>
                        <th scope="row">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="radioNoLabel" 
                                id="radioNoLabel1" value="" aria-label="..."/>
                            </div>
                        </th>
                        <td>M21-001</td>
                        <td>Moto Bajaj</td>
                        <td>$4.100.000</td>
                        <td>
                            <button type="button" className="btn btn-success btn-sm property px-3 mr-3">Editar</button>
                            <button type="button" className="btn btn-danger btn-sm property me-2">Eliminar</button>
                        </td>
                        </tr>

                        <tr>
                        <th scope="row">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="radioNoLabel" 
                                id="radioNoLabel1" value="" aria-label="..."/>
                            </div>
                        </th>
                        <td>A21-001</td>
                        <td>Spark GT</td>
                        <td>$25.200.000</td>
                        <td>
                            <button type="button" className="btn btn-success btn-sm property px-3 mr-3">Editar</button>
                            <button type="button" className="btn btn-danger btn-sm property me-2">Eliminar</button>
                        </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TablaSubasta;