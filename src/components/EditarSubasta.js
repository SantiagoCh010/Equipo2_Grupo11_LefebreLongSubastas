import DatosSubasta from './DatosSubasta';

function EditarSubasta () {
    return (
        <div>
            <h3 className="text-center" >EDICIÓN DE SUBASTAS</h3>
                <DatosSubasta />
                <div className="text-center">
                    <button type="submit" className="btn btn-primary">Editar Subasta</button>
                    <button type="submit" className="btn btn-secondary">Atrás</button>
                </div>
        </div>
        
    )
}

export default EditarSubasta;
                