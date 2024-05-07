import "./ProductItem.css";

function ProductItem() {
  const productTitle = "میز چوبی";
  const productCategory = "میز";
  const productPrice = "300";
  const productDate = new Date("2024-5-7").toLocaleString("fa-IR", {
    dateStyle: "short",
  });
  return (
    <div className="product-item">
      <h2>{productTitle}</h2>
      <span>{productCategory}</span>
      <div className="product-item-price">
        <span>{`${productPrice} ت`}</span>
        <span>{productDate}</span>
      </div>
    </div>
  );
}

export default ProductItem;
