import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

import "./dropdown-item.styles.scss";

const DropdownItem = ({ cartItem }) => {
  const { removeItemFromCart } = useContext(CartContext);

  const removeFromCart = () => removeItemFromCart(cartItem);

  return (
    <div className="dropdown-item">
      <span className="dropdown-img-and-details-box">
        <img src={cartItem.imgSrc} alt={`${cartItem.subHeader}`} />

        <span className="dropdown-cartItem-details">
          <div className="dropdown-cartItem-name">{cartItem.subHeader}</div>
          <div className="dropdown-cartItem-price">
            {cartItem.qty} x ${cartItem.price}
          </div>
        </span>
      </span>

      <div className="close-btn" onClick={removeFromCart}>
        &#10006;
      </div>
    </div>
  );
};

export default DropdownItem;
