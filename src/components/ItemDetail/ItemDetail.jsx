import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { Card } from 'react-bootstrap';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';


const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, name, price
        }
        addItem(item, quantity)
    }

    return (
        <div className='card-container'>
            <Card style={{ width: '20rem' }} className='custom-card'>
                <header className='header'>
                    <h4 className='itemHeader'>{name}</h4>
                </header>
                <picture>
                    <Card.Img variant="top" src={img} alt={name} className='itemImg' />
                </picture>
                <section>
                    <p className='info'>${price}</p>
                    <p className='info'>Stock disponible: {stock}</p>
                </section>
                <footer className='itemFooter'>
                    {
                        quantityAdded > 0 ? (
                            <>
                                <Link to='/cart' className="option">Pagar</Link>
                                <Link to='/' className="option">Seguir  Comprando</Link>
                            </>

                        ) : (
                            <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                        )
                    }
                </footer>
            </Card>
        </div>
    );
};

export default ItemDetail;