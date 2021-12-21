import slide1 from './img/slide1.jpg';
import slide3 from './img/slide3.jpg';
import slide7 from './img/slide7.jpg';

function EliminarSubasta () {
    return (
        <div>
        <div class="card mb-5 property m-5" Style="width: 90%">
            <div class="row align-items-center">
              <div class="col-md-4 property ms-3">
                <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                      <div class="carousel-item" >
                        <img src={ slide3 } class="d-block w-90" alt="carros" Style="max-width: 400px"/>
                      </div>
                      <div class="carousel-item active">
                        <img src={ slide1 } class="d-block w-80" alt="camiones" Style="max-width: 400px"/>
                      </div>
                      <div class="carousel-item">
                        <img src={ slide7 } class="d-block w-100" alt="motos" Style="max-width: 400px"/>
                      </div>
                    </div>
                  </div>
              </div>
                <div className="col-md-7">
                    <div className="card-body">
                        <h5 className="card-title">Nombre del Vehículo: Mazda</h5>
                        <div className="property mb-2">
                            <label name="nombre" className="col-sm-4 col-form-label" >Puja Actual:</label>
                            <input className="form-control" type="text" value="$54.200.000" aria-label="readonly input example" readonly />
                        </div>
                        <div className="property mb-3">
                            <label>Tiempo para cierre:</label>
                            <input className="form-control" type="text" value="1 día, 17 horas, 32 min" aria-label="readonly input example" readonly />
                        </div>
                        <div className="property mb-3">
                            <label for="formGroupExampleInput" className="form-label property mb-0">Razón de la cancelación: </label>
                            <div className="form-floating">
                                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" Style="height: 100px"></textarea>
                                <label for="floatingTextarea2">Escriba una breve descripción para la cancelación de la subasta</label>
                            </div>
                        </div>
                        <div className="text-center property mt-3">
                            <button type="submit" className="btn btn-danger property mx-2">Eliminar</button>
                            <button type="submit" className="btn btn-secondary">Atrás</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default EliminarSubasta;