 import "./Filter.css";

function SortedPrices({ selectedSortHandler, selectedSort }) {
  const prices = [100, 200, 500];

  return (
    <div className="filter">
      <ul className="filter__list">
        {prices.map((price, index) => (
          <li key={index}>
            <button
              className={selectedSort === price ? "active" : ""}
              onClick={() => selectedSortHandler(price)}
            >
              {price}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SortedPrices;
