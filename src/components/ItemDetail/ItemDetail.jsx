import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({producto}) => {
    return (
        <div>
             <div className='card w-50'>
                    <div className="container">
                        <label>{producto.titulo}</label>
                    </div>
            
                    <div className="container">
                        <img  src={producto.imagen} className="w-25" alt="foto" />
                        <br/>
                        <label>{producto.descripcion}</label>
                    </div>
            
                    <div className="container">
                        <label>{producto.precio}</label>
                    </div>
                <ItemCount initial={0} stock={2}/>
            </div>
        </div>
    )
}

export default ItemDetail


