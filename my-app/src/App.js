import "./App.css";
import Products from "./components/product/Products";
import Filter from "./components/filter/Filter";
import { PRODUCT_DATA } from "./productItems";
import { useState } from "react";
import SortedPrices from "./components/filter/Sortedprices";

const App = () => {
  const [selectedTab, setSelectedTab] = useState("همه");
  function selectedTabHandler(category) {
    setSelectedTab(category);
  }

  const [selectedSort, setSelectedSort] = useState(null);
  function selectedSortHandler(price) {
    setSelectedSort(price);
  }

  return (
    <>
      <SortedPrices
        selectedSortHandler={selectedSortHandler}
        selectedSort={selectedSort}
      />
      <Filter
        productItems={PRODUCT_DATA}
        selectedTabHandler={selectedTabHandler}
        selectedTab={selectedTab}
      />
      <Products productItems={PRODUCT_DATA} selectedTab={selectedTab} />;
    </>
  );
};

export default App;
