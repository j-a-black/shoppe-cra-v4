import { products } from "../../data";
import DropdownItem from "../dropdown-item/dropdown-item.component";

import "./dropdown-list.styles.scss";

const DropdownList = () => {
  return (
    <div className="dropdown-item-list">
      <DropdownItem products={products} />
      <DropdownItem products={products} />
      <DropdownItem products={products} />
      <DropdownItem products={products} />
      <DropdownItem products={products} />
      <DropdownItem products={products} />
      <DropdownItem products={products} />
      <DropdownItem products={products} />
      <DropdownItem products={products} />
      <DropdownItem products={products} />
      <DropdownItem products={products} />
      <DropdownItem products={products} />
      <DropdownItem products={products} />
      <DropdownItem products={products} />
    </div>
  );
};

export default DropdownList;
