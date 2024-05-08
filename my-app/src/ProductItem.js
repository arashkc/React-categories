import "./ProductItem.css";
import ProductDetails from "./ProductDetails.js";

function ProductItem() {
  const productTitle = "میز چوبی";
  const productCategory = "میز";
  const productPrice = "320";
  const productDate = new Date("2024-5-7").toLocaleString("fa-IR", {
    dateStyle: "short",
  });
  return (
    <div className="product-item">
      <h2>{productTitle}</h2>
      <span>{productCategory}</span>
      <ProductDetails price={productPrice} date={productDate}></ProductDetails>
    </div>
  );
}

export default ProductItem;
