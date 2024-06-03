import { Link } from 'react-router-dom';
import './ItemCount.css';
import { useEffect, useState } from 'react';

const ItemCount = ({ stock, onAdd }) => {
    const [quantity, setQuantity] = useState(1);
    const [itemStock, setItemStock] = useState(stock);
    const [visible, setVisible] = useState(true);

    const increment = () => {
        if (quantity < itemStock) {
            setQuantity(quantity + 1);
        }
    };

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const addToCart = () => {
        if (quantity <= itemStock) {
            const updatedStock = itemStock - quantity;
            setItemStock(updatedStock);
            onAdd(quantity);
            setQuantity(1);
            setVisible(false);
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Agregado al Carrito",
                showConfirmButton: false,
                timer: 1500
            });
            console.log(`Agregaste ${quantity} productos`);
        }
    };

    useEffect(() => {
        setItemStock(stock);
    }, [stock]);

    return (
        <div className="container-count">
            <div className='Counter'>
                <div className='Controls'>
                    <button className='Button' onClick={decrement}>-</button>
                    <h4 className='Number'>{quantity}</h4>
                    <button className='Button' onClick={increment}>+</button>
                </div>
                <div>
                    {visible ? (
                        itemStock > 0 ? (
                            <button className='Button' onClick={addToCart}>
                                Agregar
                            </button>
                        ) : (
                            <button className='Button' disabled>SIN STOCK!</button>
                        )
                    ) : (
                        <div className='End'>
                            <Link to="/cart" className='Link'>
                                <button className='Button2'>Finalizar Compra</button>
                            </Link>
                            <Link to="/" className='Link'>
                                <button className='Button2'>Volver a Inicio</button>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ItemCount;