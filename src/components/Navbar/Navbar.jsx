import React from "react";
import { NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import logo from "../../assets/Winca2.png";
import "./Navbar.css";

const NavbarComponent = () => {
  return (
    <div className="nav-container">
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img src={logo} className="logo" alt="Logo"/>
          </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0 mx-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/category/remeras">Remeras</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/category/pantalones">Pantalones</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/category/buzos">Buzos</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/category/camperas">Camperas</NavLink>
              </li>
                          </ul>
              <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <CartWidget className="nav-link carrito" />
              </li>
            </ul>

          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarComponent;