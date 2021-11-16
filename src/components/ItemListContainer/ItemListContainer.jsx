import {useState, useEffect} from 'react';
import { getFech } from '../../services/getFech'
import { useParams } from 'react-router';

import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList';


function ItemListContainer() {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const {cuadrosID} = useParams()

    useEffect(() => {
        if (cuadrosID) {

        getFech 
        .then(res => {
        setProductos(res.filter(prod => prod.categoria === cuadrosID))
        })
        .catch(err => console.log(err))    
        .finally(() => setLoading(false))
            
        } else {
            getFech 
            .then(res => {
            setProductos(res)
            })
            .catch(err => console.log(err))    
            .finally(() => setLoading(false))
        }
    }, [cuadrosID])               

    console.log(productos)
    
    return (
        <div>
            <div className="contObras">
                <h2 className="h2Obras"><span className="inicialObras">O</span>bras en venta</h2>       
            </div>
            <div className="containerCard">
                {loading ? <h2 className="carga"> <span className="cargaInicial">C</    span>argando...</h2>:<ItemList Productos={productos} />}
            </div>
        </div>
    )
}

export default ItemListContainer
    
