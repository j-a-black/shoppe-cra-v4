import DropdownItem from "../dropdown-item/dropdown-item.component";

import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

import "./dropdown-list.styles.scss";

const DropdownList = () => {
  const { cartItems } = useContext(CartContext);

  const renderCartItems = cartItems.map((cartItem) => (
    <DropdownItem key={cartItem.id} cartItem={cartItem} />
  ));

  console.log(cartItems);

  return <div className="dropdown-item-list">{renderCartItems}</div>;
};

export default DropdownList;
