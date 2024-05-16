import "./Filter.css";

const sortedPrices = [150, 300, 450];
function SortedPrices(props) {
  return (
    <div className="filter">
      <ul className="filter__list">
        <li>
          {sortedPrices.map((price, index) => (
            <button
              onClick={() => props.selectedSortHandler(price)}
              className={props.selectedSort === price ? "active" : ""}
            >
              {price}
            </button>
          ))}
        </li>
      </ul>
    </div>
  );
}

export default SortedPrices;
