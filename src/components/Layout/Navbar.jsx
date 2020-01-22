import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import lupa from "../../images/lupa.svg";
import logo from "../../images/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingBag,
  faShoppingCart
} from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  return (
    <nav className="navigator">
      <ul className="navigator-items ">
        <li className="navigator-item">
          <Link className="navigator-item-link" to="/">
            <img src={logo} height="70px" alt="" />
          </Link>
        </li>
        <li className="navigator-item flex ">
          <div className="complete border">
            <Link to="/buscar" className="navigator-item-link">
              <img className="lupa" src={lupa} width="20px" alt="" />
            </Link>
            <input type="search" name="" placeholder="Que buscas?" id="" />
          </div>
        </li>
        <li className="navigator-item">
          <Link to="/mispedidos" className="navigator-item-link">
            <FontAwesomeIcon icon={faShoppingBag} size="2x" />
          </Link>
        </li>
        <li className="navigator-item">
          <Link to="/carro" className="navigator-item-link">
            <FontAwesomeIcon icon={faShoppingCart} size="2x" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
