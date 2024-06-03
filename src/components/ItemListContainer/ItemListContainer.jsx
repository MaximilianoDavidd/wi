import { useState, useEffect } from "react";
import "./ItemListContainer.css";
import ItemList from '../ItemList/ItemList';
import { useParams, useLocation } from "react-router-dom";
import { collection, getFirestore, query, where, getDocs } from "firebase/firestore";
import Loading from "../Loading/Loading";


const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();
    const location = useLocation();

    //Acceder a una coleccion de Firestore

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        const resultQuery = categoryId ? query(itemsCollection, where("category", "==", categoryId)) : itemsCollection;
        getDocs(resultQuery)
        .then(snapShot => {
            if(snapShot.size > 0) {
                setProducts(snapShot.docs.map(item => ({id:item.id, ...item.data()})));
            } else {
                console.log("No se encuentran productos");
                setItems([]);
            }
        })
        .catch(error => {
            console.error("Error al obtener productos:", error);
        })
        .finally(() => {
            setLoading(false); // Marca el loading como falso cuando termina la carga
        });
 
    }, [categoryId]);

    // Mostrar el mensaje de bienvenida solo si no hay un categoryId en la URL
    const showGreeting = !categoryId && location.pathname === '/';

    return (
        <>
            {loading ? ( // Mostrar el componente Loading mientras se carga
                <Loading />
            ) : (
                <>
                    {showGreeting && (
                        <div className="greetin">
                            <h1 className="welcome">{greeting}</h1>
                        </div>
                    )}
                    <ItemList products={products} />
                </>
            )}
        </>
    );


}

export default ItemListContainer;

