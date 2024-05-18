import "./Search.css";
import Card from "../UI/Card";
import { useRef, useState } from "react";

function Search({ setProductName }) {
  const productNameRef = useRef();

  const [isSearching, setIsSearching] = useState(false);
  //   function setProductNameValue(e) {
  //     setProductName(e.target.value);
  //   }

  function handleSearchBox() {
    isSearching
      ? submitInput()
      : setIsSearching((latestIsSearchingValue) => !latestIsSearchingValue);
  }

  const timer = useRef();

  function submitInput() {
    if (timer) clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      setProductName(productNameRef.current.value);
    }, 1000);
  }
  return (
    <Card className="search">
      {isSearching ? (
        <input
          type="text"
          placeholder="نام محصول مدنظر"
          ref={productNameRef}
          //   value={productName}
          onChange={submitInput}
        />
      ) : null}
      <button onClick={handleSearchBox}>
        {isSearching ? "جستجو" : "جستجو نام محصول"}{" "}
      </button>
    </Card>
  );
}

export default Search;
