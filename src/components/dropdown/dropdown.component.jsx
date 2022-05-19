import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

import Button from "../button/button.component";
import DropdownList from "../dropdown-list/dropdown-list.component";

import "./dropdown.styles.scss";

const Dropdown = ({ handleOnClick }) => {
  const { cartCount, cartTotal, clearItemsFromCart, cartCheckout } =
    useContext(CartContext);

  const clearCart = () => clearItemsFromCart();
  const checkoutCartItems = () => cartCheckout();

  return (
    <div className="dropdown-container">
      <div className="dropdown-header">
        <span className="left-arrow" onClick={handleOnClick}>
          &#8592;
        </span>
        <h2>Your Shopping Cart</h2>
        <span className="dropdown-counter">({cartCount})</span>
      </div>
      <DropdownList />
      <div className="dropdown-total">
        <span>Total</span>
        <span>{cartTotal}</span>
      </div>
      <div className="dropdown-btn-container">
        <Button onClick={checkoutCartItems}>Checkout</Button>
        <Button onClick={clearCart}>Clear Cart</Button>
      </div>
    </div>
  );
};

export default Dropdown;
