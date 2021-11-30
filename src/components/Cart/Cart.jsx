import React from 'react'
import { useCartContext } from '../../Context/CartContext'
import {Link} from 'react-router-dom'
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

export const Cart = () => {

  const { CartList, borrarCarrito, borrarItem , cartTotal} = useCartContext ()
    console.log (CartList)
      return (
        <div>
          <div className="divInvisibleCart"></div>
          
          {CartList.length === 0 ? <> <div className="contCartTitulo">
                    <h2 className='cartTitulo'> <span className="inicialCartTitulo">C</span>arrito vacio</h2>
              </div>
            <Link to="/cuadros">
                <button className="buttonCount">Seleccionar un producto</button>
            </Link>
            </>
            
        :
        
        <>
        <div className='cartTableContent container'>
            <table>
                <tr className='contInfoTable'>
                    <td className="infoTable">Nombre</td>
                    <td className="infoTable">Cantidad</td>
                    <td className="infoTable ">Precio</td>
                    <td className="infoTable">Subtotal</td>
                    <td className="infoTable">Borrar item</td>
                    <td className="infoTable">Borrar todo<a className='borrarCarrito'> <FontAwesomeIcon icon={faTrashAlt} onClick={borrarCarrito} /></a></td>
                  </tr>
                    {CartList.map(prod => 
                      <tr className="jaja"
                        key={prod.id}>
                        <td className='prodTituloTable'>{prod.titulo}</td>
                        <td className='prodCantTable'>{prod.cantidad}</td>
                        <td  className='prodPrecioTable'>$ {prod.precio} </td>
                        <td className="prodSubTotalTable"> $ {prod.subtotal} </td>
                       <td className="borrarItem"><a><FontAwesomeIcon icon={faTrashAlt} onClick={() => { borrarItem(prod.id) } } /></a></td>
                    </tr>
                    )} 
            </table>
            <h4 className="prodTotalTable">El total de tu compra es de <span className="totalNum">${cartTotal}</span></h4>
                </div>
                </>
        }
     
        </div>
    )
}
