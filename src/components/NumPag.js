
function NumPag() {
    return (
        <nav aria-label="page-navigation" className="m-auto">
            <ul className="pagination justify-content-center">
                <li className="page-item disabled">
                    <a className="page-link" href="none">Anterior</a>
                </li>
                <li className="page-item"><a className="page-link" href="none">1</a></li>
                <li className="page-item active" aria-current="page">
                    <a className="page-link" href="none">2</a>
                </li>
                <li className="page-item"><a className="page-link" href="none">3</a></li>
                <li className="page-item">
                    <a className="page-link" href="none">Siguiente</a>
                </li>
            </ul>
        </nav>           
    )
}

export default NumPag;
