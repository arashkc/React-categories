import "./ProductItem.css";
import ProductDetails from "./ProductDetails.js";

function ProductItem(props) {
  // const productTitle = "میز چوبی";
  // const productCategory = "میز";
  return (
    <div className="product-item">
      <h2>{props.title}</h2>
      <span>{props.category}</span>
      <ProductDetails price={props.price} date={props.date}></ProductDetails>
    </div>
  );
}

export default ProductItem;
