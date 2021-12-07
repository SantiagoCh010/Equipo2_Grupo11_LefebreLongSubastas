function Footer(props) {
    return (
        <footer className="bg-dark text-white mt-5">
          <div className="container">
              <div className="card bg-dark">
                  <div className="card-body float-left">
                      <p className="mb-1">¿Quiénes somos? { props.direccion }</p>
                      <p className="mb-1">¿Cómo comprar? { props.telefono }</p>
                      <p className="mb-1">Quiero vender { props.telefono }</p>
                  </div>
              </div>
          </div>
      </footer>
    );
}

export default Footer;