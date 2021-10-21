import './NavBar.css';

const NavBar = () => {
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3">
                        <nav class="nav flex-column">
                            <div className="contH1">
                                <h1>YANTAZ</h1>
                            </div>
                        <a class="nav-link" aria-current="page" href="#">Inicio</a>
                        <a class="nav-link" href="#">Link</a>
                        <a class="nav-link" href="#">Link</a>
                        <a class="nav-link" href="#">Contacto</a>
                    </nav>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavBar


