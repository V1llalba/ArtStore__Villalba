import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom'
import { useCartContext } from '../../Context/CartContext';

import './NavBar.css';

const NavBar = () => {
  const {cantidadItem} = useCartContext()
  return (
      <div>  
      <nav className="navbar fixed-top">
        <div className="container-fluid">
          <Link to='/'>
            <CartWidget />
          </Link>
          
            <button className="navbar-light navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div className="cabezaMenu offcanvas-header">
              <h4 className="h5Menu offcanvas-title" id="offcanvasNavbarLabel"> <span className="inicialMenu">M</span>enu</h4>
                  <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
                <div className="cuerpoMenu offcanvas-body">
                  <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link to='/cart'>
                <a className="cantidadItem" href="">  {cantidadItem() !== 0 && cantidadItem()}</a>
                  <a className="contBolsa" href=""><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bolsa bi bi-bag-fill" viewBox="0 0 16 16">
                     <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z"/>
                    </svg></a>
                  </Link>
                  </li>
                    <li className="nav-item">
                  <Link to="/"><a className="lista nav-link" href="#">Inicio</a></Link>
    
                    </li>
                    <li class="nav-item dropdown">
            <a class="lista nav-link dropdown-toggle" href="#" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Obras
            </a>
            <ul class="subMenu dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">
              <li><Link to="/cuadros"><a class="subLista dropdown-item" href="#">Todo</a></Link></li>
              <li><Link to="/cuadros/paisajismo"><a class="subLista dropdown-item" href="#">Paisajismo</a></Link></li>
              <li><Link to="/cuadros/street Art"><a class="subLista dropdown-item" href="#">Street Art</a></Link></li>
              <li>
               
              </li>
              <li><Link to="/cuadros/retrato"><a class="subLista dropdown-item" href="#">Retrato</a></Link></li>
            </ul>
          </li>     
                    {/* <li className="nav-item">
                      <Link to="/cuadros"><a className="lista nav-link" href="#">Obras</a></Link>
                    </li> */}
                    <li className="nav-item">
                      <a className="lista nav-link" href="#">
                    Contacto
                      </a> 
                </li>
              </ul>
              <div className="redes">
                <h5 className="h5Redes"> <span className="inicialMenu">R</span>edes sociales</h5>
                <a href=""><a href="https://www.instagram.com/"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="icono bi bi-instagram" viewBox="0 0 16 16">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                </svg></a></a>

                <a href=""><a href=""><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="icono bi bi-twitter" viewBox="0 0 16 16">
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                </svg></a></a>
              </div>
              <div className="copy">
                <p className="textCopy">Copyright Art Store - 2021. Todos los derechos reservados.</p>
              </div>
            </div>
          </div>
          </div>
        </nav>
      </div>
    );
}

export default NavBar


