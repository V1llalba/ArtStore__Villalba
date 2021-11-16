import {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { getFech } from '../../services/getFech'
import { useParams } from 'react-router-dom';


export const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const { id } = useParams()
    

    useEffect(() => {
        getFech
        .then( res => setProducto(res.find(producto => producto.id === parseInt(id))))    
        .catch(err => console.log(err))
        .finally(()=> console.log(false))       
    },[id]) 
      
    console.log(id);

    return (
        <>
            <div>
                <div className="divInvisibleCart"></div>
                <ItemDetail producto={producto} />
            </div>
        </>
    )
}

export default ItemDetailContainer

