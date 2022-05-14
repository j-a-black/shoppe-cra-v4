import "./dropdown-item.styles.scss";

const DropdownItem = ({ products }) => {
  return (
    <div className="dropdown-item">
      <img src={products[0].imgSrc} alt={`${products[0].subHeader}`} />
      <div className="dropdown-item-details">
        <span className="dropdown-item-name">{products[0].subHeader}</span>
        <span className="dropdown-item-price">
          {products[0].qty} x ${products[0].price}
        </span>
      </div>
      <span className="close-btn">&#10006;</span>
    </div>
  );
};

export default DropdownItem;
