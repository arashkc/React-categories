import "./ProductDetails.css";

function ProductDetails(props) {
  return (
    <div className="product-item-price">
      <span>{`${props.price} ت`}</span>
      <span>{props.date}</span>
    </div>
  );
}

export default ProductDetails;
