import "./dropdown-item.styles.scss";

const DropdownItem = ({ cartItem }) => {
  return (
    <div className="dropdown-item">
      <img src={cartItem.imgSrc} alt={`${cartItem.subHeader}`} />
      <div className="dropdown-cartItem-details">
        <span className="dropdown-cartItem-name">{cartItem.subHeader}</span>
        <span className="dropdown-cartItem-price">
          {cartItem.qty} x ${cartItem.price}
        </span>
      </div>
      <span className="close-btn">&#10006;</span>
    </div>
  );
};

export default DropdownItem;
