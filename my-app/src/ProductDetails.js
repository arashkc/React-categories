import "./ProductDetails.css";

function ProductDetails(props) {
  const productPrice = props.price + "ت";
  const productDate = props.date.toLocaleString("fa-IR", {
    dateStyle: "short",
  });
  return (
    <div className="product-item-price">
      <span>{`${productPrice} ت`}</span>
      <span>{productDate}</span>
    </div>
  );
}

export default ProductDetails;
