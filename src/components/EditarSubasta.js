import DatosSubasta from './DatosSubasta';

function EditarSubasta () {
    return (
        <div>
            <h3 className="text-center property mt-4 mb-3" >EDICIÓN DE SUBASTAS</h3>
                <DatosSubasta />
                <div className="text-center">
                    <button type="submit" className="btn btn-primary property mx-2">Editar Subasta</button>
                    <button type="submit" className="btn btn-secondary">Atrás</button>
                </div>
        </div>
        
    )
}

export default EditarSubasta;
                
