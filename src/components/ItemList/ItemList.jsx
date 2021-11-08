import React from 'react'
import { Item } from '../Item/Item'

const ItemList = ({Productos}) => {
    return (
        <>
            {
                Productos.map(prod => <Item prod={prod}/>)
            }
        </>
    )
}

export default ItemList
