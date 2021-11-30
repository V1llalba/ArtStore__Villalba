import {useState, useEffect} from 'react';
import { getFech } from '../../services/getFech'
import { useParams } from 'react-router';

import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList';
import { getFirestore } from '../../services/getFirestore';


function ItemListContainer() {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const {cuadrosID} = useParams()

    useEffect(() => {

        const dbQuery = getFirestore()

        /*dbQuery.collection('items').get()*/
        
        /* dbQuery.collection('items').doc('H7mRspZshkJ77iBZKPJk').get()
        .then(resp => setProductos({ id:resp.id, ...resp.data() } )) */

        if (cuadrosID) {

            dbQuery.collection('items').get()
            .then(data => setProductos(data.docs.map(productos => ({ id: productos.id, ...productos.data() })) ))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
            
        } else {
            dbQuery.collection('items').get()
            .then(data => setProductos(data.docs.map(productos => ({ id: productos.id, ...productos.data() })) ))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
        }

         /* console.log(productos)  */


     /*    if (cuadrosID) {

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
         */
    }, [cuadrosID])               

    
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
    
