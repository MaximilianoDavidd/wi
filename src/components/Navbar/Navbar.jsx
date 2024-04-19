import "./Navbar.css";
import Cart from "../CartWidget/CartWidget";
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
    return (
        <div>
            <div className="nav-container">
                <nav className="navbar">
                    <a href="#"><img src="./src/assets/Winca2.png" alt="" className="logo" /></a>
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">Productos</a></li>
                        <li><a href="">Sale</a></li>
                        <li><a href="">Contacto</a></li>
                    </ul>
                <CartWidget />
                </nav>
            </div>
        </div>

    )
}

export default Navbar


