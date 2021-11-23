import {useState, useContext} from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import '../ItemDetail/ItemDetail.css'
import {CartContext} from '../../Context/CartContext'

const ItemDetail = ({producto}) => {
  
  const [wasClicked, setWasClicked] = useState(false)

  const {cartList, agregarCarrito} = useContext(CartContext)

  const handleAdd = (cantidad) => {
    console.log(cantidad)
    setWasClicked(true);
    agregarCarrito({ ...producto, cantidad: cantidad })
  }

    return (
      <div>
          <div className="row g-0">
            <div className="col-md-6">
              <img src={producto.imagen} class="imgDetail img-fluid rounded-start" alt="..."/>
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h4 className="tituloCardDetail card-title">{producto.titulo}</h4>
                <p className="parrafoCardDetail card-text">{producto.descripcion}</p>
    
                    <div className="contInfo">
                      <h5 className="h5Info">Tecnica</h5>
                    </div>
                      <p className="pInfo">{producto.tecnica}</p>
              
                    <div className="contInfo">
                      <h5 className="h5Info">Dimensiones</h5>
                    </div>
                      <p className="pInfo">{producto.dimensiones}</p>
                    
                    <div className="contInfo">
                      <h5 className="h5Info">Envio</h5>
                    </div>
                      <p className="pInfo">{producto.envio}</p>
                   
                    <div className="contInfo">
                      <h5 className="h5Info">Precio</h5>
                    </div>
                      <p className="pInfo">{producto.precio}</p>
                    {wasClicked ? <Link to="/cart" className="irAlCarrito">Ir al carrito</Link> : <ItemCount initial={0} stock={2} onAdd={handleAdd}/>}
                   
                    
              </div>
            </div>
        </div>
        <Link to="/cuadros"><button className="volver"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
        </svg> Ver todo
        </button></Link>
        
        </div>
       
    )
}

export default ItemDetail


