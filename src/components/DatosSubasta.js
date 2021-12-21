import { Form } from 'react-bootstrap';

function DatosSubasta () {
    return (
        <div>
            <Form >
                <div className="border shadow property m-3 p-3" >
                    <div className="row mb-3" bordercolor="blue">
                        <label name="id" className="col-sm-2 col-form-label" >Id Subasta:</label>
                        <input type="text" className="col-sm-3" name="id" placeholder="Id Subasta"/>
                        <label name="precio" className="col-sm-2 col-form-label">Precio base:</label>
                        <input type="number" className="col-sm-4" name="valorPuja" placeholder="Precio base"/>
                    </div>
                    <div className="row mb-3" bordercolor="blue">
                        <label name="IdSubasta" className="col-sm-2 col-form-label" >Fecha inicial</label>
                        <input type="date" className="col-sm-3" name="fechaInicio"/>
                        <label name="IdSubasta" className="col-sm-2 col-form-label">Fecha Final</label>
                        <input type="date" className="col-sm-4" name="fechaFin"/>
                    </div>
                    <div className="row mb-3" bordercolor="blue">
                        <label name="nombre" className="col-sm-4 col-form-label" >Nombre del vehículo:</label>
                        <input type="text" className="col-sm-7" name="nombre" placeholder="Nombre del vehículo" />
                    </div>
                    <div className="mb-3">
                        <label for="formGroupExampleInput" className="form-label">Información / Descripción del vehículo: </label>
                        <textarea type="text" className="form-control" name="descripcion" placeholder="Agregue información del vehículo"></textarea>
                    </div>
                    <div className="mb-3">
                        <label for="formFileMultiple" className="form-label">Anexar fotos</label>
                        <input className="form-control" type="file" name="formFileMultiple" multiple/>
                    </div>
                </div>
            </Form>
        </div>
    )
}

export default DatosSubasta;
