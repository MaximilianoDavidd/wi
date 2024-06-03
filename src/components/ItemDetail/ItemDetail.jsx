import { useContext } from "react";
import { CartContext } from "../CartContext/CartContext"
import ItemCount from "../ItemCount/ItemCount"
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const ItemDetail = ({ item }) => {
    const { addItem } = useContext(CartContext);

    const onAdd = (quantity) => {
        console.log('Cantidad seleccionada:', quantity);
        addItem(item, quantity);
    };

    return (
        <div className='card-container'>
            <Card style={{ width: '20rem' }} className='custom-card'>
                <header className='header'>
                    <h4 className='itemHeader'>{item.name}</h4>
                </header>
                <picture>
                    <Card.Img variant="top" src={item.img} alt={item.name} className='itemImg' />
                </picture>
                <section>
                    <p className='info'>${item.price}</p>
                    <p className='info'>Stock disponible: {item.stock}</p>
                </section>
                <footer className='itemFooter'>
                    <ItemCount stock={item.stock} onAdd={onAdd} />
                    {/* Aquí puedes incluir los Links si lo deseas */}
                </footer>
            </Card>
        </div>
    );
};

export default ItemDetail;