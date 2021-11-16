import React, { useState } from 'react'
import './ItemCount.css'


export const ItemCount = ({stock, initial}) => {
    const [count, setCount] = useState(initial)

    const sumItem = () => {
        count < stock ? setCount(count + 1) : alert('Superaste el limite de productos')
    }

    const resItem = () => {
        count > initial ? setCount(count - 1) : alert('Debe sumar prducto para añadir al carrito')

    }

    const onAdd = () => {
       if (count >= 1) alert(`Agregaste ${count} productos`)
    }
    
    return (
        <div>
            <div className="contBoton">
                <button className="btn sumar" onClick={sumItem} >+</button>
                <label className="cant">Cantidad:{count} </label>

                <button className="btn restar" onClick={resItem}>-</button>

                <button className="agregar" onClick={onAdd}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount 
