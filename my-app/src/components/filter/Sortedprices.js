import "./Sortedprices.css";
import "./Filter.css";

const sortedPrices = [100, 200, 300];
function SortedPrices(props) {
  return (
    <div className="filter">
      <ul className="filter__list">
        {sortedPrices.map((price, index) => (
          <li
            onClick={() => props.selectedSortHandler(price)}
            className={props.selectedSort === price ? "active" : ""}
          >
            {price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SortedPrices;
