import "./App.css";
import ProductItem from "./ProductItem";

function App() {
  const products = [
    {
      id: 1,
      title: "میز چوبی",
      price: "300",
      category: "میز",
      date: new Date("2024-02-10"),
    },
    {
      id: 2,
      title: "صندلی تاشو",
      price: "80",
      category: "صندلی",
      date: new Date("2024-02-10"),
    },
    {
      id: 3,
      title: "صندلی اداری",
      price: "120",
      category: "صندلی",
      date: new Date("2024-02-9"),
    },
    {
      id: 4,
      title: "میز پلاستیکی",
      price: "110",
      category: "میز",
      date: new Date("2024-02-11"),
    },
    {
      id: 5,
      title: "میز ناهار خوری",
      price: "440",
      category: "میز",
      date: new Date("2024-02-8"),
    },
    {
      id: 6,
      title: "تلوزیون 40 اینچ",
      price: "500",
      category: "تلوزیون",
      date: new Date("2024-02-12"),
    },
  ];

  return (
    <div className="products">
      <ProductItem
        title={products[0].title}
        price={products[0].price}
        date={products[0].date}
        category={products[0].category}
      ></ProductItem>
      <ProductItem
        title={products[1].title}
        price={products[1].price}
        date={products[1].date}
        category={products[1].category}
      ></ProductItem>
      <ProductItem
        title={products[2].title}
        price={products[2].price}
        date={products[2].date}
        category={products[2].category}
      ></ProductItem>
      <ProductItem
        title={products[3].title}
        price={products[3].price}
        date={products[3].date}
        category={products[3].category}
      ></ProductItem>
      <ProductItem
        title={products[4].title}
        price={products[4].price}
        date={products[4].date}
        category={products[4].category}
      ></ProductItem>
      <ProductItem
        title={products[5].title}
        price={products[5].price}
        date={products[5].date}
        category={products[5].category}
      ></ProductItem>
    </div>
  );
}

export default App;
