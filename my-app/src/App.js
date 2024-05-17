import { useState } from "react";
import "./App.css";
import Products from "./components/product/Products";
import Filter from "./components/filter/Filter";
import { PRODUCT_DATA } from "./productItems";
import SortedPrices from "./components/filter/SortedPrices";

// const App = () => {
//   const [selectedTab, setSelectedTab] = useState("همه");
//   function selectedTabHandler(category) {
//     setSelectedTab(category);
//   }

//   const [selectedSort, setSelectedSort] = useState(null);
//   function selectedSortHandler(price) {
//     setSelectedSort(price);
//   }

//   return (
//     <>
//       <SortedPrices
//         productItems={PRODUCT_DATA}
//         selectedSortHandler={selectedSortHandler}
//         selectedSort={selectedSort}
//       />
//       <Filter
//         productItems={PRODUCT_DATA}
//         selectedTabHandler={selectedTabHandler}
//         selectedTab={selectedTab}
//       />
//       <Products productItems={PRODUCT_DATA} selectedTab={selectedTab} />;
//     </>
//   );
// };

const App = () => {
  const [selectedTab, setSelectedTab] = useState("همه");
  const [selectedSort, setSelectedSort] = useState(null);

  function selectedTabHandler(category) {
    setSelectedTab(category);
  }

  function selectedSortHandler(price) {
    setSelectedSort(price);
  }

  function filterProducts() {
    let filteredProducts = PRODUCT_DATA;

    if (selectedTab !== "همه") {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === selectedTab
      );
    }

    if (selectedSort !== null) {
      filteredProducts = filteredProducts.filter(
        (product) => product.price <= selectedSort
      );
    }

    return filteredProducts;
  }

  return (
    <>
      <SortedPrices
        productItems={PRODUCT_DATA}
        selectedSortHandler={selectedSortHandler}
        selectedSort={selectedSort}
      />
      <Filter
        productItems={PRODUCT_DATA}
        selectedTabHandler={selectedTabHandler}
        selectedTab={selectedTab}
      />
      <Products productItems={filterProducts()} selectedTab={selectedTab} />
    </>
  );
};

export default App;
