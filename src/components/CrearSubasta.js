import DatosSubasta from './DatosSubasta';

function CrearSubasta () {
    return (
        <div>
            <h3 className="property mt-4 mb-3" >CREACIÓN DE SUBASTAS</h3>
                <DatosSubasta />
                <div className="text-center">
                    <button type="submit" className="btn btn-primary property mx-2">Crear Subasta</button>
                    <button type="submit" className="btn btn-secondary">Atrás</button>
                </div>

        </div>
        
    )
}

export default CrearSubasta;
                
