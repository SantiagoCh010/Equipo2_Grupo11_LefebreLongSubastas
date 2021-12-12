import DatosSubasta from './DatosSubasta';

function CrearSubasta () {
    return (
        <div>
            <h3 className="text-center" >CREACIÓN DE SUBASTAS</h3>
                <DatosSubasta />
                <div className="text-center">
                    <button type="submit" className="btn btn-primary">Crear Subasta</button>
                    <button type="submit" className="btn btn-secondary">Atrás</button>
                </div>

        </div>
        
    )
}

export default CrearSubasta;
                