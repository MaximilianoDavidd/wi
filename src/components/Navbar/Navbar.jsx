import React from "react";
import { NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import logo from "../../assets/Winca2.png";
import "./Navbar.css";
import { Navbar } from "react-bootstrap";

const NavbarComponent = () => {
  return (
    <div className="nav-container">
      <nav className="navbar">
        <div id="responsive-navbar-nav" className="navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">

              <NavLink to="/" exact="true" className="nav-link">
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/category/remeras" className="nav-link">
                Remeras
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/category/pantalones" className="nav-link">
                Pantalones
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/category/buzos" className="nav-link">
                Buzos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/category/camperas" className="nav-link">
                Camperas
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/sale" className="nav-link">
                Sale
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contacto" className="nav-link">
                Contacto
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-brand">
          <NavLink to="/">
            <img src={logo} alt="Logo" className="logo" />
          </NavLink>
        </div>
        <CartWidget className="carrito" />
      </nav>
    </div>
  );
};

export default NavbarComponent;