import { addDoc, collection, getFirestore, } from "firebase/firestore";
import { useContext, useState } from "react";
import './Checkout.css';
import { CartContext } from "../CartContext/CartContext";
import { Link } from "react-router-dom";


const Checkout = () => {
    const { cart, clear, getTotalProducts, getSumProducts } = useContext(CartContext)
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [orderId, setOrderId] = useState("");
    const [Error, setError] = useState("");


    const obtenerTotal = () => {
        return cart.reduce((acumulador, product) => acumulador += product.price, 0).toFixed(2)

    }

    const generarOrden = () => {
        if (nombre, email, telefono == "") {
            setError("Debe completar este Campo!")
            return false
        }


        const buyer = { name: nombre, email: email, phone: telefono };
        const items = cart.map(product => ({ id: product.id, title: product.name, price: product.price }));
        const fecha = new Date();
        const date = `${fecha.getDate()}-${fecha.getMonth() + 1}-${fecha.getFullYear()} ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`
        const order = { buyer: buyer, items: items, date: date, total: obtenerTotal() };
        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        const buyersCollection = collection(db, "buyers");

        addDoc(ordersCollection, order).then(data => {
            setOrderId(data.id);
            clear();
        })
        addDoc(buyersCollection, buyer).then(data => {
        })
    }

    if (getTotalProducts() === 0) {
        return (
            <div className="container my-5">
                <div className="row">
                    <div className="col text-center">
                        <div className="alert alert-light" role="alert"><h3>El carrito está vacío</h3></div>
                        <button className="boton-check"><Link to={"/"} className="link-button">Ir al Home</Link></button>
                    </div>
                </div>
            </div>
        );
    }

    if (orderId) {
        return (
            <div className="container my-5">
                <div className="row">
                    <div className="col text-center mt-3 custom-order">
                        <div className="alert custom-order text-center" role="alert">Tu Orden de Compra es: <b>{orderId}</b></div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col mt-3">
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Nombre</label>
                            <input type="text" className="form-control custom-input" onInput={(event) => { setNombre(event.target.value) }} />
                            <div className="text-danger">{Error}</div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control custom-input" onInput={(event) => { setEmail(event.target.value) }} />
                            <div className="text-danger">{Error}</div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Telefono</label>
                            <input type="text" className="form-control custom-input" onInput={(event) => { setTelefono(event.target.value) }} />
                            <div className="text-danger">{Error}</div>
                        </div>

                        <button type="button" className="custom-button" onClick={generarOrden}>Generar Orden</button>
                    </form>

                </div>

                <div className="col mt-3">
                    <table className="table">
                        <tbody>
                            {
                                cart.map((product) => (
                                    <tr key={product.id}>
                                        <td><img src={product.img} alt={product.name} width={60} /></td>
                                        <td className="align-middle text-start">{product.name}</td>
                                        <td className="align-middle text-center">$ {product.price}</td>
                                        <td className="align-middle text-center">x{product.quantity}</td>
                                        <td className="align-middle text-center">$ {product.quantity * product.price}</td>
                                    </tr>
                                ))
                            }
                            <tr>
                                <td colSpan={4} className="align-middle text-center"><b>Total</b></td>
                                <td className="align-middle text-center"><b>${getSumProducts()}</b></td>

                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>

        </div>
    )

}

export default Checkout