import './ItemList.css'
import Item from '../Item/Item'
import { getProducts } from '../../asyncMock'

const ItemList = ({ products }) => {
    return (
        <div className='ListGroup container'>
            {products.map(prod => <Item key={prod.id} {...prod} />)}
        </div>
    )
}

export default ItemList