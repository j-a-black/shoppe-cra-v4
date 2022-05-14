import { Link, Outlet } from "react-router-dom";

import Dropdown from "../../components/dropdown/dropdown.component";
import Overlay from "../../components/overlay/overlay.component";

import { GiCupcake } from "react-icons/gi";
import { FaOpencart } from "react-icons/fa";

import "./navigation.styles.scss";

const Navigation = () => {
  return (
    <>
      <div className="navigation-container">
        <Link to="/" className="logo-container">
          <GiCupcake />
        </Link>
        <nav className="nav-links">
          <Link className="nav-link" to="/">
            HOME
          </Link>
          <Link className="nav-link" to="shop">
            SHOP
          </Link>
        </nav>
        <div className="cart-icon-container">
          <span className="cart-icon-qty">999</span>
          <FaOpencart className="cart-icon-icon" />
        </div>
        <Overlay>
          <Dropdown />
        </Overlay>
      </div>
      <div className="gutter" />
      <Outlet />
    </>
  );
};

export default Navigation;
