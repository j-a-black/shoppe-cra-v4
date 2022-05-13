import ProductItem from "../product-item/product-item.component";

const ProductList = ({ products }) => {
  const renderCardList = products.map((product) => (
    <ProductItem key={product.id} product={product} />
  ));
  return <>{renderCardList}</>;
};

export default ProductList;
