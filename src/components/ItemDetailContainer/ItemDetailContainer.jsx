import {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom';
import {getFirestore} from '../../services/getFirestore'


export const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([])
    const { id } = useParams()
    

    useEffect(() => {
        const db1 = getFirestore()
        db1.collection('items').doc(id).get()
            .then(res => {
                setProducto({id: res.id, ...res.data()})
            })
            .catch(err => console.log(err))
    },[] ) 
      
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

