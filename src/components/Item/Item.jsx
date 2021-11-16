import React from 'react'
import { Link } from 'react-router-dom'
import './Item.css'


export const Item = ({prod}) => {
    return (
        
        <div>
            <div className="containerCard">
                <div className="card">
                    <div className="img">
                        <img className="imgCard" src={prod.imagen} alt=""/>
                    </div>
                    <div className="infoDescripcion">
                        <h5 className="tituloCard">{prod.titulo}</h5>
                        <p className="parrafoCard">{prod.descripcion}</p>
                        <h5 className="precioCard">{prod.precio}</h5>
                       <Link to={`/detalle/${prod.id}`}> <button className="botonCard">Ver más</button></Link>
                    </div>
                </div>
            </div>
        </div>
        
        
    )
}

