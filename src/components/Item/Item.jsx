import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

export const Item = ({prod}) => {
    return (
        
        <div className="card mb-12" > 
        <div className="row g-0">
            <div className="col-md-6">
                <img src={prod.imagen} className="img-fluid rounded-start"/>
            </div>

            <div className="col-md-6">
                <div className="card-body">
                    <div className="contCardTitle">
                            <h5 className="card-title">{prod.titulo}</h5>
                    </div>
                    <p className="card-text"> {prod.descripcion} </p>
                    <div className="contInfo">
                        <h5 className="h5Info">Tecnica</h5>
                    </div>
                    <p className="info">{prod.tecnica}</p>

                    <div className="contInfo">
                        <h5 className="h5Info">Dimensiones</h5>
                    </div>
                        <p className="info">{ prod.dimensiones}</p>

                    <div className="contInfo">
                        <h5 className="h5Info">Envío</h5>
                    </div>
                        <p className="info">{prod.envio}</p>

                    <div className="contInfo">
                        <h5 className="h5Info">Precio</h5>
                    </div>
                    <p className="info">{prod.precio}</p>

                        <ItemCount initial={0} stock={2}/>
                </div>
            </div>
        </div>
    </div>
        
    )
}

