import Button from "../button/button.component";
import "./product-item.styles.scss";

const ProductItem = ({ product }) => {
  return (
    <div className="product">
      <div className="product-image">
        <img src={product.imgSrc} alt={product.subHeader} />
      </div>
      <h3>{product.subHeader}</h3>
      <span>{product.price}</span>
      <Button>Add To Cart</Button>
    </div>
  );
};

export default ProductItem;
