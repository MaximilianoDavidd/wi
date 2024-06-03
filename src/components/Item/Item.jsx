import './Item.css'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Item = ({ id, name, img, price, stock }) => {

    return (

        <div className='card-container'>
        
        <Card style={{ width: '20rem' }} className='custom-card'>
            <header className='header'>
                <h5 className='itemHeader'>
                    {name}
                </h5>
            </header>
            <picture>
            <Card.Img variant="top" src={img} alt={name} className='itemImg' />
            </picture>
            <section>
                <p className='info'>
                    ${price}
                </p>
            </section>
            <footer className='itemFooter'>
                <Link to={`/item/${id}`} className='option'>Ver detalle</Link>
            </footer>

            </Card>
            </div>
    )
}   

export default Item