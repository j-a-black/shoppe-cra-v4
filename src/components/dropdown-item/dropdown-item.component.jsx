import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

import "./dropdown-item.styles.scss";

const DropdownItem = ({ cartItem }) => {
  const { removeItemFromCart } = useContext(CartContext);

  const removeFromCart = () => removeItemFromCart(cartItem);

  return (
    <div className="dropdown-item">
      <img src={cartItem.imgSrc} alt={`${cartItem.subHeader}`} />
      <div className="dropdown-cartItem-details">
        <span className="dropdown-cartItem-name">{cartItem.subHeader}</span>
        <span className="dropdown-cartItem-price">
          {cartItem.qty} x ${cartItem.price}
        </span>
      </div>
      <span className="close-btn" onClick={removeFromCart}>
        &#10006;
      </span>
    </div>
  );
};

export default DropdownItem;
