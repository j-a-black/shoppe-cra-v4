import "./product-item.styles.scss";

const ProductItem = ({ product }) => {
  return (
    <div className="products">
      <div>
        <img src={product.imgSrc} alt={product.subHeader} />
      </div>
      <h3>{product.subHeader}</h3>
      hi
    </div>
  );
};

export default ProductItem;
