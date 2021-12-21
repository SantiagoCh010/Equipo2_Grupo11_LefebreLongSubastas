import ItemSubasta from './ItemSubasta';


function MenuCategoria (props) {
  
  const subastas = props.subastas;
  
  const listaSubastas = subastas.map( s => 
    <ItemSubasta 
        key={s.id}
        eliminarSubasta={ props.eliminarSubasta } 
        {...s}
        />
  );

  return (
    <div className="row shadow p-3 mb-5 bg-body rounded property mx-4">
      <div className="col-sm-3 property my-4 ">
        <div className="card text-center">
          <div>
            <div className="card-header property py-3">Categorías</div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item property py-3">Automóviles</li>
              <li className="list-group-item property py-3">Motos</li>
              <li className="list-group-item property py-3">Camiones</li>
              <li className="list-group-item property py-3">Buses</li>
            </ul>
          </div>
        </div>
        </div>
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
                      { listaSubastas }
                    </tbody>
                </table>
            </div>
        </div>
      </div>

    
  )
}


export default MenuCategoria;
