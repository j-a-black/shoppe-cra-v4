import Button from "../button/button.component";
import DropdownList from "../dropdown-list/dropdown-list.component";

import "./dropdown.styles.scss";

const Dropdown = () => {
  return (
    <div className="dropdown-container">
      <div className="dropdown-header">
        <span>&#8592;</span>
        <h2>Your Shopping Cart</h2>
        <span>(999)</span>
      </div>
      <DropdownList />
      <div className="dropdown-total">
        <span>Total</span>
        <span>999.99</span>
      </div>
      <div className="dropdown-btn-container">
        <Button>Checkout</Button>
        <Button>Clear Cart</Button>
      </div>
    </div>
  );
};

export default Dropdown;
