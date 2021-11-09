import {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { getFech } from '../../services/getFech'

const ItemDetailContainer = () => {
    
    const [prod, setProd] = useState({})

    useEffect(() => {
        getFech
        .then( res => {setProd(res)})    
        .catch(err => console.log(err))
        .finally(()=> console.log(false))       
    },[]) 
      
    console.log(prod);

    return (
        <>
            <div>
                <ItemDetail producto={prod[0]}/>
            </div>
        </>
    )
}

export default ItemDetailContainer

