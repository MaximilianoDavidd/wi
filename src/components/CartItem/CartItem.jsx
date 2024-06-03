import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const CartItem = ({ id, name, price, quantity }) => {
    const { removeItem } = useContext(CartContext)

    return (
        <div className="cart-item">
            <h4>{name}</h4>
            <p>Precio: ${price}</p>
            <p>Cantidad: {quantity}</p>
            <button onClick={() => removeItem(id)} className="Button">Eliminar</button>
        </div>
    )
}

export default CartItem