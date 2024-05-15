import { useState, useEffect } from "react";
import "./ItemListContainer.css";
import { getProducts, getProductsByCategory } from "../../asyncMock";
import ItemList from '../ItemList/ItemList';
import { useParams, useLocation } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();
    const location = useLocation();

    useEffect(() => {
        const asyncFunc = categoryId ? getProductsByCategory : getProducts;

        asyncFunc(categoryId) 
            .then(response => {
                setProducts(response);
            })
            .catch(error => {
                console.error(error);
            });
    }, [categoryId]);

    // Mostrar el mensaje de bienvenida solo si no hay un categoryId en la URL
    const showGreeting = !categoryId && location.pathname === '/';

    return (
        <>
            {showGreeting && (
                <div className="greetin">
                    <h1 className="welcome">{greeting}</h1>
                </div>
            )}
            <ItemList products={products} />
        </>
    );
};

export default ItemListContainer;