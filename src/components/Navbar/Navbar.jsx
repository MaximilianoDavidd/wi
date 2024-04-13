import "./Navbar.css";

const Navbar = () => {
    return (
        <div className="nav-container">
            <nav className="navbar">
               <a href="#"><img src="./src/assets/Winca2.png" alt="" className="logo"/></a> 
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Productos</a></li>
                    <li><a href="">Sale</a></li>
                    <li><a href="">Contacto</a></li>
                </ul>
                <h2 className="carrito-img"><a href="">🛒</a></h2>
            </nav>
        </div>

    )
}

export default Navbar


