
function ItemSubasta (props) {

    const onEliminarSubasta = function (e) {
        e.preventDefault();
        props.eliminarSubasta(props.id);
    }

     
    return (
        <tr >
            <th scope="row" >
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="radioNoLabel" 
                    id="radioNoLabel1" value="" aria-label="..."/>
                </div>
            </th>
            <td>{ props.id }</td>
            <td>{ props.categoria }</td>
            <td>{ props.valorPuja }</td>
            <td>
                <button type="button" className="btn btn-success btn-sm property px-3 mr-3">Editar</button>
                <button type="button" onClick={onEliminarSubasta} className="btn btn-danger btn-sm property me-2">Eliminar</button>
            </td>
        </tr>
    )
}

export default ItemSubasta; 