import "./Filter.css";
import { useState } from "react";

function uniqueCategoriesHelper(list) {
  const categoryItems = list.map((product) => product.category);
  return categoryItems.filter(
    (category, index) => categoryItems.indexOf(category) === index
  );
}

export default function Filter({
  productItems,
  selectedTabHandler,
  selectedTab,
}) {
  const productUniqueCategories = uniqueCategoriesHelper(productItems);

  return (
    <div className="filter">
      <ul className="filter__list">
        {productUniqueCategories.map((category, index) => (
          <li key={index}>
            <button onClick={() => selectedTabHandler(category)}>
              {category}
            </button>
          </li>
        ))}
      </ul>
      {selectedTab}
    </div>
  );
}
