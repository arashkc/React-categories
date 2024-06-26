import "./Filter.css";

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
            <button
              className={selectedTab === category ? "active" : ""}
              onClick={() => selectedTabHandler(category)}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
      <div className="filter__alert">
        {`شما در حال مشاهده ${selectedTab} ${
          selectedTab !== "همه" ? "ها " : ""
        }هستید.`}
        {selectedTab !== "همه" && (
          <span onClick={() => selectedTabHandler("همه")}>x</span>
        )}
      </div>
    </div>
  );
}
