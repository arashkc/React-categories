import Card from "../UI/Card";
import ProductItem from "./ProductItem";
import "./Products.css";

// function Products({ productItems, selectedTab }) {
//   return (
//     <Card className="products">
//       {selectedTab === "همه" &&
//         productItems.map((product, index) => (
//           <ProductItem key={index} {...product} />
//         ))}
//       {selectedTab !== "همه" &&
//         productItems
//           .filter((product) => product.category === selectedTab)
//           .map((product, index) => <ProductItem key={index} {...product} />)}
//     </Card>
//   );
// }

function Products({ productItems }) {
  return (
    <Card className="products">
      {productItems.map((product, index) => (
        <ProductItem key={index} {...product} />
      ))}
    </Card>
  );
}

export default Products;
