import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

import Button from "../button/button.component";
import DropdownList from "../dropdown-list/dropdown-list.component";

import "./dropdown.styles.scss";

const Dropdown = ({ handleOnClick }) => {
  const { cartTotal, clearItemsFromCart, checkout } = useContext(CartContext);

  const clearCart = () => clearItemsFromCart();
  const checkoutCustomer = () => checkout();

  return (
    <div className="dropdown-container">
      <div className="dropdown-header">
        <span onClick={handleOnClick}>&#8592;</span>
        <h2>Your Shopping Cart</h2>
        <span>(999)</span>
      </div>
      <DropdownList />
      <div className="dropdown-total">
        <span>Total</span>
        <span>{cartTotal}</span>
      </div>
      <div className="dropdown-btn-container">
        <Button onClick={checkoutCustomer}>Checkout</Button>
        <Button onClick={clearCart}>Clear Cart</Button>
      </div>
    </div>
  );
};

export default Dropdown;
