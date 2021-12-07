import {Card} from 'react-bootstrap';

function Login(){
    return(
       <Card style={{ width: '30rem', height: '30rem' }} className="mt-3 ml-5 Primary shadow p-3 mb-5 bg-white rounded" border='success' bg='light' text='black'>
            <Card.Body>                
                <form>
                <div>
                    <h3 className="form-group pb-3 text-center">Ingresar a Lefebre Long Subastas</h3>
                </div>              
                
                <div className="form-group pb-3">
                    <label>Correo electronico</label>
                    <input type="email" className="form-control" placeholder="Ingrese correo electronico" />
                </div>

                <div className="form-group pb-3">
                    <label>Constraseña</label>
                    <input type="password" className="form-control" placeholder="Ingrese contraseña" />
                </div>

                <div className="form-group pb-3">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
                <p className="text-right">
                    ¿Olvidaste tu <a href=" " style={{textDecoration:'none'}}>contraseña?</a>
                </p>
            </form>
                
                
            </Card.Body>
       </Card>
    );
}

export default Login;