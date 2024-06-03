import { createContext, useContext } from "react"
import { CartContext } from "../CartContext/CartContext";
import { Link } from "react-router-dom";
import './Cart.css';

const Cart = () => {
    const { cart, removeItem, clear, getTotalProducts, getSumProducts } = useContext(CartContext)

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

    return (


        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <table className="table">

                        <tbody>


                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td><img src={item.img} alt={item.name} width={60} /></td>
                                    <td className="align-middle text-start">{item.name}</td>
                                    <td className="align-middle text-center">$ {item.price}</td>
                                    <td className="align-middle text-center">x{item.quantity}</td>
                                    <td className="align-middle text-center">$ {item.quantity * item.price}</td>
                                    <td className="align-middle text-end" onClick={() => { removeItem(item.id) }} title="Eliminar Producto"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3 pointer" viewBox="0 0 16 16">
                                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                                    </svg></td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan={4} className="align-middle text-center"><b>Total</b></td>
                                <td className="align-middle text-center"><b>${getSumProducts()}</b></td>
                                <td className="align-middle text-end boton-check"><button className="boton-check"><Link to={"/checkout"} className="link-button">Checkout</Link></button></td>
                            </tr>

                            <tr>
                                <td colSpan={6} className="align-middle text-end boton-check border-0"><button className="boton-check" onClick={clear}>Vaciar Carrito</button></td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default Cart;