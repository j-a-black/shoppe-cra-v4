import { products } from "../../data";

import "./dropdown-list.styles.scss";

const DropdownList = () => {
  return (
    <div className="dropdown-item-list">
      <div className="dropdown-item">
        <img src={products[0].imgSrc} alt={`${products[0].subHeader}`} />
        <div className="dropdown-item-details">
          <span className="dropdown-item-name">{products[0].subHeader}</span>
          <span className="dropdown-item-price">
            {products[0].qty} x ${products[0].price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default DropdownList;
