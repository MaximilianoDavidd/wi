import { useEffect, useState } from "react";
import "./ItemDetailContainer.css"
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const {itemId} = useParams();

    useEffect(() => {
        const db = getFirestore();
        console.log("Tipo de id:", itemId);
        console.log("Valor de id:", itemId);
        const docRef = doc(db, "items", itemId);
        getDoc(docRef).then(snapShot => {
            if (snapShot.exists()) {
                console.log("Datos del producto:", snapShot.data());
                setProduct({id:snapShot.id, ...snapShot.data()});
            } else {
                console.log("No existe producto");
                setProduct({});
            }
        });

    }, [itemId]);


    return(
        <div className="ItemDetailContainer">
            <ItemDetail item={product} />
        </div>
    )
}

export default ItemDetailContainer